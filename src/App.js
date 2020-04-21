import React from 'react';
import { Switch, Route } from 'react-router-dom'

import './App.css';

import HomePage from './pages/homepage/homepage.component';

function HatsPage (props) {
  console.log(props);
  
  return (
    <div>
      HATS PAGE
    </div>
  )
}

export default function App() {
    return (
      <div>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/shop/hats" component={HatsPage} />
        </Switch>
      </div>
    );
}


