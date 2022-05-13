import './slider.css';
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import images from './images/image-1.webp';
import images_2 from './images/image-2.webp';
import images_3 from './images/image-3.webp';
import images_4 from './images/image-4.webp';
import images_5 from './images/image-5.webp';
import images_6 from './images/image-6.webp';

export default function () {
    
    const UrlImage = [
        images,
        images_2,
        images_3,
        images_4,
        images_5,
        images_6
    ] 

    const settings = {
        dots: true,
        fade: true,
        infinite: true,
        speed: 500,
        autoplaySpeed : 3000,
        autoplay: true,
        arrows: true,
        slidesToShow: 1,
        slidesToScroll: 1
      };

    return (
        <section>
            <div className='Slider_images'>
                <div className='Slider_images-slick'>

                    <Slider {...settings}>
                            {
                                UrlImage.map((item,index) => {
                                    return(
                                        <div>
                                            <div key={index} style={{
                                                
                                                background : `url(${item})
                                                center/cover no-repeat
                                                `,paddingTop : 300 ,

                                            }}>
                                            </div>
                                        </div>
                                    )
                                })
                            }
                    </Slider>

                </div>
            </div>
        </section>
    )
}

