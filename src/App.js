
import './App.css';
import Home from './components/home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import User from './components/user';
import Reqres from './components/reqres';
import Login from './components/login';
import {BeforeLogin, Guard} from './components/guard';
import { HttpService } from './services/httpsservice';
import Profile from './components/profile';
import Review from './components/review';
import Debug from './components/debug';
import Crud from './components/crud';
import Testing from './components/testing';

function App() {
  
  return (
    <BrowserRouter>
    <HttpService>
    <Routes>
      <Route path="" element={<BeforeLogin><Login/></BeforeLogin>}/>
      <Route path="/home" element={<Home/>}/>
      <Route path="/user" element={<User/>}/>
      <Route path="/profile" element={<Profile/>}/>
      <Route path="/review" element={<Review/>}/>
      <Route path="/debug" element={<Debug/>}/>
      <Route path="/crud" element={<Crud/>}/>
      <Route path="/testing" element={<Testing/>}/>
      <Route path="/reqres" element={<Guard><Reqres/></Guard>}/>
    </Routes>
      </HttpService>
    </BrowserRouter>
  );
}

export default App;
