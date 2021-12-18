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
import NavigationBar from './Pages/Shared/Header/NavigationBar';
import Footer from './Pages/Shared/Footer/Footer';
import ShoppingCart from './Pages/ShoppingCart/ShoppingCart';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <NavigationBar></NavigationBar>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/home" element={<Home/>} />
        <Route path="/addProduct" element={<AddProducts/>} />
        <Route path="/tShirts" element={<AllTShirts/>} />
        <Route path="/shirts" element={<AllShirts/>} />
        <Route path="/pants" element={<AllPants/>} />
        <Route path="/jackets" element={<AllJackets/>} />
        <Route path="/shoppingCart" element={<ShoppingCart/>} />
      </Routes>
      <Footer></Footer>
    </BrowserRouter>
    </div>
  );
}

export default App;
