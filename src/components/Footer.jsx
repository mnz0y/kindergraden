import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

const Footer = () => {
  return (
    <div className='footer'>
        <Container>
        <Row md={2} sm={1} xs={1} >
        <Col className="leftBox" >
            <dl>
                <dt>㈜웍스아웃</dt>
                <dd>대표이사 강승혁, 박선영 | 사업자등록번호 : 106-86-85373</dd>
                <dd>통신판매업 신고번호 : 2014-서울마포 - 0219</dd>
                <dd>서울시 마포구 월드컵북로23길 24 </dd>
                <dd>마케팅/제휴 문의 : customer@deuscustoms.co.kr</dd>
            </dl>
                <p>DEUS EX MACHINA KOREA | ⓒ COPYRIGHT ALL RIGHTS RESERVED</p>
        </Col>
        <Col className="rightBox" >
            <dl>
                <dt>개인정보처리방침</dt>
                <dd>이용약관</dd>
                <dd>A/S안내</dd>
                <dd>공지사항</dd>
                <dd>채용안내</dd>
            </dl>
            <div className="contact">
                <p>고객센터</p>
                 <strong>02-541-0854</strong><br/>   
                <small>(09:30 ~ 17:30, 주말/공휴일 휴무)</small>
                <div className="sns">
                    <img src="/img/facebook.svg" alt="페이스북" />
                    <img src="/img/youtube.svg" alt="유투브" />
                    <img src="/img/insta.svg" alt="인스타그램" />
                </div>
            </div>
        </Col>

         </Row>
         </Container>
        
   </div>
  )
}

export default Footer