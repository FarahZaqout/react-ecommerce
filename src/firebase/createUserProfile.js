import { firestore } from './firestore';

const getUserReference = (user) => {
  if (!user) return null;
  return firestore.doc(`users/${user.uid}`);
};

const createUserProfile = async (user) => {
  try {
    if (!user) return;
    const userRef = getUserReference(user);
    const snapshot = await userRef.get();
    // create a new user if they do not exist
    if (!snapshot.exists) {
      const { displayName, email, photoURL } = user;
      const createdAt = new Date();
      await userRef.set({
        displayName,
        email,
        photoURL,
        createdAt,
      });
    } else {
      console.log('user already exists');
    }
  } catch (e) {
    console.log('error creating user', e);
  }
};

export { createUserProfile, getUserReference };
