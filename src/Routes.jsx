import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Home } from './Home/Home';
import { Contact } from './Contact/Contact';
import { Sports } from './posts/sports';
import { Travel } from './posts/travel';
import { Shopping } from './posts/shopping';
import { Food } from './posts/food';
import { City } from './posts/city';
import { Adventure } from './posts/adventure';
import { NotFound } from './components/notfound';


export const Routes = () => (
  <Switch>
    <Route path="/" exact component={Home} />
    <Route path="/contact" exact component={Contact} />
    <Route path="/:id" component={Adventure} />
    <Route path="/:id" component={City} />
    <Route path="/:id" component={Food} />
    <Route path="/:id" component={Shopping} />
    <Route path="/:id" component={Sports} />
    <Route path="/:id" component={Travel} />
    <Route path="*" component={NotFound} />
  </Switch>
);