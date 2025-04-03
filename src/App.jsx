import React from 'react'
import Navbar from "./Navbar";
import MiddleContainer from './MiddleContainer';
import Footer from './Footer';
import "./App.css"; // Ya jo bhi tera CSS file ho

const App = () => {
  return (
    <div>
      <h1>Himanshu</h1>
      <Navbar/>
      <MiddleContainer/>
      <Footer/>
    </div>
  )
}

export default App