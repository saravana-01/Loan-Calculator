
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Components/Home'
import { BrowserRouter, Routes,Route } from 'react-router-dom';
import About from './Components/About';

function App() {
  return (
   <>
   <BrowserRouter>
   <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/about' element={<About/>}/>
   </Routes>
   </BrowserRouter>

    </>
  );
}

export default App;
