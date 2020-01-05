import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './header/header'
import MainComponent from './main-component/main-component'
import Footer from './footer/footer'
import { BrowserRouter } from 'react-router-dom'

function App() {
  return (
    <div className="App">

    <BrowserRouter>
      {/* <Header /> */}
      <MainComponent />
      {/* <Footer /> */}
  </BrowserRouter>

      
    </div>
  );
}

export default App;
