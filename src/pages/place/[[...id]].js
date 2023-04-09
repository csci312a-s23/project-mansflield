import { useRouter } from "next/router";

import Head from "next/head";
import BusynessView from "@/components/BusynessView";
import TablesView from "@/components/TablesView";
import MenuView from "@/components/MenuView";

export default function PlacePage({}) {
  const router = useRouter();

  const { id } = router.query.id;

  // TODO: opening times

  // TODO: get these from backend
  busy = "Not very";
  // adjust hue from red to green
  busyColor = "background-color: " + "#008140";
  tables = "Few";
  menu = [
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
  date = "2020-03-14";

  return (
    <div>
      <Head>
        <title>{id}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <h1 className="title">{id}</h1>
        <BusynessView busy={busy} busyColor={busyColor} />
        <TablesView tables={tables} />
        <MenuView menu={menu} date={date} />
      </main>
    </div>
  );
}
