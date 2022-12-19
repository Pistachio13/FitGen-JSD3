import React from 'react'
import './App.css';
import Hero from './components/Hero/Hero';
import Programs from './components/Programs/Programs';
import Reasons from './components/Reasons/Reasons';
import Plans from './components/Plans/Plans';
import Testimonials from './components/Testimonials /Testimonials';
import Join from './components/Join/Join';
import Footer from './components/Footer/Footer';
// import Register from "./components/pages/Register";
// import { Routes, Route, BrowserRouter } from "react-router-dom";
// import Login from "./components/pages/Login";
// import Cards from "./components/pages/Cards";
// import "react-toastify/dist/ReactToastify.css";



function App() {
  return (
    <div className="App">
        
        <Hero/>
        <Programs />
        <Reasons />
        <Plans/>
        <Testimonials />
        <Join />
        <Footer />

        {/* <BrowserRouter>
      <Routes>
        <Route exact path="/register" element={<Register />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/" element={<Cards />} />
      </Routes>
    </BrowserRouter>
         */}

    </div>
  );
}


export default App;


