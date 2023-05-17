import { knex } from "../../knex/knex.js";
import { fetchExternalMenu } from "@/utils/fetchExternalMenu";

export const getMenu = async (place, meal, dateStr) => {
  const menu =
    place === "wilson-cafe" || place === "the-grille"
      ? await knex("menudb")
          .select()
          .where({
            place: place,
            meal: meal,
          })
          .first()
      : await knex("menudb")
          .select()
          .where({
            place: place,
            date: dateStr,
            meal: meal,
          })
          .first();

  if (menu) {
    if (typeof menu.items === "string") {
      menu.items = JSON.parse(menu.items);
    }
    return menu;
  } else {
    const menuInfo = await fetchExternalMenu(dateStr, place, meal);
    return menuInfo;
  }
};
