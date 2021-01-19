import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { mapStateToProps, mapDispatchToProps } from './utils';
import { CartItem } from '../CartItem';

const CartDropdown = (props) => {
  const { cartState } = props;
  const { cartItems } = cartState;
  let itemKey = 0;
  return (
    <div className={`cart-dropdown${cartState.isHidden ? ' hidden-cart' : ''}`}>
      <div className="cart-items">
        {Object.values(cartItems).length
          ? Object.values(cartItems).map((item) => {
              itemKey += 1;
              return (
                <CartItem
                  key={itemKey}
                  src={item.imageUrl}
                  alt={item.alt}
                  name={item.name}
                  price={item.price}
                  quantity={item.quantity}
                />
              );
            })
          : null}
      </div>
      <NavLink
        className={`checkout-link${cartState.isHidden ? ' hidden-cart' : ''}`}
        to="/checkout"
      >
        GO TO CHECKOUT
      </NavLink>
    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(CartDropdown);

CartDropdown.propTypes = {
  cartState: PropTypes.object.isRequired, // eslint-disable-line
  cartItems: PropTypes.array, // eslint-disable-line
};

CartDropdown.defaultProps = {
  cartItems: [],
};
