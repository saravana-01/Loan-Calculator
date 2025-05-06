
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Components/Home'
import { BrowserRouter, Routes,Route } from 'react-router-dom';
import About from './Components/About';
import NotFound from './Components/NotFound'
import Exchange from './Components/Exchange';

function App() {
  return (
   <>
   <BrowserRouter>
   <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/about' element={<About/>}/>
    <Route path='*' element={<NotFound/>}/>
    <Route path='/exchange' element={<Exchange/>}/>
   </Routes>
   </BrowserRouter>

    </>
  );
}

export default App;
