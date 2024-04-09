import React from 'react'

import SimpleSlider from '../components/Slider'
import { Row, Col, Container } from 'react-bootstrap'
import Newslide from '../components/Newslide'
import Seoulcollection from '../components/Seoulcollection'
import Store from '../components/Store'


const Home = (props) => {
  const {clothes,setClothes} =props;

  return (
    <>
      {/* 슬라이드동영상 */}
      <SimpleSlider />
      {/* 문단1 */}
      <Row className="contents1">
        <Col className="motor" id='Motor'>
          <h2>MOTORCYCLE</h2>
        </Col>
        <Col className="surf" id='Surf'>
          <h2>SURF</h2>
        </Col>
      </Row>
      {/* 문단2 */}
      <Container>
        <Newslide clothes={clothes} setClothes={setClothes} />
      </Container>
      {/* 문단3 */}
      <Row className="contents3" id='journal'>
        <Col>
          <div className="article1"></div>
          <h2>Bob Moore x Beau Foster</h2>
          <div className="bobText">
            <p>아티스트 로버트 밥 무어(Robert Bob Moore)와 셰이퍼 보 포스터(Bo Foster)의 특별한 콜라보레이션을 소개합니다.<br />
              이 프로젝트를 위해 보가 맞춤 제작한 6장의 핸드 셰이프 보드에 밥의 능숙한 붓 놀림이 더해졌습니다.<br /><br />
              밥 무어의 호기심은 끝이 없습니다. 자동차, 서핑, 음악에 대한 끝없는 열정이 그의 상징적인 작품에 반영되어 있으며,<br />
              1/4인치 임페리얼 스패너를 다루면서 깁슨 플라잉 V도 능숙하게 연주하는 밥은 데우스의 전설적인 존재입니다.
            </p>
            <div className="bobImg">
              <img src="/img/board1.png" alt="board" />
              <img src="/img/board2.png" alt="board" />
            </div>
          </div>
        </Col>
      </Row>

       {/* 문단4 */}
      <Row className="contents4">
        <Col md={6}>
          <div className="article2"></div>
          <h2>DEUS EX MACHINA x FUEL POMADE COLLABORATION</h2>
          <p>즐거움을 추구하며, 다양한 문화를 선보이는 데우스 엑스 마키나와 퓨얼 포마드가 만나 클래식 헤어를 위한 DEUS x FUEL CUSTOM POMADE와 협업 굿즈를 새롭게 선보입니다. <br/>
            성공적인 협업을 기념하여 FUEL 앰버서더 바버들로 구성된 룩앤런 바버 세미나와 다양한 이벤트를 오는 12월 5일 데우스 홍대 와우산점에서 만나보실 수 있습니다.</p>
        </Col>
        <Col md={6}>
        <div className="article3"></div>
          <h2>FILM NIGHT AT DEUS NOOSA</h2>
          <p>누사 페스티벌 오브 서핑에서 한 주를 시작하기 위해 매장을 미니 영화관과 공연 공간으로 개조했는데, 
            시사회를 열기에 이만한 천국 같은 배경을 찾기는 어렵습니다. <br/>
            맛있는 음식과 다양한 음료, 라이브 음악 등 필수적인 요소들이 모두 갖추어져 있었습니다. 법적인 이유로 일몰에 대한 공로를 인정할 수는 없지만 확실히 분위기를 더했습니다.</p>
        </Col>
      </Row>

      {/* 문단5 */}
     <Seoulcollection></Seoulcollection>

     {/* 문단6 */}
     <h2 className='storeTitle'>매장</h2>
      <Store></Store>

    </>
  )
}

export default Home