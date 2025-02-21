import axios from "axios";
import React, { useEffect, useState } from "react";
import Slider from "react-slick";

const cards = [
  { id: 1, content: "Card 1" },
  { id: 2, content: "Card 2" },
  { id: 3, content: "Card 3" },
  { id: 4, content: "Card 4" },
  { id: 5, content: "Card 5" },
  { id: 6, content: "Card 6" },
  { id: 7, content: "Card 7" },
  { id: 8, content: "Card 8" },
  { id: 9, content: "Card 9" },
  { id: 10, content: "Card 10" },
];

function Sec_3() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
      {
        breakpoint: 1415,
        settings: {
          slidesToShow: 5,
        },
      },
      {
        breakpoint: 1165,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 850,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 705,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 450,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  const [galleryData, setGalleryData] = useState([]);
  useEffect(() => {
    axios
      .get("https://nutrihubipl.com/admin/web-app/getGalleryList.php")
      .then((res) => {
        // console.log(res.data.result);
        setGalleryData(res.data.result);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <>
      <div className="sec-3">
        <h1>Watch our Gallery</h1>
        <Slider {...settings}>
          {galleryData.map((val, i) => (
            <div
              key={val.gallery_id}
              className={`card ${i % 2 != 0 ? "card-even" : ""}`}>
              <div className="card-content">
                <img src={val.gallery_img} alt="" />{" "}
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </>
  );
}

export default Sec_3;
