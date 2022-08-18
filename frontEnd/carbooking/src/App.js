import './App.css';
import {
  BrowserRouter,Routes,Route,} from "react-router-dom";
import Home from './pages/home/home';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signin" element={<Login />} />
        <Route path="/signup" element={<Register />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
