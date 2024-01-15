import Navbar from "./Components/Navbar/Navbar";
import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Shop from "./Pages/Shop";
import Product from './Pages/Product'
import ShopCategory from "./Pages/ShopCategory";
import Footer from "./Components/Footer/Footer";
import Cart from "./Pages/Cart";
import LoginSignup from "./Pages/LoginSignup";
import men_banner from './Components/Assets/banner_mens.png'
import women_banner from './Components/Assets/banner_women.png'
import kid_banner from './Components/Assets/banner_kids.png'




const  App= ()=> {
  return (
    <div>
    
    <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path='/' element={<Shop/>}/>
      <Route path='/mens' element={<ShopCategory banner={men_banner} category="mens" />}/>
      <Route path='/womens' element={<ShopCategory banner={women_banner} category="womens" />}/>
      <Route path='/kids' element={<ShopCategory banner={kid_banner} category="kids" />}/>
      
      <Route path="/product" element={<Product/>}>
        <Route path=':productId' element={<Product />}/>
      </Route>
      <Route path="/cart" element={<Cart />}/>
      <Route path="/login" element={<LoginSignup />}/>
    </Routes>
    {/* <Footer/> */}
    </BrowserRouter> 
     
    </div>
  );
}

export default App;
