import React, { useState } from 'react'
import Slider from "react-slick";
import { Button } from 'react-bootstrap';
import data from '../newData';
import {useNavigate} from 'react-router-dom';

const Newslide = (props) => {
  const {clothes,setClothes} =props;
  const [isHover, setIsHover] = useState([false,false,false,false,false,false,false,false,false,false,false,false,false]);
  let origin = data;
  const navigate = useNavigate();

  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block"}}
        onClick={onClick}
      />
    );
  }
  
  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block" }}
        onClick={onClick}
      />
    );
  }

  const settings = {
    infinite: false,
    swipeToSlide:false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 2,
    centerPadding: "60px",
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1300,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 1100,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 680,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <div className='contents2'>
      <h2>NEW ARRIVALS</h2>
      <div className="tabBtn">
        <Button variant="outline-dark" onClick={()=>{
          setClothes(origin);
        }}>ALL</Button>
        <Button variant="outline-dark" onClick={()=>{
          let jacket = [...origin].filter(v => v.category ==='JACKET');
          setClothes(jacket);
        }} >JACKET</Button>
        <Button variant="outline-dark" onClick={()=>{
         let top = [...origin].filter(v => v.category ==='T-shirt');
          setClothes(top);
          }}  >TOP</Button>
        <Button variant="outline-dark" onClick={()=>{
          let cap = [...origin].filter(v => v.category ==='JERSEY');
          setClothes(cap);
        }} >JERSEY</Button>
      </div>
      <div className="slider-container">
        <Slider {...settings}>
          {
            clothes.map((value, i) =>
              <div key={i} className='newImgBox'>
                <img onClick={()=>{
                navigate('/detail/'+value.id)
              }} 
                onMouseOver={()=>{
                  let copy =[...isHover];
                  copy[i]=true;                        
                  setIsHover(copy)}} 
                  onMouseOut={()=>{
                      let copy =[...isHover];
                      copy[i]=false; 
                      setIsHover(copy)}}
                src={isHover[i]? process.env.PUBLIC_URL + value.imgUrl_5 : process.env.PUBLIC_URL + value.imgUrl_1} alt="clothes" width={'92%'} />
                <h4>{value.title}</h4>
                <p>{value.color}</p>
                <p>{value.price.toLocaleString()}원</p>
              </div>
            )
          }
        </Slider>
      </div>
    </div>
  )
}

export default Newslide