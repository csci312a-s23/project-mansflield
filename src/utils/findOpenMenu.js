// import dayjs from "dayjs";

export const findOpenMenu = (hall, time) => {
  const openMenus = hall.menus.filter((menu) => {
    return menu.schedule.some(
      (s) =>
        s.day === time.day() &&
        parseInt(time.format("HHmm"), 10) >= s.open &&
        parseInt(time.format("HHmm"), 10) < s.close
    );
  });

  if (openMenus.length > 0) {
    return openMenus[0];
  } else {
    return null;
  }
};
