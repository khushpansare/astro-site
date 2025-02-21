import axios from "axios";
import React, { useEffect, useState } from "react";

import { NavLink } from "react-router-dom";
import { Route, Routes, Outlet } from "react-router-dom";
import ProductDialogBox from "../../Common/ProductDialogBox";
import { Dialog } from "@mui/material";

// Import nutrient images

function Sec_2() {
  const [productData, setProductData] = useState([]);

  useEffect(() => {
    axios
      .get(
        "https://nutrihubipl.com/admin/web-app/getCategoryWithProductlist.php"
      )
      .then((res) => {
        // console.log(res.data.result);
        setProductData(res.data.result);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const [open, setOpen] = useState(false);
  const [data, setData] = useState({});
  const [categoryData, setCategoryData] = useState({});

  const handleClickOpen = (val, sub_val) => {
    setOpen(true);
    setData(sub_val);
    setCategoryData(val);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <div className="sec-2">
        <h1>Product Categories</h1>

        <div className="card-container">
          {productData.map((val, i) => {
            return (
              <div className="card">
                <h4>{val.value}</h4>
                <div className="product-duo">
                  {val.product_list.map((sub_val, i) => (
                    <div
                      className="single-product"
                      onClick={() => handleClickOpen(val, sub_val)}>
                      <img src={sub_val.product_img} alt="" /> <br />
                      <p>{sub_val.product_name}</p>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
        // height="100"
        style={{
          width: "100%",
          display: "block",
          position: "relative",
          left: "50%",
          transform: "translateX(-50%)",
          overflow: "hidden",
          height: "70px",
          backgroundColor: "#f5f1ed",
        }}>
        <path
          className="elementor-shape-fill"
          style={{ fill: "#fff" }}
          d="M 0 0 L0 100 L100 100 L100 0 Q 50 200 0 0"></path>
      </svg>

      <Dialog open={open} onClose={handleClose}>
        <ProductDialogBox data={data} categoryData={categoryData} />
      </Dialog>
    </>
  );
}

export default Sec_2;
