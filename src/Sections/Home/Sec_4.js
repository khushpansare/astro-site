import React, { useEffect, useState } from "react";
import { Avatar, Rating } from "@mui/material";
import Slider from "react-slick";
import axios from "axios";

function Sec_4() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2, // Number of cards shown at once
    slidesToScroll: 1,
    arrows: false,
    responsive: [
      {
        breakpoint: 1040,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
    ],
  };

  const [cardSlider, setCardSlider] = useState([]);

  useEffect(() => {
    axios
      .get("https://nutrihubipl.com/admin/web-app/getCustomerReview.php")
      .then((res) => {
        // console.log(res.data.result);
        setCardSlider(res.data.result);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <>
      <div className="sec-4">
        <div className="main-card">
          <h2>Testimonial</h2>
          <h1>Our Coustomer Reviews</h1>
          <div className="card-container">
            <Slider {...settings}>
              {cardSlider.map((val, i) => {
                return (
                  <div className="single-card" key={i}>
                    <div className="card-header">
                      <div className="left">
                        <Avatar
                          alt={val.review_name}
                          src="/static/images/avatar/1.jpg"
                        />
                        <p>{val.review_name}</p>
                      </div>
                      <div className="right">
                        <Rating
                          name="simple-controlled"
                          value={val.review_ratings}
                          readOnly
                          precision={0.5}
                          size="large"
                        />
                      </div>
                    </div>
                    <div className="card-body">
                      <p>{val.review_desc}</p>
                    </div>
                  </div>
                );
              })}
            </Slider>
          </div>
        </div>
      </div>
    </>
  );
}

export default Sec_4;
