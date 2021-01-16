import { auth, firebase } from './firestore';

const provider = new firebase.auth.GoogleAuthProvider();

provider.setCustomParameters({ prompt: 'select_account' }); // in case current signed-in is not the intended
const signInWithGoogle = () => auth.signInWithPopup(provider);

export { signInWithGoogle, provider };
