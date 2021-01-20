import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { mapDispatchToProps, mapStateToProps } from './utils';

const CollectionItem = ({
  id,
  name,
  price,
  imageUrl,
  cartState,
  setCartState,
}) => {
  const onClick = () => {
    const items = { ...cartState.cartItems };
    let itemCount;
    if (items[id]) items[id].quantity += 1;
    else items[id] = { id, name, price, imageUrl, quantity: 1 };

    // update the total number of items in cart
    if (Object.values(items).length) {
      itemCount = Object.values(items).reduce(
        (_accumulator, { quantity }) => _accumulator + quantity,
        0,
      );
    }
    setCartState({ ...cartState, cartItems: items, itemCount });
  };
  return (
    <div className="collection-item">
      <div
        className="collection-item__image"
        style={{ backgroundImage: `url(${imageUrl})` }}
      >
        <button type="button" onClick={onClick}>
          ADD TO CART
        </button>
      </div>
      <div className="collection-item__footer">
        <span className="collection-item__name">{name}</span>
        <span className="collection-item__price">{price}</span>
      </div>
    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(CollectionItem);

CollectionItem.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  imageUrl: PropTypes.string.isRequired,
  cartState: PropTypes.object.isRequired, // eslint-disable-line
  setCartState: PropTypes.func.isRequired,
};
