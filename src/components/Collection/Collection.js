import PropTypes from 'prop-types';
import { CollectionItem } from '../CollectionItem';

const Collection = ({ title, items }) => (
  <div className="shop__collection">
    <h2 className="shop__collection-title">{title.toUpperCase()}</h2>
    <div className="shop__collection-preview">
      {items
        .filter((item, index) => index < 4)
        .map(({ id, name, price, imageUrl }) => (
          <CollectionItem
            id={id}
            key={id}
            name={name}
            price={price}
            imageUrl={imageUrl}
          />
        ))}
    </div>
  </div>
);

Collection.propTypes = {
  title: PropTypes.string.isRequired,
  items: PropTypes.array.isRequired, //eslint-disable-line
};

export default Collection;
