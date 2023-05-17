export const formatBusyValue = (val) => {
  const busyStrings = [
    "Not Busy",
    "Just Fine",
    "Busy",
    "Very Busy",
    "Fully Packed",
  ];
  return busyStrings[val];
};
