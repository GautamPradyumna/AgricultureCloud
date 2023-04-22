import logo from './logo.svg';
import './App.css';
import { Route,Routes } from "react-router-dom";
import Registration from './Pages/Registration';

function App() {
  return (
    <div className="App">
        <Routes>
          <Route path='/' element={<Registration/>}/>
          <Route path='/login' element={<Registration/>}/>
          <Route path='/signup' element={<Registration/>}/>
          <Route/>
        </Routes>
    </div>
  );
}

export default App;
