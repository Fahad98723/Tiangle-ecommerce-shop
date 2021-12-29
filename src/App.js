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
import PrivateRoute from './Pages/PrivateRoute/PrivateRoute';
import MyOrders from './Pages/MyOrders/MyOrders';
import AllOrders from './Pages/AllOrders/AllOrders';
function App() {
  return (
    <div className="body">
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/home" element={<Home/>} />
        <Route path="/addProduct" element={<AddProducts/>} />
        <Route path="/tShirts" element={
          <PrivateRoute> <AllTShirts/>
          </PrivateRoute>
        } />
        <Route path="/shirts" element={<PrivateRoute> <AllShirts/>
          </PrivateRoute>} />
        <Route path="/pants" element={<PrivateRoute> <AllPants/>
          </PrivateRoute>} />
        <Route path="/jackets" element={<PrivateRoute> <AllJackets/>
          </PrivateRoute>} />
        <Route path="/shoppingCart" element={
          <PrivateRoute><ShoppingCart/></PrivateRoute>
        } />
        <Route path="/login" element={<Login/>} />
        <Route path="/register" element={<Register/>} />
        <Route path="/product/:id" element={<PrivateRoute> <SingleProduct/>
          </PrivateRoute>} />
        <Route path="/checkOut" element={<PrivateRoute> <CheckOut/>
          </PrivateRoute>} />
        <Route path="/checkOut/:id" element={<PrivateRoute> <CheckOut/>
          </PrivateRoute>} />
        <Route path="/myOrders" element={<PrivateRoute> <MyOrders/>
          </PrivateRoute>} />
        <Route path="/AllOrders" element={<PrivateRoute> <AllOrders/>
          </PrivateRoute>} />
        </Routes>
        
      <Footer></Footer>
    </BrowserRouter>
    </div>
  );
}

export default App;
