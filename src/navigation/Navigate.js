import React from "react";
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

import Header from '../components/header/Header';
import Footer from '../components/footer/Footer';
import Home from '../pages/home/Home';
import Cart from '../pages/cart/Cart';
import Myorders from '../pages/profie/myorders/Myorders';
import Mywallet from '../pages/profie/mywallet/Mywallet';
import Savedaddress from '../pages/profie/savedaddress/Savedaddress';
import Faq from '../pages/profie/faq/Faq';

import Atta from '../pages/categories/atta/Atta';
import Masala from '../pages/categories/masala/Masala';
import Fruits from '../pages/categories/fruits/Fruits';
import Cleaning from '../pages/categories/cleaning/Cleaning';
import Breakfast from '../pages/categories/breakfast/Breakfast';
import Bakery from '../pages/categories/bakery/Bakery';
import Personalcare from '../pages/categories/personalcare/Personalcare';


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
      <Route  path="/cart" element={<Cart />}/>
      <Route path="/myorders" element={<Myorders />}/>
      <Route path="/mywallet" element={<Mywallet />}/>
      <Route path="/savedaddress" element={<Savedaddress />}/>
      <Route path="/faq" element={<Faq />}/>
      <Route path="/logout" element={<Home />}/>

      <Route path="/atta"  element={<Atta />}/>
      <Route path="/masala" element={<Masala/>} />
      <Route path="/fruits" element={<Fruits />}/>
      <Route path="/cleaning" element={<Cleaning />}/>
      <Route path="/breakfast" element={<Breakfast />}/>
      <Route path="/bakery" element={<Bakery />}/>
      <Route path="/personalcare" element={<Personalcare />}/>

     


        
    </Routes>

        <div>
            <Footer/>
        </div>
  </BrowserRouter>
    
        
                
  );
}

