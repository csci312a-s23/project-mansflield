export const formatTableValue = (val) => {
  const tableStrings = [
    "Completely Empty",
    "Many Tables",
    "A Few Tables Left",
    "Barely Find One",
    "No Tables Left",
  ];
  return tableStrings[val];
};
