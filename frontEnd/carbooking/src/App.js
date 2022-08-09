import './App.css';
import {
  BrowserRouter,Routes,Route,} from "react-router-dom";
import Home from './pages/home/home';
import Login from './pages/Login/Login';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/home/signin" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
