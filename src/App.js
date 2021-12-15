import './App.css';
import Home from './Home/Home/Home';
import AddProducts from './AddProducts/AddProducts';

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
