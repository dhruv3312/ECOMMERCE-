import logo from './logo.svg';
import './App.css';
import { Route,Routes } from "react-router-dom";
import Home from './Home';
import Login from './Login';
import Register from './Register';
import Viewproduct from './Viewproduct';
   // http://nunforest.com/strix-demo/home-shop.html

function App() {
  return (
    <div className="App">
    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/Login' element={<Login/>}></Route>
      <Route path='/Register' element={<Register/>}></Route>
      <Route path='/Home' element={<Home/>}></Route>
      <Route path='/Viewproduct/:_id' element={<Viewproduct/>}></Route>

    </Routes>
    </div>
  );
}

export default App;
