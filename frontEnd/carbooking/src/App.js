import './App.css';
import { BrowserRouter,Routes,Route,} from "react-router-dom";

import Home from './pages/home/home';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';
import ProductDetails from './pages/Product/ProductDetails';
import Error from './components/Error/Error';

function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route path="" element={<Home />} />
        <Route path="/signin" element={<Login />} />
        <Route path="/signup" element={<Register />}/>
        <Route path="/product/:id" element={<ProductDetails/>} />
        <Route path="*" element={<Error/>} />
        

      </Routes>
    </BrowserRouter>
  );
}

export default App;
