import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import Slider from "react-slick";

const videos = [
  {
    slide_id: 1,
    slide_vdo:
      "https://www.youtube-nocookie.com/embed/WKhaaFe6CSQ?showinfo=1&rel=0&autoplay=1&mute=1&controls=0&modestbranding=1&rel=0",
  },
  {
    slide_id: 2,
    slide_vdo:
      "https://www.youtube-nocookie.com/embed/WKhaaFe6CSQ?showinfo=1&rel=0&autoplay=1&mute=1&controls=0&modestbranding=1&rel=0",
  },
  {
    slide_id: 3,
    slide_vdo:
      "https://www.youtube-nocookie.com/embed/WKhaaFe6CSQ?showinfo=1&rel=0&autoplay=1&mute=1&controls=0&modestbranding=1&rel=0",
  },
];

function Sec_1() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: false,
  };

  const [sliderData, setSliderData] = useState([]);

  useEffect(() => {
    axios
      .get("https://nutrihubipl.com/admin/web-app/getSliderVdo.php")
      .then((res) => {
        // console.log(res.data.result);
        setSliderData(res.data.result);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <>
      <div className="sec-1">
        <div className="video-slider-container">
          <Slider {...settings}>
            {sliderData.map((video) => (
              <div key={video.slide_id} className="video-slide">
                {/* <iframe
                  src={`${video.slide_vdo}`}
                  frameBorder="0"
                  // allow="autoplay; fullscreen"
                  allow="autoplay"
                  allowFullScreen
                  className="slider-video"></iframe> */}

                <video
                  className="slider-video"
                  autoPlay
                  muted
                  controls={false}
                  style={{ maxWidth: "100%", height: "auto" }}>
                  <source src={video.slide_vdo} type="video/mp4" />
                </video>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </>
  );
}

export default Sec_1;
