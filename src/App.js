
import './App.css';
import Home from './components/home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import User from './components/user';
import Reqres from './components/reqres';
import Login from './components/login';
import {BeforeLogin, Guard} from './components/guard';

function App() {
  
  return (
    <BrowserRouter>
    <Routes>
      <Route path="" element={<BeforeLogin><Login/></BeforeLogin>}/>
      <Route path="/home" element={<Home/>}/>
      <Route path="/user" element={<User/>}/>
      <Route path="/reqres" element={<Guard><Reqres/></Guard>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
