import React from 'react';
import { Switch, Route } from 'react-router-dom'

import './App.css';

import HomePage from './pages/homepage/homepage.component';

function HomePage1(props) {
  return (
    <div>
      <h1>HOMEPAGE ONE</h1>
      <button onClick={() => props.history.push('/shop/hats')}>HatsPage</button>
    </div>
  )
}

function HatsPage (props) {
  return (
    <div>
      <h1>HATS PAGE</h1>
      <button onClick={() => props.history.push('/')}>GO BACK</button>
    </div>
  )
}

function JacketsPage(props) {
  return (
    <div>
      Jackets Page
    </div>
  )
}

function SneakersPage(props) {
  return (
    <div>
      Sneakers Page
    </div>
  )
}

function WomansPage(props) {
  return (
    <div>
      Womans Page
    </div>
  )
}

function MensPage(props) {
  return (
    <div>
      Mens Page
    </div>
  )
}

export default function App() {
    return (
      <div>
        <Switch>
          <Route exact path="/" component={HomePage1} />
          <Route path="/shop/hats" component={HatsPage} />
          <Route path="/shop/jackets" component={JacketsPage} />
          <Route path="/shop/sneakers" component={SneakersPage} />          
          <Route path="/shop/womens" component={WomansPage} />  
          <Route path="/shop/mens" component={MensPage} />  
        </Switch>
      </div>
    );
}


