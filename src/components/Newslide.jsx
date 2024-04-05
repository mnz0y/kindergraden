import React from 'react'
import Slider from "react-slick";
import { useDispatch, useSelector } from 'react-redux';
import { Button } from 'react-bootstrap';
import { jacketFilter } from '../store';

const Newslide = () => {
  const clothes = useSelector(state => state.clothes);
  let dispatch = useDispatch();
  let origin = clothes;
 let jacket = ()=>dispatch(jacketFilter());
 console.log(jacket)

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 2
  };

  return (
    <div className='contents2'>
      <h2>NEW ARRIVALS</h2>
      <div className="tabBtn">
        <Button variant="outline-dark" onClick={()=>origin}>ALL</Button>
        <Button variant="outline-dark" onClick={jacket}>JACKET</Button>
        <Button variant="outline-dark">TOP</Button>
        <Button variant="outline-dark">CAP</Button>
      </div>
      <div className="slider-container">
        <Slider {...settings}>
          {
            clothes.map((value, i) =>
              <div key={i} className='newImgBox'>
                <img src={value.imgUrl} alt="clothes" width={'90%'} />
                <h4>{value.title}</h4>
                <p>{value.color}</p>
                <p>{value.price}</p>
              </div>
            )
          }
        </Slider>
      </div>
    </div>
  )
}

export default Newslide