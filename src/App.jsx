import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Navbar, Nav} from 'react-bootstrap'
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import Slide from './components/Slide';


function App() {
  return (
    <div className="App">
        <Navbar collapseOnSelect expand="lg" fixed='top'>
        <Navbar.Brand href="#home"><img src="img/MNZY.png" alt="logo" /></Navbar.Brand>
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav>
            <Nav.Link href="#about">ABOUT</Nav.Link>
            <Nav.Link eventKey={2} href="#works">WORKS</Nav.Link>
            <Nav.Link eventKey={3} href="#contact">CONTACT</Nav.Link>
          </Nav>
        </Navbar.Collapse>
    </Navbar>

    <Slide/>
      
    </div>
  );
}

export default App;
