import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const MenuItem = (props) => {
  const { title, subtitle, size, imageUrl, linkUrl } = props;

  return (
    <div className={`${size} menu-item`}>
      <div
        className="background-image"
        style={{ backgroundImage: `Url(${imageUrl})` }}
      />
      <Link className="content" to={`${linkUrl}`}>
        <h3 className="menu-itme__title">{title.toUpperCase()}</h3>
        <span className="menu-itme__subtitle">{subtitle.toUpperCase()}</span>
      </Link>
    </div>
  );
};

export default MenuItem;

MenuItem.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  size: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
  linkUrl: PropTypes.string.isRequired,
};
