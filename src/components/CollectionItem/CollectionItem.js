import PropTypes from 'prop-types';

const CollectionItem = ({ name, price, imageUrl }) => (
  <div className="collection-item">
    <div
      className="collection-item__image"
      style={{ backgroundImage: `url(${imageUrl})` }}
    />
    <div className="collection-item__footer">
      <span className="collection-item__name">{name}</span>
      <span className="collection-item__price">{price}</span>
    </div>
  </div>
);

export default CollectionItem;

CollectionItem.propTypes = {
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  imageUrl: PropTypes.string.isRequired,
};
