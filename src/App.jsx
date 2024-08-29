import React from 'react';
import './App.css';
import Navbar from './Components/Navbar';
import Header from './Components/Header';
import Content from './Components/Content';

function App() {
  return (
    <div className='App'>
      <Navbar />
      <div className="body">
        <Header />
        <Content />
      </div>
    </div>
  );
}

export default App;
