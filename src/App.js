import './index.css';
import ShoppingCart from './pages/ShoppingCart';
import HomePage from './pages/HomePage';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path='/' component={HomePage}/>
          <Route path='/my-cart' component={ShoppingCart}/>
        </Switch>
      </Router>
    </>
  );
}

export default App;
