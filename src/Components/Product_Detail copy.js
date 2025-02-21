import React from "react";

import Layout from "../Main Component/Layout";
import Img from "../Assets/product/product-1.png";

function Product_Detail() {
  return (
    <>
      <Layout>
        <div className="product-detail">
          <div className="sec-1">
            <div className="img">
              <img src={Img} alt="" />
            </div>
            <div className="detail">
              <h1>Nitro-Cab</h1>
              <table className="content-table">
                <tbody>
                  <tr>
                    <td>Pricing</td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>Spray</td>
                    <td> 2.5 to 5 ml/Litre</td>
                  </tr>
                  <tr>
                    <td>Drip</td>
                    <td>1 to 2 Liter/Acre</td>
                  </tr>
                  <tr>
                    <td>Pack Size</td>
                    <td>250 Ml, 500 Ml, 1 Liter, 2 Liter</td>
                  </tr>
                  <tr>
                    <td>Stock Availability</td>
                    <td>AVAILABLE</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
}

export default Product_Detail;
