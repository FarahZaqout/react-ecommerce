const incrementItems = ({ cartItems, value, id }) => {
  const newItems = cartItems;
  newItems[id].quantity += value;
  return newItems;
};

export default incrementItems;
