const { send } = require("micro");
const fetch = require("node-fetch-cache");
const { parse } = require("url");
//const { NextApiRequest } = require("next/dist/next-server/server/api-utils");
//const ApiResponse = require("../models/ApiResponse").default;

async function handler(req, res) {
  const { query } = parse(req.url, true);

  if (!query || !query.dateStr || !query.place || !query.meal) {
    // Return a 400 Bad Request response if any required params are missing
    return send(res, 400, "");
  }

  const { dateStr, place, meal } = query;

  if (typeof dateStr !== "string") {
    return send(res, 400, "");
  }

  const [year, month, day] = dateStr.split("-");

  const date = new Date(
    parseInt(year, 10),
    parseInt(month, 10) - 1,
    parseInt(day, 10)
  );

  const url = `https://middlebury.api.nutrislice.com/menu/api/weeks/school/${place}/menu-type/${meal}/${year}/${month
    .toString()
    .padStart(2, "0")}/${day.toString().padStart(2, "0")}/?format=json`;

  const response = await fetch(url);

  if (!response.ok) {
    throw new Error(response.statusText);
  }

  const data = await response.json();

  const items = data.days.find(
    (daytoFind) => daytoFind.date === date.toISOString().substring(0, 10)
  )?.menu_items;

  if (!items) {
    // if day is not found, return an empty array
    return send(res, 200, []);
  }

  const transformedItems = items.map((item) => {
    if (item.is_section_title) {
      const is_title = true;
      const { id, position, text } = item;
      return { id, position, is_title, name: text };
    } else if (item.food) {
      const is_title = false;
      const { id, position } = item;
      const { name, subtext, price } = item.food;
      return { id, position, is_title, name, subtext, price };
    } else {
      const is_title = false;
      const { id, position, text } = item;
      return { id, position, is_title, name: text };
    }
  });

  transformedItems.sort((item1, item2) => item1.position - item2.position);

  res.setHeader("Cache-Control", "s-maxage=100000, immutable");
  if (transformedItems.length === 0) {
    send(res, 200, [
      {
        id: 60000000,
        position: 0,
        is_title: true,
        name: "No data. Not open?",
      },
    ]);
  } else {
    send(res, 200, transformedItems);
  }
}

module.exports = handler;
