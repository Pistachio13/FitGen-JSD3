import React from 'react';
import './App.css';
import Navbar from "../src/components/Navbar/Navbar";
import Overall from './components/Overall/Overall';
import Schedule from './components/Schedule/Schedule'
import GraphContextProvider from './components/Context/GraphContextProvider';

function App() {
  return (
    <div className='App'>
    <Navbar />
    <GraphContextProvider><Overall /></GraphContextProvider>
    </div>
  );
}

export default App;
