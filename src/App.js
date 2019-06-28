import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './app/components/Header';
import Body from './app/components/Body';
import Footer from './app/components/Footer';


function App() {
  return (
    <div className="App">
      <Header/>
      <Body/>
      <Footer/>
    </div>
  );
}

export default App;
