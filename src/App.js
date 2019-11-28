import React from 'react';
import './App.css';
import {
  BrowserRouter,
  Route
} from 'react-router-dom';
import Header from './components/header/header';
import Footer from './components/footer/footer';
import Home from './components/home/home';
import AboutUs from './components/about-us/about-us';
import Work from './components/work/work';
import Careers from './components/career/career';
import Contact from './components/concact-us/contact-us';

function App() {
  return (

    function functionName() {
      for (var i = 0; i < 5; i++) {
        console.log('not found' + i);
      }
    },

    <div className="App">
      <BrowserRouter>
        <Header/>
        <Route path="/" exact component={Home}/>
        <Route path="/home" component={Home}/>
        <Route path="/about" component={AboutUs}/>
        <Route path="/work" component={Work}/>
        <Route path="/careers" component={Careers}/>
        <Route path="/contact" component={Contact}/>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
