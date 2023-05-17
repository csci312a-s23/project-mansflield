import { knex } from "../../knex/knex.js";
import { fetchExternalMenu } from "@/utils/fetchExternalMenu";

export const getMenu = async (place, meal, time) => {
  const menu = await knex("menudb")
    .select()
    .where({
      place: place,
      date: time.format("YYYY-MM-DD"),
      meal: meal,
    })
    .first();

  if (menu) {
    if (typeof menu.items === "string") {
      menu.items = JSON.parse(menu.items);
    }
    return menu;
  } else {
    const menuInfo = await fetchExternalMenu(
      time.format("YYYY-MM-DD"),
      place,
      meal
    );
    return menuInfo;
  }
};
