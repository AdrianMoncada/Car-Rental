import './App.css';
import { BrowserRouter,Routes,Route,} from "react-router-dom";

import Home from './pages/home/home';
import ProductDetails from './pages/Product/ProductDetails';
import Error from './components/Error/Error';
import ProductByCategory from './components/category/ProductByCategory';
import AppContext from './Context/AppContext';
import useInitialState from './hooks/useInitialState';
import Booking from './pages/Bookings/Booking';

function App() {

  const initialState = useInitialState();

  return (
    <AppContext.Provider value={initialState}>
    <BrowserRouter>
      <Routes>

        <Route path="" element={<Home />} />
        <Route path="/product/:id" element={<ProductDetails/>} />
        <Route path="/reserva" element={<Booking/>} />
        <Route path="*" element={<Error/>} />
        <Route path="/category/:id" element={<ProductByCategory/>} />
        

      </Routes>
    </BrowserRouter>
    </AppContext.Provider>
  );
}

export default App;
