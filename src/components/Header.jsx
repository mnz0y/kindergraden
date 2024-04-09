import React, {useEffect, useState, useRef} from 'react'
import {Nav, Navbar} from 'react-bootstrap';
import {useNavigate, useLocation} from 'react-router-dom';


const Header = () => {

  const navigate = useNavigate();
  const navBar =useRef();
  const location = useLocation();
 
  const [scrollPosition, setScrollPosition] = useState(0);
  const updateScroll = ()=>{
    setScrollPosition(window.scrollY || document.documentElement.scrollTop);
  };

  useEffect(()=>{
    window.addEventListener('scroll', updateScroll);
    if(location.pathname.indexOf('detail')>0){
      navBar.current.style.background='black';
    }
   
  });

  return (
    <Navbar collapseOnSelect expand="lg" ref={navBar} className={scrollPosition > 850? 'navBg' :'navBgg'} fixed='top' 
     >
      <Navbar.Brand onClick={()=>{navigate('/')}}><img src="/img/wlogo2.png" alt="로고" width={'100px'}/></Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link onClick={()=>{navigate('/detail/0')}}>신상품</Nav.Link>
          <Nav.Link href="#Seoul">전체상품</Nav.Link>
          <Nav.Link href="#Motor">모터사이클</Nav.Link>
          <Nav.Link href="#Surf">서프</Nav.Link>
          <Nav.Link>세일</Nav.Link>
          <Nav.Link href="#journal">저널</Nav.Link>
        </Nav>
        <Nav>
          <Nav.Link href="#myPage"><img src="/img/person.png" alt="마이페이지" width={'25px'} height={'25px'} /></Nav.Link>
          <Nav.Link eventKey={2} onClick={()=>{navigate('/cart')}}>
          <img src="/img/cart.png" alt="장바구니" width={'25px'} height={'25px'} style={{margin:'0 10px'}}/>
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    
  </Navbar>
  )
}

export default Header