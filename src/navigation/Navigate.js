import React from "react";
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

import Header from '../components/header/Header';
import Footer from '../components/footer/Footer';
import Home from '../pages/home/Home';
import Categories from '../pages/categories/Categories';
import Cart from '../pages/cart/Cart';
import Myorders from '../pages/profie/myorders/Myorders';
import Mywallet from '../pages/profie/mywallet/Mywallet';
import Savedaddress from '../pages/profie/savedaddress/Savedaddress';
import Faq from '../pages/profie/faq/Faq';

// import Branding from '../pages/branding/Branding';
// import Store from '../pages/store/Store';
// import Contact from '../pages/contact/Contact';



export default function Navigate() {
  return (
    <BrowserRouter>
        <div>
            <Header/>
        </div>
    <Routes>
             
      <Route exact path="/" element={<Home />}/>
      <Route  path="/categories" element={<Categories />}/>
      <Route  path="/cart" element={<Cart />}/>
      <Route path="/myorders" element={<Myorders />}/>
      <Route path="/mywallet" element={<Mywallet />}/>
      <Route path="/savedaddress" element={<Savedaddress />}/>
      <Route path="/faq" element={<Faq />}/>
      <Route path="/logout" element={<Home />}/>
     


        
    </Routes>

        <div>
            <Footer/>
        </div>
  </BrowserRouter>
    
        
                
  );
}

