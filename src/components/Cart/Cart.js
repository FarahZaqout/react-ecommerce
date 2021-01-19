import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { CartDropdown } from '../CartDropdown';
import { ReactComponent as ShoppingBag } from '../../assets/shopping-bag.svg';
import { mapStateToProps, mapDispatchToProps } from './utils';

const Cart = (props) => {
  const { cartState, setCartState } = props;
  const { isHidden, itemCount } = cartState;

  const onClick = () => {
    setCartState({ ...cartState, isHidden: !isHidden });
  };

  return (
    <div tabIndex={0} role="button" className="cart-icon">
      <ShoppingBag
        onClick={onClick}
        onKeyDown={onClick}
        className="shopping-bag"
      />
      <span
        role="button"
        tabIndex={0}
        onClick={onClick}
        onKeyDown={onClick}
        className="item-count"
      >
        {itemCount}
      </span>
      <CartDropdown />
    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Cart);

Cart.propTypes = {
  cartState: PropTypes.object.isRequired, // eslint-disable-line
  setCartState: PropTypes.func.isRequired,
};
