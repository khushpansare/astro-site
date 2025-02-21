import React, { useEffect, useState } from "react";
import axios from "axios";
import Slider from "react-slick";

function Videos() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3, // Number of cards shown at once
    slidesToScroll: 1,
    arrows: false,
    responsive: [
      {
        breakpoint: 1415,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 1285,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 850,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  const [blogData, setBlogData] = useState([]);

  useEffect(() => {
    axios
      .get("https://nutrihubipl.com/admin/web-app/getBlogs.php")
      .then((res) => {
        // console.log(res.data.result);
        setBlogData(res.data.result);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <>
      <div className="video-content">
        <h1>
          OUR BEST <mark>BLOGS</mark>
        </h1>

        <div className="video-container">
          <Slider {...settings}>
            {blogData.map((val, index) => (
              <div className="single-video" key={index}>
                <iframe
                  src={`${val.blog_vdo}?autoplay=0&mute=1&controls=1&showinfo=0&modestbranding=1&rel=0`}
                  title={`YouTube video player ${index}`}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen></iframe>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </>
  );
}

export default Videos;
