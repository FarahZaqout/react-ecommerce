import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { mapStateToProps, mapDispatchToProps } from './utils';

const CartDropdown = (props) => {
  const { cartState } = props;
  return (
    <div className={`cart-dropdown${cartState.isHidden ? ' hidden-cart' : ''}`}>
      <div className="cart-item" />
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
};
