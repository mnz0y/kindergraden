import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';
import './detail.scss';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {Routes, Route} from 'react-router-dom';
import React ,{ useState } from 'react';
import Header from './components/Header';
import Home from './routers/Home';
import Footer from './components/Footer';
import Detail from './routers/Detail';
import data from './newData';
import Cart from './routers/Cart';
import Login from './routers/Login';

function App() {
  const [clothes, setClothes] = useState(data);
  return (
    <div className="App">
     <Header clothes={clothes} />

     <Routes>
      {/* home */}
      <Route path='/' element={<Home clothes={clothes} setClothes={setClothes} />} />

      {/* detail */}
      <Route path='/detail/:id' element={<Detail clothes={clothes} />} />

      {/* cart */}
      <Route path='/cart' element={<Cart />} />

      {/* login */}
      <Route path='/login' element={<Login/>}/>

     </Routes>

      <Footer />
    </div>
  );
}

export default App;
