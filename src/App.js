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

function App() {
  return (
    <div className="App">
       <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/home" element={<Home/>} />
        <Route path="/addProduct" element={<AddProducts/>} />

      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
