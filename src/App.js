import { useEffect } from 'react';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';

import { auth, getUserReference } from './firebase';

import { Navbar } from './components';
import { Homepage, Shop, Login } from './pages';
import { store } from './redux';
import './App.css';

const App = () => {
  useEffect(() => {
    // stop observing connection to firestore when the tab closes/app dismounts
    const unsubscribe = auth.onAuthStateChanged((user) => {
      console.log(user);
      // do nothing if user is not signed in
      if (!user) return null;

      // get a reference to the user document from firestore
      const userReference = getUserReference(user);
      userReference.onSnapshot((snapshot) => {
        console.log(snapshot.id, snapshot.data());
        // TODO: set relevant user info in the global state for user experience;
        // display name and photoURl for the navbar?
      });
      return null;
    });

    // if we unmount component, don't keep a connection alive
    return () => unsubscribe();
  }, []);

  return (
    <Provider store={store}>
      <div className="App">
        <Router>
          <Navbar />
          <Switch>
            <Route exact path="/" component={Homepage} />
            <Route exact path="/shop" component={Shop} />
            <Route exact path="/login" component={Login} />
          </Switch>
        </Router>
      </div>
    </Provider>
  );
};

export default App;
