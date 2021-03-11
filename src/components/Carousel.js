import React from 'react';
import styled from 'styled-components';
// import Carousel, { arrowsPlugin } from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';

import her1 from '../img/hermanas11.jfif';
import her2 from '../img/hermanas22.jfif';
import her3 from '../img/hermanas33.jfif';

import {IoIosArrowBack} from 'react-icons/io';
import {IoIosArrowForward} from 'react-icons/io';


// import Slider from 'react-animated-slider';
import 'react-animated-slider/build/horizontal.css';
import Slider from "react-slick";

const Imagen = styled.div`
    width: 100%;
    height: 80vh;
    padding-top: 70px;
    background-image: url(${her1});
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;   
`

const Imagen2 = styled.div`
    width: 90%;
    height: 80vh;
    padding-top: 70px;
    background-image: url(${her2});
    background-size: cover;
    background-position: center ;
    background-repeat: no-repeat;  
`

const Imagen3 = styled.div`
    width: 100%;
    height: 80vh;
    padding-top: 70px;
    background-image: url(${her3});
    background-size: cover;
    background-position: center ;
    background-repeat: no-repeat;  
`

const Titulo = styled.h1`
    position: absolute;
    z-index: 1;
    top: 50%;
    color: white;
    font-size: 25px;
    text-align: left;
    margin-left: 20px;
    margin-top: 140px;
    width: auto;
    left: 0;
    color: #9DD1FF;
    filter: drop-shadow(3px 2px 2px rgba(0, 0, 0, 1));
    /* background: red; */
    @media (min-width: 768px) {
        font-size: 58px;
        font-weight: 900;
        margin-left: 200px;
    }
`

export default function Carousel() {
  var settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 700,
    fade: true,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
      <div className="container2">
        <Titulo className="tituloCarousel">HERMANAS <br /> MISIONERAS DE SAN FRANCISCO JAVIER</Titulo>
        <Slider {...settings}>
            <Imagen  />
            <Imagen3  />
            <Imagen2  />
        </Slider>
      </div>
  );
}

 
// const Carousel = () => {

//     const slides = [
//         { title: 'First item', description: 'Lorem ipsum', foto: <Imagen />, nombreFoto: her1 },
//         { title: 'First item', description: 'Lorem ipsum', foto: <Imagen2 />, nombreFoto: her2 },
//         { title: 'First item', description: 'Lorem ipsum', foto: <Imagen3 />, nombreFoto: her3 },
//       ];
       
//     return (  
//         <Slider 
//         /*autoplay={1000}*/
//         className="slider" 
//         style={{width: "100%", height: "700px"}}
//         infinite className="slider" 
//         previousButton={<IoIosArrowBack 
//         color="white" size="50px" />}
//         nextButton={<IoIosArrowForward 
//         color="white" size="50px" />}
//         >
//             {slides.map((slide, index) => <div style={{background: "red", height: "100%"}} key={index}>
//                 {slide.foto}
//                 {/* <img src={slide.nombreFoto} /> */}
//             </div>)}
//         </Slider>
//     );
// }
 
// export default Carousel;







// const MyCarousel = () => (
//   <Carousel 
//    style={{marginTop: "120px"}} 
//    plugins={[
//     {
//       resolve: arrowsPlugin,
//       options: {
//         arrowLeft: <button style={{background: "red", width: "100px", height: "100px"}}><IoIosArrowBack /></button>,
//         arrowLeftDisabled:<button><IoIosArrowBack /></button>,
//         arrowRight: <button><IoIosArrowForward /></button>,
//         arrowRightDisabled: <button><IoIosArrowForward /></button>,
//         addArrowClickHandler: true,
//       }
//     }
//   ]}
//   >
//       <img style={{width: "100px"}} src={her1} />
//     <Imagen  />
//     <Imagen3  />
//     <Imagen2  />
//   </Carousel>
// );

// export default MyCarousel;