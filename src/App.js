// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Banner from './components/Banner';
import Features from './components/Features';
import About from './components/About';
import Howtouse from './components/Howtouse';
import Pricing from './components/Pricing';
import Testimonials from './components/Testimonials';
import Faq from './components/Faq';
import Footer from './components/Footer';
import Register from "./components/Register";
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import Whychoose from "./components/Whychoose";
import Invoices from './components/Invoices';

function App() {



  
  return (
    <Router>
      <div className="App">
      
        <Routes>
          <Route path="/" element={<>
            <Header />
            <Banner />
            <Features />
            <About />
            <Whychoose />
            <Howtouse />
            <Pricing />
            <Testimonials />
            <Faq />
            <Footer />
          </>} />
          <Route path="/Register" element={<Register />} />
          <Route path='/Dashboard' element={<Dashboard/>} />
          <Route path ='/Header' element={<Header/>}/>
          <Route path='/Login' element={<Login/>}/>
          <Route path='/Invoices' element={<Invoices/>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
