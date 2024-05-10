import React, {useEffect, useState, useRef} from 'react'
import {Nav, Navbar} from 'react-bootstrap';
import {useNavigate, useLocation} from 'react-router-dom';


const Header = (props) => {
  const {clothes} =props;
  const navigate = useNavigate();
  const navBar =useRef();
  const location = useLocation();
 
  const [scrollPosition, setScrollPosition] = useState(0);
  const updateScroll = ()=>{
    setScrollPosition(window.scrollY || document.documentElement.scrollTop);
  };

  useEffect(()=>{
    //슬라이드 이후 네비 배경색 변경
    window.addEventListener('scroll', updateScroll);

    //홈화면 제외 네비 배경색 변경
    if(location.pathname.indexOf('detail')>0 ||location.pathname.indexOf('cart')>0||location.pathname.indexOf('login')>0){
      navBar.current.style.background='black';
    }
   
  });

  return (
    <Navbar collapseOnSelect expand="lg" ref={navBar} className={scrollPosition > 850? 'navBg' :'navBgg'} fixed='top' 
     >
      <Navbar.Brand onClick={()=>{navigate('/')}}><img src={process.env.PUBLIC_URL + "/img/wlogo2.png"} alt="로고" width={'100px'}/></Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link onClick={()=>{navigate(`/detail/${clothes[0].id}`)}}>신상품</Nav.Link>
          <Nav.Link onClick={()=>{navigate('/')}} href="#Seoul">전체상품</Nav.Link>
          <Nav.Link onClick={()=>{navigate('/')}} href="#Motor">모터사이클</Nav.Link>
          <Nav.Link onClick={()=>{navigate('/')}} href="#Surf">서프</Nav.Link>
          <Nav.Link>세일</Nav.Link>
          <Nav.Link onClick={()=>{navigate('/')}} href="#journal">저널</Nav.Link>
        </Nav>
        <Nav>
          <Nav.Link onClick={()=>{navigate('/login')}}><img src={process.env.PUBLIC_URL + "/img/person.png"} alt="마이페이지" width={'25px'} height={'25px'} /></Nav.Link>
          <Nav.Link eventKey={2} onClick={()=>{navigate('/cart')}}>
          <img src={process.env.PUBLIC_URL + "/img/cart.png"} alt="장바구니" width={'25px'} height={'25px'}/>
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    
  </Navbar>
  )
}

export default Header