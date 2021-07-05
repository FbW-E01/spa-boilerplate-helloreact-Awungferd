import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Body from './components/Body';
import Sidebar from './components/Sidebar';
import Footer from './components/Footer';

import './components/Button'


function App() {
  return (
    <div className="App">
      <div className="Heading">  <Header /></div>
      <div className="SideBar"> <Sidebar /></div>
      <div className="Body"><Body /></div>
      <div className="Footer"><Footer /></div>
    </div>
  );
}


export default App;
