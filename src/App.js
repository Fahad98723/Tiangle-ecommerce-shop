import './App.css';
import Home from '../src/Pages/Home/Home/Home'
import AddProducts from '../src/Pages/AddProducts/AddProducts'
import 'bootstrap/dist/css/bootstrap.min.css';

import {
  BrowserRouter,
  Routes,
  Route,
  Link
} from "react-router-dom";
import AllTShirts from './Pages/Home/Products/AllTShirts.js/AllTShirts';
import AllShirts from './Pages/Home/Products/AllShirts/AllShirts';
import AllPants from './Pages/Home/Products/AllPants/AllPants';
import AllJackets from './Pages/Home/Products/AllJackets/AllJackets';
import Footer from './Pages/Shared/Footer/Footer';
import ShoppingCart from './Pages/ShoppingCart/ShoppingCart';
import SingleProduct from './Pages/SingleProduct/SingleProduct';
import Login from './Pages/Login/Login';
import Register from './Pages/Register/Register';
import CheckOut from './Pages/CheckOut/CheckOut';
function App() {
  return (
    <div className="body">
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/home" element={<Home/>} />
        <Route path="/addProduct" element={<AddProducts/>} />
        <Route path="/tShirts" element={<AllTShirts/>} />
        <Route path="/shirts" element={<AllShirts/>} />
        <Route path="/pants" element={<AllPants/>} />
        <Route path="/jackets" element={<AllJackets/>} />
        <Route path="/shoppingCart" element={<ShoppingCart/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/register" element={<Register/>} />
        <Route path="/product/:id" element={<SingleProduct/>} />
        <Route path="/checkOut" element={<CheckOut/>} />
      </Routes>
        
      <Footer></Footer>
    </BrowserRouter>
    </div>
  );
}

export default App;
