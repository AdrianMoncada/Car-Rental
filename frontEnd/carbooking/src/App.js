import './App.css';
import {
  BrowserRouter,Routes,Route,} from "react-router-dom";
import Home from './pages/home/home';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';
import ProductDetails from './pages/Product/ProductDetails';

function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route path="/home" element={<Home />} />
        <Route path="/home/signin" element={<Login />} />
        <Route path="/home/signup" element={<Register />}/>
        <Route path="/home/product" element={<ProductDetails/>} />
        

      </Routes>
    </BrowserRouter>
  );
}

export default App;
