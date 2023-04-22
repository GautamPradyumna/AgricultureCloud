import logo from './logo.svg';
import './App.css';
import { Route,Routes } from "react-router-dom";
import Registration from './Pages/Registration';
import Login from './Pages/Login';
import Home from './Pages/Home';
import WebHome from './Pages/WebHome';

function App() {
  return (
    <div className="App">
        <Routes>
          <Route path='/' element={<WebHome/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/signup' element={<Registration/>}/>
          <Route path='/home' element={<Home/>}/>
          <Route/>
        </Routes>
    </div>
  );
}

export default App;
