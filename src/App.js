
import './App.css';
import Home from './components/home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import User from './components/user';
import Reqres from './components/reqres';

function App() {
  
  return (
    <BrowserRouter>
    <Routes>
      <Route path="" element={<Reqres/>}/>
      <Route path="/home" element={<Home/>}/>
      <Route path="/user" element={<User/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
