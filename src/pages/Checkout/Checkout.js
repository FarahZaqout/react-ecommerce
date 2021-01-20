import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { mapStatetoProps, mapDispatchToProps } from './utils';

const Checkout = ({ cartState, setCartState }) => {
  console.log(cartState, setCartState);
  // calculates the total price of all items in cart
  const total = Object.values(cartState.cartItems).reduce(
    (_accumulator, element) => _accumulator + element.price * element.quantity,
    0,
  );
  return (
    <div className="checkout-page">
      <div className="checkout-header">
        <div className="header-block">
          <span>Product</span>
        </div>
        <div className="header-block">
          <span>Description</span>
        </div>
        <div className="header-block">
          <span>Quantity</span>
        </div>
        <div className="header-block">
          <span>Price</span>
        </div>
        <div className="header-block">
          <span>Remove</span>
        </div>
      </div>
      {Object.values(cartState.cartItems).map((element) => element.name)}
      <div className="total">TOTAL: ${total}</div>
    </div>
  );
};

export default connect(mapStatetoProps, mapDispatchToProps)(Checkout);

Checkout.propTypes = {
  cartState: PropTypes.object.isRequired, // eslint-disable-line
  setCartState: PropTypes.func.isRequired,
};
