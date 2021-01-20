/* eslint-disable jsx-a11y/click-events-have-key-events */
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {
  clearItem,
  mapStateToProps,
  mapDispatchToProps,
  incrementItems,
} from './utils';

const CheckoutItem = ({
  imageUrl,
  name,
  quantity,
  price,
  id,
  cartState,
  setCartState,
}) => {
  const handleRemoveItem = (value) => {
    const { cartItems, itemCount } = cartState;
    const newCount = itemCount + value;
    let newItems = incrementItems({ cartItems, value, id });
    if (newItems[id].quantity < 1) newItems = clearItem(newItems, id); // if number is below 1, remove the item.
    setCartState({ ...cartState, cartItems: newItems, itemCount: newCount });
  };

  const handleClearItem = () => {
    const { cartItems, itemCount } = cartState;
    const newCount = itemCount - cartItems[id].quantity;
    const newItems = clearItem(cartItems, id);
    setCartState({ ...cartState, cartItems: newItems, itemCount: newCount });
  };

  const onEnterPress = (e) => {
    const { cartItems, itemCount } = cartState;
    const newCount = itemCount - cartItems[id].quantity;
    if (e.key === 'enter') {
      const newItems = clearItem(cartItems, id);
      setCartState({ ...cartState, cartItems: newItems, itemCount: newCount });
    }
  };

  return (
    <div className="checkout-item">
      <div className="image-container">
        <img src={imageUrl} alt={name} />
      </div>
      <span className="name">{name}</span>
      <div className="quantity-container">
        <div
          role="button"
          tabIndex={0}
          className="arrow"
          onClick={() => handleRemoveItem(-1)}
        >
          &#x276E;
        </div>
        <span className="quantity">{quantity}</span>
        <div
          role="button"
          tabIndex={0}
          className="arrow"
          onClick={() => handleRemoveItem(1)}
        >
          &#x276F;
        </div>
      </div>
      <span className="price">{price}</span>
      <div
        role="button"
        tabIndex="0"
        onKeyDown={onEnterPress}
        className="remove-button"
        onClick={handleClearItem}
      >
        &#x2613;
      </div>
    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(CheckoutItem);

CheckoutItem.propTypes = {
  imageUrl: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  quantity: PropTypes.number.isRequired,
  price: PropTypes.number.isRequired,
  id: PropTypes.number.isRequired,
  cartState: PropTypes.object.isRequired, // eslint-disable-line
  setCartState: PropTypes.func.isRequired,
};
