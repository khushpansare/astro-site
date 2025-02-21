import React, { useEffect, useState } from "react";
import Layout from "../Main Component/Layout";
import { Link, useLocation } from "react-router-dom";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import axios from "axios";
import Category_wise_Product from "../Common/Category_wise_Product";
import { Divider } from "@mui/material";

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}>
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

function Product_Detail() {
  const [value, setValue] = useState(0);
  const [related_product, setRelatedProduct] = useState([]);
  const [product_det, setProductDet] = useState([]);
  const location = useLocation();
  const { state } = location;

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  useEffect(() => {
    const fetchProductDetails = async () => {
      try {
        const details = `catId=${
          state.product_details.cate_id
            ? state.product_details.cate_id
            : state.product_details.category_id
        }&productId=${state.product_details.product_id}`;
        const prod_det = `&productId=${state.product_details.product_id}`;
        // const prod_det = `&productId=4`;

        // Fetch product details
        const productRes = await axios.post(
          "https://nutrihubipl.com/admin/web-app/getProductDetail.php",
          prod_det
        );
        setProductDet(productRes.data.result);

        // Fetch related products
        const relatedRes = await axios.post(
          "https://nutrihubipl.com/admin/web-app/getRelatedProductList.php",
          details
        );
        setRelatedProduct(relatedRes.data.result);
      } catch (err) {
        console.error("Error fetching product data:", err);
      }
    };

    fetchProductDetails(); // Call the async function to fetch product details
  }, [state.product_details]);

  return (
    <Layout>
      <div className="product-detail">
        <h1 style={{ textAlign: "center" }}>
          {state.product_details.product_name}
        </h1>

        <div className="sec-1">
          <div className="img">
            <img src={state.product_details.product_img} alt="" />
          </div>
          <div className="right-side">
            <Box sx={{ width: "100%" }}>
              <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
                <Tabs
                  value={value}
                  onChange={handleChange}
                  variant="scrollable"
                  scrollButtons="auto"
                  aria-label="basic tabs example">
                  <Tab
                    label="Benifits"
                    {...a11yProps(0)}
                    sx={{
                      bgcolor: value === 0 ? "#032b71" : "transparent",
                      color: value === 0 ? "white !important" : "black",
                      borderTopRightRadius: "7px",
                      borderTopLeftRadius: "7px",
                      transition: "0.5s",
                    }}
                  />
                  <Tab
                    label="Analysis"
                    {...a11yProps(1)}
                    sx={{
                      bgcolor: value === 1 ? "#032b71" : "transparent",
                      color: value === 1 ? "white !important" : "black",
                      borderTopRightRadius: "7px",
                      borderTopLeftRadius: "7px",
                      transition: "0.5s",
                    }}
                  />
                  <Tab
                    label="Direction to Use"
                    {...a11yProps(2)}
                    sx={{
                      bgcolor: value === 2 ? "#032b71" : "transparent",
                      color: value === 2 ? "white !important" : "black",
                      borderTopRightRadius: "7px",
                      borderTopLeftRadius: "7px",
                      transition: "0.5s",
                    }}
                  />
                  <Tab
                    label="Description"
                    {...a11yProps(3)}
                    sx={{
                      bgcolor: value === 3 ? "#032b71" : "transparent",
                      color: value === 3 ? "white !important" : "black",
                      borderTopRightRadius: "7px",
                      borderTopLeftRadius: "7px",
                      transition: "0.5s",
                    }}
                  />
                </Tabs>
              </Box>
              <CustomTabPanel value={value} index={0}>
                <p> {product_det[0]?.pro_benefits} </p>
              </CustomTabPanel>
              <CustomTabPanel value={value} index={1}>
                <p> {product_det[0]?.pro_contain} </p>
              </CustomTabPanel>
              <CustomTabPanel value={value} index={2}>
                <p> {product_det[0]?.pro_direction_to_use} </p>
              </CustomTabPanel>
              <CustomTabPanel value={value} index={3}>
                <p> {product_det[0]?.product_discription} </p>
              </CustomTabPanel>
            </Box>
          </div>
        </div>

        <div className="sec-2">
          <div className="detail">
            <h2>Product Content</h2>
            <table className="content-table">
              <tbody>
                <tr>
                  <td className="data-key">Pricing</td>
                  <td>{product_det[0]?.pro_pricing}</td>
                </tr>
                <tr>
                  <td className="data-key">Spray</td>
                  <td> {product_det[0]?.pro_spray} </td>
                </tr>
                <tr>
                  <td className="data-key">Drip</td>
                  <td>{product_det[0]?.pro_drip}</td>
                </tr>
                <tr>
                  <td className="data-key">Pack Size</td>
                  <td>{product_det[0]?.pack_size}</td>
                </tr>
                <tr>
                  <td className="data-key">Stock Availability</td>
                  <td>{product_det[0]?.pro_stock_availability}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <Divider />
        <Category_wise_Product related_product={related_product} />
      </div>
    </Layout>
  );
}

export default Product_Detail;
