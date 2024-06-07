import logo from './logo.svg';
import './App.css';
import AddProduct from './components/AddProduct';
import Select from './components/Select';
import Delete from './components/Delete';
import Viewall from './components/Viewall';
import Navbar from './components/Navbar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';


function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<AddProduct/>}/>
      <Route path='/search' element={<Select/>}/>
      <Route path='/delete' element={<Delete/>}/>
      <Route path='/viewall' element={<Viewall/>}/>
    </Routes>
    </BrowserRouter>

  );
}

export default App;
