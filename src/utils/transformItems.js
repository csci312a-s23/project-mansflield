export const transformItems = (items) => {
  const transformedItems = items.map((item) => {
    if (item.is_section_title) {
      const is_title = true;
      const { id, position, text } = item;
      return { id, position, is_title, name: text };
    } else if (item.food) {
      const is_title = false;
      const { id, position } = item;
      const { name, price } = item.food;
      return { id, position, is_title, name, price };
    } else {
      const is_title = false;
      const { id, position, text } = item;
      return { id, position, is_title, name: text };
    }
  });

  transformedItems.sort((item1, item2) => item1.position - item2.position);
  return transformedItems;
};
