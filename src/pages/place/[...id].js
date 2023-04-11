import { useRouter } from "next/router";
import { useEffect, useState } from "react";

import Head from "next/head";
import BusynessView from "@/components/BusynessView";
import TablesView from "@/components/TablesView";
import MenuView from "@/components/MenuView";

export default function PlacePage({}) {
  const [busy, setBusy] = useState("No Info");

  const router = useRouter();
  const { id } = router.query;

  //Temporarily creating an array to store all user inputs on busyness. We use its elements to determine the "busy" value
  let busynessInputs = [];

  function inputBusyness(input) {
    busynessInputs = busynessInputs.map((item) => item);
    busynessInputs.push(input);
    // eslint-disable no-console
    console.log(busynessInputs);
  }

  // TODO: opening times

  // TODO: get these from backend

  //Temporary method of setting the array. Need to out how to calculate an average that doesn't make React angry
  useEffect(() => {
    if (busynessInputs.length > 0) {
      const total = busynessInputs.reduce((a, b) => a + b, 0);
      const avg = total / busynessInputs.length;
      setBusy(avg); // Round to two decimal places
      console.log(avg);
    }
  }, [busynessInputs]);

  // adjust hue from red to green
  const busyColor = {
    background: "#008140",
  };

  const tables = "Few";
  const menu = [
    {
      name: "Maple Glazed Salmon",
      description:
        "A sweet and savory glaze, made with Dijon mustard, soy sauce, garlic, and maple syrup.",
      rating: "3.2",
    },
    {
      name: "New England Clam Chowder",
      description:
        "This cravilicious white creamy clam chowder is bursting with delectable clams, tender potatoes, and salty bacon.",
      rating: "5.0",
    },
  ];

  // TODO: add date for history in future sprint
  // Also, use datetime format
  const date = "2020-03-14";

  return (
    <div>
      <Head>
        <title>{id}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <h1 className="title">{id}</h1>
        <BusynessView
          busy={busy}
          busyColor={busyColor}
          inputBusyness={inputBusyness}
        />
        <TablesView tables={tables} />
        <MenuView menu={menu} date={date} id={id} />
      </main>
    </div>
  );
}
