import { useCallback, useRef, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { mapStateToProps, mapDispatchToProps } from './utils';
import { CartItem } from '../CartItem';

const CartDropdown = (props) => {
  const node = useRef();
  const { cartState, setCartState } = props;
  const { cartItems, isHidden } = cartState;
  let itemKey = 0;

  // close cart modal on click outside
  const handleOutsideClick = useCallback(() => {
    document.addEventListener('mousedown', (e) => {
      // inside click
      if (node.current && node.current.contains(e.target)) {
        return null;
      }
      return setCartState({ ...cartState, isHidden: !isHidden });
    });
  });

  useEffect(() => {
    if (!isHidden) document.addEventListener('mousedown', handleOutsideClick);
    return () => document.removeEventListener('mousedown', handleOutsideClick);
  });

  return (
    <div
      ref={node}
      className={`cart-dropdown${isHidden ? ' hidden-cart' : ''}`}
    >
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
        className={`checkout-link${isHidden ? ' hidden-cart' : ''}`}
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
  setCartState: PropTypes.func.isRequired,
};

CartDropdown.defaultProps = {
  cartItems: [],
};
