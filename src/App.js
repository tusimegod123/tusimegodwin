import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Home from "./components/Home"
import Navigation from "./components/Navigation"
import './App.css';
import About from './components/About';
import Skills from './components/Skills';
import Contact from "./components/Contact";

function App() {
  return (
    <Router>
      <Navigation />
      <div>
        {/* initial={false} */}
        <AnimatePresence exitBeforeEnter>
          <Switch>
            <Route path="//" component={Home} axact></Route>
            <Route path="/about" component={About}></Route>
            <Route path="/skills" component={Skills}></Route>
            <Route path="/contactme" component={Contact}></Route>
          </Switch>
        </AnimatePresence>
      </div>
    </Router>
  );
}

export default App;
