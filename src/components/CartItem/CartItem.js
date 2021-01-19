import PropTypes from 'prop-types';

const CartItem = ({ src, name, quantity, price }) => (
  <div className="cart-item">
    <img src={src} alt={name} />
    <div className="cart-item__values">
      <span>{name}</span>
      <span>
        {quantity} X {price}$
      </span>
    </div>
  </div>
);

export default CartItem;

CartItem.propTypes = {
  src: PropTypes.string.isRequired,
  quantity: PropTypes.number.isRequired,
  price: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
};
