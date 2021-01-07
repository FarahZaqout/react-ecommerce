import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { Homepage, Shop } from './pages';
import { store } from './redux';
import './App.css';

const App = () => (
  <Provider store={store}>
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route exact path="/shop" component={Shop} />
        </Switch>
      </Router>
    </div>
  </Provider>
);

export default App;
