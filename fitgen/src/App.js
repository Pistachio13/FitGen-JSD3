import React from 'react';
import './App.css';
import Navbar from "../src/components/Navbar/Navbar";
import Overall from './components/Overall/Overall';
import Schedule from './components/Schedule/Schedule'
import GraphContextProvider from './components/Context/GraphContextProvider';
import ActivitesContextProvider from './components/Context/ActContextProvider';

function App() {
  return (
    <div className='App'>
    <Navbar />
    <GraphContextProvider><ActivitesContextProvider><Overall  /></ActivitesContextProvider></GraphContextProvider>
    </div>
  );
}

export default App;
