import React from "react";

// Component
import Layout from "../Main Component/Layout";

// Image
import Numerology_Img from "../Assets/astrology-circle-orance.png";
import Natal_Reading from "../Assets/services/nata-charts-readings.png";
import Horoscope_Img from "../Assets/services/horoscope-matching.png";
import Comptability_Reading from "../Assets/services/comptability-reading.jpeg";
import Progression_Reading from "../Assets/services/progression-reading.jpeg";
import { Link } from "react-router-dom";

// Card-Data
const servicesData = [
  {
    name: "Nata Chart Readings",
    img: Natal_Reading,
  },
  {
    name: "Compatibility Readings",
    img: Comptability_Reading,
  },
  {
    name: "Progression Readings",
    img: Progression_Reading,
  },
  {
    name: "Horoscope Readings",
    img: Horoscope_Img,
  },
];

function Home() {
  return (
    <>
      <Layout>
        <section className="home-sec-1">
          <div className="left">
            <h1> YOUR ASTROLOGY UNLEASED</h1>

            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Error
              tempora ab ipsam mollitia sequi a iste, optio aliquam quasi
              excepturi reprehenderit reiciendis, vel, aspernatur inventore
              alias voluptate quis iure facere.
            </p>

            <button>Get Started</button>
          </div>
          <div className="right">
            <img src={Numerology_Img} alt="" />
          </div>
        </section>

        <section className="home-sec-services">
          <div className="headings">
            <h2>Our Services</h2>
            <h1>Astrology is just a finger pointing at reality</h1>
          </div>

          <div className="services-card">
            {servicesData.map((val, i) => {
              return (
                <div className="single-card">
                  <div className="left">
                    <h2>{val.name}</h2>
                    <p>
                      Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                      Earum illum aperiam fugiat.
                    </p>

                    <Link to={"astrological-session"}>Book now</Link>
                  </div>
                  <div className="right">
                    <img src={val.img} alt="" />
                  </div>
                </div>
              );
            })}
          </div>

          <button className="show-more">Show More Services</button>
        </section>
      </Layout>
    </>
  );
}

export default Home;
