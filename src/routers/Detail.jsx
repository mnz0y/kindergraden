import React, { useState, useEffect, useRef } from "react";
import { Container, Button, Form, Stack, Tab, Tabs } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import Slider from "react-slick";
import TabContents from "../components/TabContents";


const Detail = (props) => {
  const { clothes } = props;
  const { id } = useParams();
  let selproduct = clothes.find(x=> x.id == id);
  const [nav1, setNav1] = useState(null);
  const [nav2, setNav2] = useState(null);
  let sliderRef1 = useRef(null);
  let sliderRef2 = useRef(null);

  useEffect(() => {
    setNav1(sliderRef1);
    setNav2(sliderRef2);
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 2
  };
  return (
    <>
      <Container className="wrap">
        <div className="slider-container detailSlide">
          <Slider asNavFor={nav2} ref={slider => (sliderRef1 = slider)} className="imgBox">
            <div>
              <img src={process.env.PUBLIC_URL + selproduct.imgUrl_1} alt="img" />
            </div>
            <div>
              <img src={process.env.PUBLIC_URL + selproduct.imgUrl_2} alt="img" />
            </div>
            <div>
              <img src={process.env.PUBLIC_URL + selproduct.imgUrl_3} alt="img" />
            </div>
            <div>
              <img src={process.env.PUBLIC_URL + selproduct.imgUrl_4} alt="img" />
            </div>
            <div>
              <img src={process.env.PUBLIC_URL + selproduct.imgUrl_5} alt="img" />
            </div>
          </Slider>
          <Slider className="sideDetail"
            asNavFor={nav1}
            ref={slider => (sliderRef2 = slider)}
            slidesToShow={3}
            swipeToSlide={true}
            focusOnSelect={true}
            vertical={true}
            verticalSwiping={true}
          >
            <div>
              <img src={process.env.PUBLIC_URL + selproduct.imgUrl_1} alt="img" />
            </div>
            <div>
              <img src={process.env.PUBLIC_URL + selproduct.imgUrl_2} alt="img" />
            </div>
            <div>
              <img src={process.env.PUBLIC_URL + selproduct.imgUrl_3} alt="img" />
            </div>
            <div>
              <img src={process.env.PUBLIC_URL + selproduct.imgUrl_4} alt="img" />
            </div>
            <div>
              <img src={process.env.PUBLIC_URL + selproduct.imgUrl_5} alt="img" />
            </div>
          </Slider>
        </div>

        <div className="textDetail">
          <span>신상품</span>
          <h2>{selproduct.title}-{selproduct.color}</h2>
          <p>{selproduct.code}</p>
          <p>{selproduct.kor}</p>
          <p>{selproduct.price.toLocaleString()}</p>

          <Form.Select aria-label="Default select example">
            <option>Size</option>
            <option value="1">S</option>
            <option value="2">M</option>
            <option value="3">L</option>
            <option value="4">XL</option>
          </Form.Select>

          <Stack gap={3} className="col-md-12 mx-auto">
            <Button variant="dark">구매하기</Button>
            <Button variant="outline-dark">장바구니 담기</Button>
          </Stack>

        </div>
      </Container>

      <Container>
        <TabContents selproduct={selproduct}/>
        
      </Container>
      <h5 className="togetherTitle">다른 고객이 함께 구매한 상품</h5>
        <div className="slider-container together">
        <Slider {...settings}>

          {
            clothes.map((value,i)=>
            <div key={i}>
          <img src={process.env.PUBLIC_URL + value.imgUrl_1} alt="img" />
          <p>{value.title}</p>
        </div>
          )
          }
       
      </Slider>
    </div>
    </>
  );
}

export default Detail;
