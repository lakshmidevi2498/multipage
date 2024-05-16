import REACT from 'react';
import {BrowserRouter , Routes, Route, Link} from 'react-router-dom'
import './App.css';
import Home from './mainpages/home';
import About from './mainpages/about';
import Contact from './mainpages/contact';
import Product from './mainpages/product';




function App() {
  return (
    <BrowserRouter>
    
      <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/product" element={<Product/>}/>
      </Routes>     
   </BrowserRouter>
  );
}

export default App;
