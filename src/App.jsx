import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Header from './components/Header';
import Home from './routers/Home';
import Footer from './components/Footer';


function App() {

  return (
    <div className="App">
     <Header />
      <Home></Home>
      <Footer></Footer>
    </div>
  );
}

export default App;
