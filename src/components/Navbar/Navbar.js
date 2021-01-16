import { useEffect } from 'react';
import { NavLink, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { ReactComponent as Logo } from '../../assets/crown.svg';
import { mapStateToProps, mapDispatchToProps } from './utils';
import { auth, getUserReference } from '../../firebase';
import { customModal } from '../Modals';

const Navbar = (props) => {
  const { currentUser, setCurrentUser, history } = props;

  const onClick = async () => {
    //  if user is signed in sign out, otherwise go to login page
    if (currentUser.user) {
      await auth.signOut();
      setCurrentUser({
        user: '',
        profilePicture: '',
      });

      customModal({
        title: 'Signed out successfully',
        icon: 'success',
      });
      // add sweet alert to let the user know
    } else {
      history.push('/login');
    }
  };

  useEffect(() => {
    // stop observing connection to firestore when the tab closes/app dismounts
    const unsubscribe = auth.onAuthStateChanged((user) => {
      // do nothing if user is not signed in
      if (!user) return null;

      // get a reference to the user document from firestore and set it in state;
      const userReference = getUserReference(user);
      userReference.onSnapshot((snapshot) => {
        const { displayName, photoURL } = snapshot.data();

        // prevent infinite login requests as initial render will trigger the function
        // and send a relog request which means the auth state will keep changing and resending relog requests
        if (!currentUser.user) {
          setCurrentUser({
            user: displayName,
            profilePicture: photoURL,
          });
        }
        return null;
      });
      return null;
    });

    // if we unmount component, don't keep a connection alive
    return () => unsubscribe();
  });

  return (
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
        <button onClick={onClick} type="button">
          {currentUser.user ? 'SIGN OUT' : 'SIGN IN'}
        </button>
      </div>
    </nav>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Navbar));

Navbar.propTypes = {
  setCurrentUser: PropTypes.func.isRequired,
  currentUser: PropTypes.shape({
    user: PropTypes.string,
    profilePicture: PropTypes.string,
  }),
  history: PropTypes.object.isRequired, // eslint-disable-line
};

Navbar.defaultProps = {
  currentUser: PropTypes.shape({
    user: '',
    profilePicture: '',
  }),
};
