import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Collection } from '../../components';
import mapStateToProps from './reduxHelpers';

const Shop = (props) => {
  const { shopData } = props;
  return (
    <section className="shop">
      {shopData.map((item) => {
        const { id, title, items } = item;
        return <Collection key={id} title={title} items={items} />;
      })}
    </section>
  );
};

export default connect(mapStateToProps)(Shop);

Shop.propTypes = {
  shopData: PropTypes.array.isRequired, //eslint-disable-line
};
