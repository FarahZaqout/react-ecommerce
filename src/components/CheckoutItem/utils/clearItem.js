/**
 *
 * @param {object} cartItems
 * @param {number} id
 */
const clearItem = (cartItems, id) => {
  const newItems = { ...cartItems };
  delete newItems[id];
  return newItems;
};

export default clearItem;
