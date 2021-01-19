import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { CartDropdown } from '../CartDropdown';
import { ReactComponent as ShoppingBag } from '../../assets/shopping-bag.svg';
import { mapStateToProps, mapDispatchToProps } from './utils';

const Cart = (props) => {
  const { cartState, setCartState } = props;

  const onClick = () => {
    const { isHidden } = cartState;
    setCartState({ ...cartState, isHidden: !isHidden });
  };

  return (
    <div
      onClick={onClick}
      onKeyDown={onClick}
      tabIndex={0}
      role="button"
      className="cart-icon"
    >
      <ShoppingBag className="shopping-bag" />
      <span className="item-count">112</span>
      <CartDropdown />
    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Cart);

Cart.propTypes = {
  cartState: PropTypes.object.isRequired, // eslint-disable-line
  setCartState: PropTypes.func.isRequired,
};
