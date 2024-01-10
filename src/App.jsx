import { BrowserRouter as Router, Route, Link, Switch  } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './store/store';
import { Home } from './Home/Home';
import { Contact } from './Contact/Contact';
import { NotFound } from './components/notfound';
import { PostPage } from './posts/postPage';

import './App.css';



export const App = () => {
  return (
    <Router>
      <Provider store={store}>
        <div>
          <nav className='menu'>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
            </ul>
          </nav>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/contact" exact component={Contact} />         
            <Route path="/posts/:id"  component={PostPage}/>
            <Route path="*" component={NotFound} />
          </Switch>
        </div>
      </Provider>
    </Router>
  );
};

