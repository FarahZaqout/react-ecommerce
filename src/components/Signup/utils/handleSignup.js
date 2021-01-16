import { getUserReference } from '../../../firebase';
import { customModal } from '../../Modals';

/**
 * notifies the user if they are already registered.
 * No real techncial implications, just UX.
 * @param {object} user user object returned from the firebase auth
 * @param {object} history react router's history
 * @param {function} setCurrentUser action creator for setting the current user info
 */

const signupUserExperience = async (user, history, setCurrentUser) => {
  const userReference = getUserReference(user);
  userReference.onSnapshot(async (snapshot) => {
    if (snapshot.exists) {
      const result = await customModal({
        title: 'User already exists! Redirecting you!',
        icon: 'info',
      });
      if (result.isConfirmed) history.goBack();
    } else {
      setCurrentUser({
        user: user.displayName,
        profilePicture: user.photoURL,
      });
      customModal({
        title: 'Signed up!',
        icon: 'success',
      });
    }
  });
};

export default signupUserExperience;
