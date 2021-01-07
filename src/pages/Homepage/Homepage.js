import { MenuItem } from '../../components';
import { MenuItemsData } from '../../dataMocks';

const Homepage = () => (
  <section className="homepage">
    <div className="menu-container">
      {MenuItemsData.map((item) => {
        const { title, imageUrl, id, linkUrl, size } = item;
        return (
          <MenuItem
            title={title}
            imageUrl={imageUrl}
            key={id}
            linkUrl={linkUrl}
            size={size}
            subtitle="SHOP NOW"
          />
        );
      })}
    </div>
  </section>
);

export default Homepage;
