import React from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './store/store';
import {Routes} from './Routes';
import './App.css';

export const App = () => (
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
        <Routes />
      </div>
    </Provider>
  </Router>
);

