
import './App.css';
import Home from './components/home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import User from './components/user';

function App() {
  
  return (
    <BrowserRouter>
    <Routes>
      <Route path="" element={<Home/>}/>
      <Route path="/user" element={<User/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
