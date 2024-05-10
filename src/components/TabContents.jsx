import React from 'react'
import { Table, Tab, Tabs, Button, ListGroup, Badge, Row, Col } from 'react-bootstrap';
import Accordion from 'react-bootstrap/Accordion';


const TabContents = (props) => {
  const { selproduct } = props;
  return (
    <>
      <Tabs
        defaultActiveKey="상세정보"
        id="fill-tab-example"
        className="mb-3"
        fill
      >
        <Tab eventKey="상세정보" title="상세정보">
          <div className='detailClothes'>
            <div className="detailBg">
              <small>데우스 엑스 마키나</small>
              <h2>DEUS EX MACHINA</h2>
              <p>전 세계 독특한 데우스 엑스 마키나의 열정을 전파하고 있는 브랜드</p>
              <Button variant="dark"><span>Brand Home</span> <small>→</small> </Button>
            </div>
            <img src={process.env.PUBLIC_URL + selproduct.imgUrl_1} alt="img" />
            <img src={process.env.PUBLIC_URL + selproduct.imgUrl_2} alt="img" />
            <img src={process.env.PUBLIC_URL + selproduct.imgUrl_3} alt="img" />
            <img src={process.env.PUBLIC_URL + selproduct.imgUrl_4} alt="img" />
            <img src={process.env.PUBLIC_URL + selproduct.imgUrl_5} alt="img" />
            <h3>상품정보 보기</h3>
            <Table responsive="sm" bordered striped variant="light" className='info'>
              <thead>
                <tr>
                  <th>제품소개</th>
                  <td>100% COTTON</td>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th>제품 색상</th>
                  <td>{selproduct.color}</td>
                </tr>
                <tr>
                  <th>제조사</th>
                  <td>DEUS EX MACHINA</td>
                </tr>
                <tr>
                  <th>제조국</th>
                  <td>중국</td>
                </tr>
                <tr>
                  <th>수입자</th>
                  <td>(주)웍스아웃</td>
                </tr>
                <tr>
                  <th>세탁 방법 및 주의 사항</th>
                  <td>케어라벨 및 고객지원 참조</td>
                </tr>
                <tr>
                  <th>배송 안내 및 반품 고시</th>
                  <td>페이지 하단 및 고객지원 참조</td>
                </tr>
                <tr>
                  <th>제품 제조 연월</th>
                  <td>2024-01</td>
                </tr>
                <tr>
                  <th>품질 보증 기준</th>
                  <td>관련법 및 소비자 분쟁 해결 규정에 따름</td>
                </tr>
                <tr>
                  <th>고객 센터 안내</th>
                  <td>02-541-0854</td>
                </tr>
              </tbody>
            </Table>
            <h3>사이즈정보</h3>
            <Table bordered striped variant="light" className='size'>
              <thead>
                <tr>
                  <th>사이즈명(cm)</th>
                  <th>총길이</th>
                  <th>어깨 너비</th>
                  <th>가슴 너비</th>
                  <th>소매 길이</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th>S</th>
                  <td>69</td>
                  <td>45</td>
                  <td>49</td>
                  <td>63.5</td>
                </tr>
                <tr>
                  <th>M</th>
                  <td>71</td>
                  <td>47.5</td>
                  <td>53</td>
                  <td>66</td>
                </tr>
                <tr>
                  <th>L</th>
                  <td>72</td>
                  <td>50</td>
                  <td>55</td>
                  <td>67</td>
                </tr>
                <tr>
                  <th>XL</th>
                  <td>74.5</td>
                  <td>52</td>
                  <td>57</td>
                  <td>69</td>
                </tr>
              </tbody>
            </Table>
          </div>
        </Tab>

        <Tab eventKey="상품리뷰" title="상품리뷰(5)" className='reviewPage'>
          <h2>사진리뷰</h2>
          <Row xs={3} sm={6}>
            <Col><img src={process.env.PUBLIC_URL + "/img/review1.jpg"} alt="리뷰이미지" /></Col>
            <Col><img src={process.env.PUBLIC_URL + "/img/review2.jpg"} alt="리뷰이미지" /></Col>
            <Col><img src={process.env.PUBLIC_URL + "/img/review3.jpg"} alt="리뷰이미지" /></Col>
            <Col><img src={process.env.PUBLIC_URL + "/img/review4.jpg"} alt="리뷰이미지" /></Col>
            <Col><img src={process.env.PUBLIC_URL + "/img/review5.jpg"} alt="리뷰이미지" /></Col>
            <Col><img src={process.env.PUBLIC_URL + "/img/review6.jpg"} alt="리뷰이미지" /></Col>
          </Row>
          <h2>리뷰(5)</h2>
          <ListGroup as="ul" >
            <ListGroup.Item
              as="li"
              className="d-flex justify-content-between align-items-start"
            >
              <div className="ms-2 me-auto">
                <div><span className="star fw-bold">★★★★★</span> <small> | jan**** | 2024-04-11</small></div>
                <span className='reviewpd'>구매제품 : {selproduct.kor}</span>
                <p>아주 데일리하게 입기 좋습니다. 핏도 좋고 어디든 잘 어울려요.</p>
              </div>
              <Badge bg="primary" pill>
                new
              </Badge>
            </ListGroup.Item>

            <ListGroup.Item
              as="li"
              className="d-flex justify-content-between align-items-start"
            >
              <div className="ms-2 me-auto">
                <div><span className="star fw-bold">★★★★★</span> <small> | k7u**** | 2024-04-11</small></div>
                <span className='reviewpd'>구매제품 : {selproduct.kor}</span>
                <p>너무 맘에듭니다~~~데우스 좋아하는 브랜드라 다른 디자인 색상도 다 사고싶네요~~ㅎ
평소에 추리닝에 입어도 잘 어울려요!!</p>
              </div>
              <Badge bg="primary" pill>
                new
              </Badge>
            </ListGroup.Item>
            
            <ListGroup.Item
              as="li"
              className="d-flex justify-content-between align-items-start"
            >
              <div className="ms-2 me-auto">
                <div><span className="star fw-bold">★★★☆☆</span> <small> | man**** | 2024-04-06</small></div>
                <span className='reviewpd'>구매제품 : {selproduct.kor}</span>
                <p>생각보다 탄탄하고 사이즈도 커서 좋았어요 단독으로 입기도 좋고 레이어드해서 입기에 길이감이 길어서 좋았어요. 로고도 딱 흑백이 아니라 은은해서 만족했어요!</p>
              </div>
            </ListGroup.Item>

            <ListGroup.Item
              as="li"
              className="d-flex justify-content-between align-items-start"
            >
              <div className="ms-2 me-auto">
                <div><span className="star fw-bold">★★★★☆</span> <small> | jdh**** | 2024-04-03</small></div>
                <span className='reviewpd'>구매제품 : {selproduct.kor}</span>
                <p>생각보다 딱 맞는 핏이어서 좋았어요. 진짜 아주 살짝 루즈핏이거나 레귤러로 봐야 맞겠습니다. 색깔은 진짜 예뻐요</p>
              </div>
            </ListGroup.Item>
            <ListGroup.Item
              as="li"
              className="d-flex justify-content-between align-items-start"
            >
              <div className="ms-2 me-auto reviewBox">
                <div><span className="star fw-bold">★★★★★</span> <small> | jjh**** | 2024-04-01</small></div>
                <span className='reviewpd'>구매제품 : {selproduct.kor}</span>
                <p>할인해서 정말 저렴히 구매 했습니다. 감사합니다.배송도 빠르고 좋았습니다.</p>
              </div>
            </ListGroup.Item>
          </ListGroup>
        </Tab>

        <Tab eventKey="배송" title="배송/교환/반품" className='shipping'>
          <Accordion defaultActiveKey={['0']} alwaysOpen>
            <Accordion.Item eventKey="0">
              <Accordion.Header>배송안내</Accordion.Header>
              <Accordion.Body>
                <h3>배송기간(물류센터)</h3>
                <p>
                  본 상품은 오프라인 매장과 동시에 판매하는 상품이므로, 주문 접수 및 상품 준비 도중 판매가 증가하여 발송지연 또는 품절 될 수 있으니 양해 부탁드립니다. 배송이 지연되는 경우 고객님께 빠르게 안내 할 수 있도록 노력하겠습니다. [물류센터배송] <br />
                  ·결제완료 후 평균 3~5일(휴일 및 공휴일제외) 이내에 배송됩니다. <br />
                  ·물류센터 내 상품 부족시, 상품이 있는 타매장에서 이동받아 배송하므로 평균 배송일보다 1~2일이 지연될 수 있습니다. <br />
                </p>
                <h3>[매장직배송]</h3>
                <p>
                  ·일부 상품의 경우, 지정된 매장에서 직접 배송이 이루어집니다.<br />
                  ·지정된 매장의 재고 부족시 타매장에서 재고를 수급하여 배송하므로 3~7일이 소요됩니다.<br />
                  * 예약 및 공동구매와 같은 특정 상품의 경우, 사전에 공지된 발송일에 일괄 배송됩니다.<br />
                </p>
                <h3>배송지역</h3>
                <p>
                  전국배송 가능 (제주도나 기타도서 지방은 별도의 요금이 부과됩니다.)<br />
                  <b>
                    편의점 픽업 가능 상품에 한하여 주문 시 배송 주소에 원하시는 GS25 편의점을 선택하여 수령 가능하며 상품 도착 시 문자로 안내해 드립니다.<br />
                    (편의점 픽업 상품은 배송완료 후 6일 이내 수령 해야하며, 기간 내 미 수령 시, 배송비 고객 부담으로 반품 처리됩니다. 이점 유의 바랍니다.)<br />
                  </b>
                </p>
                <h3>배송비</h3>
                <p>
                  회원구매 시 배송비는 2,500원 (3만원 이상 무료) (도서,산간,오지 일부 지역은 배송비가 추가됩니다.)<br />
                  도서지역 추가 배송료: 3,000~9,000원 (도서지역별로 상이하며 추가 금액이 발생할 수 있습니다.)<br />
                </p>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
              <Accordion.Header>교환/반품 안내</Accordion.Header>
              <Accordion.Body>
                <p>
                  ·교환 및 반품은 상품수령 후 7일 이내에 요청 하셔야 하며, 수선 및 착용상태가 없는 사용하지 않은 상품이어야 합니다.<br />
                  ·단순 변심으로 인한 교환 및 반품 요청시 왕복 또는 편도 배송비는 고객님 부담입니다.<br />
                  ·맞교환은 불가능하며, 수령하신 상품이 물류센터로 입고된 후 요청하신 교환상품이 배송됩니다.<br />
                  ·사이즈 교환만 가능하며 컬러 교환을 원하실 경우, 기존 상품 반품 후 재 주문이 필요합니다.<br />
                  ·반품에 의한 선환불은 불가능 하며, 반품 상품이 물류센터로 입고된 후 상품의 이상 유무를 확인한 후에 환불처리 해드립니다.<br />
                </p>
                <dl>
                  <dt>1. 교환 & 반품시 주의사항</dt>
                  <dd>·교환 및 반품은 제품 수령 후 7일 이내에 가능합니다.</dd>
                  <dd>·상품은 착용한 흔적이 있거나, 상품tag가 손상된 경우 교환/반품/환불이 불가합니다. 교환시 맞교환은 불가능하며, 상품 입고 후 교환을 원하시는 제품으로 배송해드립니다.</dd>
                  <dd>·교환 및 반품내역이 접수되지 않거나, 지정된 반송처로 반송되지 않을 시, 교환/반품/환불 절차가 지연되오니 양해 부탁 드립니다.</dd>
                  <dd>·교환 및 반품 상품 포장 시 상품이 외부로 유실되지 않도록 테이프 등으로 안전하게 포장하여 발송해 주시기 바랍니다.</dd>
                </dl>
                <dl>
                  <dt>2. 교환 & 반품시 절차</dt>
                  <dd>·상품 수령후 2~3일내 구매하신 사이트 "마이페이지" 주문/배송 내역조회에서 직접 접수 하시거나 고객센터를 통해 접수해주세요.</dd>
                  <dd>·편의점 반품: 편의점 반품은 편의점 픽업이 가능한 상품에 한해서 이용 가능합니다. 편의점 반품 신청 후 발급되는 승인번호로 GS25에 설치된 PostBox에 반품 접수를 진행해 주시기 바랍니다.</dd>
                  <dd>·단순 변심으로 인한 교환 및 반품 시 택배비용은 고객님께서 부담하셔야 합니다. (배송착오 및 제품 불량의 경우 제외)</dd>
                </dl>
                <dl>
                  <dt>3. 교환/반품이 가능한 경우</dt>
                  <dd>·상품을 공급받으신 날로부터 7일 이내에 요청이 가능합니다.</dd>
                  <dd>·상품을 미사용한 상태에서 반송하여 주십시오.</dd>
                  <dd>·반송된 후 물류센터에서 반송확인 후 환불 및 교환처리 됩니다.</dd>
                </dl>
                <dl>
                  <dt>4. 교환/반품이 불가능한 경우</dt>
                  <dd>다음과 같이 상품이 사용/훼손된 경우에는 교환 및 반품이 되지 않습니다.</dd>
                  <dd>·고객님의 귀책 사유로 상품이 훼손된 경우. (단, 상품의 내용 확인을 위해 포장 등을 훼손한 경우는 제외)</dd>
                  <dd>·포장을 개봉하였거나 포장이 훼손되어 상품가치가 현저히 상실된 경우.</dd>
                  <dd>·상품의 TAG, 스티커, 케이스 등을 훼손 및 분실한 경우.</dd>
                  <dd>·시간의 경과에 의하여 재판매가 곤란할 정도로 상품 등의 가치가 현저히 감소된 경우.</dd>
                </dl>
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </Tab>
      </Tabs>

    </>

  )
}

export default TabContents