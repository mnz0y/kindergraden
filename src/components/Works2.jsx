import React from 'react'
import {Button} from 'react-bootstrap'

const Works = () => {
  return (
    <div className='works'>
      <div className="pc">
      <div className="mock1">
        <img src="img/pc1.JPG" alt="pc" />
        </div>
      </div>
      <div className="detail">
        <h2><b>01.</b><br/>
        DEUS EX MACHINA</h2>
        <h5>React Project</h5>
        <p>
        React를 활용해 제작한 의류 쇼핑몰 데우스 웹페이지입니다.<br/>
        Redux를 사용해 장바구니 품목 추가&삭제 기능을 구현하였습니다.
        </p>
        <div className="btnGroup1">
        <Button variant="dark">React</Button>{' '}
        <Button variant="dark">Redux</Button>{' '}
        <Button variant="dark">Slick</Button>{' '}
        <Button variant="dark">Bootstrap</Button>{' '}
        </div>
        <div className="btnGroup2">
        <Button variant="outline-dark">Web-Page</Button>{' '}
        <Button variant="outline-dark">Document</Button>{' '}
        </div>

      </div>
      

    </div>
  )
}

export default Works