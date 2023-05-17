import grille from "@/data/menus/grille.json";
import wilson from "@/data/menus/wilson.json";
import crossroads from "@/data/menus/crossroads.json";

export const getRetailMenu = (place) => {
  switch (place) {
    case "grille":
      return grille;
    case "wilson":
      return wilson;
    case "crossroads":
      return crossroads;
    default:
      return [];
  }
};
