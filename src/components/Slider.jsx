import React, { useState } from "react";
import Slider from "react-slick";
import { Button } from "react-bootstrap";

export default function SimpleSlider() {
    const [video, setVideo] = useState([{ title: 'New Arrivals SS24', videoUrl: "/img/slide1.mp4" }, { title: 'DEUS CLASSICS', videoUrl: "/img/slide2.mp4" }])
    const settings = {
        dots: true,
        fade: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 5000,
    };
    return (
        <Slider {...settings}>
            {
                video.map((value, i) =>
                    <div key={i} className="slideVideo">
                        <div className="textWrap">
                            <h2>{value.title}</h2>
                            <Button variant="outline-light" className="videoBtn" size="lg">바로가기<span></span></Button>
                        </div>
                        <video src={process.env.PUBLIC_URL + value.videoUrl} width={'100%'} autoPlay muted loop></video>
                    </div>
                )
            }

        </Slider>
    );
}