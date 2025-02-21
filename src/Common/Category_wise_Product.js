import React from "react";
import { Link } from "react-router-dom";

function Category_wise_Product({ related_product }) {
  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}>
        <h3
          style={{
            textAlign: "center",
            marginTop: "25px !important",
            letterSpacing: "2px",
            backgroundColor: "#032b71",
            padding: "4px 20px",
            color: "#fff",
            borderRadius: "5px",
          }}>
          Related Product
        </h3>
      </div>
      <div className="relatable-product">
        {related_product &&
          related_product.map((val, i) => (
            <div className="single-product" key={i}>
              <div className="img">
                <img src={val.product_img} alt="" />
              </div>
              <h3>{val.product_name}</h3>
              <Link to={"/product-info"} state={{ product_details: val }}>
                View
              </Link>
            </div>
          ))}
      </div>
    </>
  );
}

export default Category_wise_Product;
