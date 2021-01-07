import { NavLink } from 'react-router-dom';
import { ReactComponent as Logo } from '../../assets/crown.svg';

const Navbar = () => (
  <nav className="navbar">
    <NavLink to="/">
      <Logo className="logo" />
    </NavLink>
    <div className="links-container">
      <NavLink className="navlink" to="/shop">
        SHOP
      </NavLink>
      <NavLink className="navlink" to="/contact">
        CONTACT
      </NavLink>
    </div>
  </nav>
);

export default Navbar;
