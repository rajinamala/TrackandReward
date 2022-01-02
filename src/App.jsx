import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import './App.scss';
import Navbar from './components/navbar';
import Home from './pages/Homepage/home';
import About from './pages/Homepage/about';
import Events from './pages/Homepage/events';
import Contact from './pages/Homepage/contact';
import Help from './pages/Homepage/help';
import Reg from './pages/registration/reg';

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
      <Route path='/' exact component={Home} />
        <Route path='/about' component={About} />
        <Route path='/events' component={Events} />
        <Route path='/contact' component={Contact} />
        <Route path='/help' component={Help} />
        <Route path='/reg' component={Reg} />
       </Switch> 
    </Router>
      
      
  );
}

export default App;