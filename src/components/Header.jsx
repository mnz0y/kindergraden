import React from 'react'
import {Nav, Navbar} from 'react-bootstrap';


const Header = () => {

  return (
    <Navbar collapseOnSelect expand="lg" className="nav" fixed='top' >
    
      <Navbar.Brand href="#home"><img src="img/wlogo2.png" alt="로고" width={'100px'}/></Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link href="#features">신상품</Nav.Link>
          <Nav.Link href="#pricing">전체상품</Nav.Link>
          <Nav.Link href="#pricing">모터사이클</Nav.Link>
          <Nav.Link href="#pricing">서프</Nav.Link>
          <Nav.Link href="#pricing">세일</Nav.Link>
          <Nav.Link href="#pricing">저널</Nav.Link>
        </Nav>
        <Nav>
          <Nav.Link href="#deets"><img src="img/person.png" alt="마이페이지" width={'25px'} height={'25px'} /></Nav.Link>
          <Nav.Link eventKey={2} href="#memes">
          <img src="img/cart.png" alt="장바구니" width={'25px'} height={'25px'} style={{margin:'0 10px'}}/>
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    
  </Navbar>
  )
}

export default Header