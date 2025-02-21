import React from "react";

import Img_1 from "../../../Assets/home/product-categories/microbioal/AlgaFine.png";
import Img_2 from "../../../Assets/home/product-categories/microbioal/Aqua-cure.png";
import Img_3 from "../../../Assets/home/product-categories/microbioal/Gripper.png";
import Img_4 from "../../../Assets/home/product-categories/microbioal/soil-cure.png";

function MicroBioal() {
  return (
    <>
      <div className="card">
        <h4>Plant Bio stimulant</h4>
        <div className="product-duo">
          <div className="single-product">
            <img src={Img_1} alt="" /> <br />
            <p>AlgaFine</p>
          </div>
          <div className="single-product">
            <img src={Img_2} alt="" /> <br />
            <p>Aqua Cure</p>
          </div>
        </div>

        <div className="product-duo">
          <div className="single-product">
            <img src={Img_3} alt="" /> <br />
            <p>Gripper</p>
          </div>
          <div className="single-product">
            <img src={Img_4} alt="" /> <br />
            <p>Soil Cure</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default MicroBioal;
