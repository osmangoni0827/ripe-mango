
import './App.css';
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Contact from './components/Contact/Contact';
import Blog from './components/Blog/Blog';
import About from './components/About/About';
import Home from './components/Home/Home/Home';
import Orders from './components/Orders/Orders';
function App() {
  return (
   <Router>
      <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/contact">
            <Contact></Contact>
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/:ProductName">
            <Orders></Orders>
          </Route>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/blog">
           <Blog></Blog>
          </Route>
        </Switch>
   </Router>

  );
}

export default App;
