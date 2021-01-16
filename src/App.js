import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';

import { Navbar } from './components';
import { Homepage, Shop, Login } from './pages';
import { store } from './redux';
import './App.css';

const App = () => (
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

export default App;
