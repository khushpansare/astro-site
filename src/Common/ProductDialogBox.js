import React, { useEffect, useState } from "react";
import DialogContent from "@mui/material/DialogContent";
import axios from "axios";
import Category_wise_Product from "./Category_wise_Product";
import { Link } from "react-router-dom";

function ProductDialogBox({ data, categoryData }) {
  const [related_product, setRelatedProduct] = useState([]);

  useEffect(() => {
    // console.log("categoryData", categoryData);
    const fetchProductDetails = async () => {
      try {
        const details = `catId=${categoryData.id}&productId=${data.product_id}`;

        // Fetch related products
        const relatedRes = await axios.post(
          "https://nutrihubipl.com/admin/web-app/getRelatedProductList.php",
          details
        );
        // console.log(relatedRes);
        setRelatedProduct(relatedRes.data.result);
      } catch (err) {
        console.error("Error fetching product data:", err);
      }
    };

    fetchProductDetails(); // Call the async function to fetch product details
  }, []);

  return (
    <>
      <DialogContent
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
        }}>
        <div className="dialog-content">
          <div className="img">
            <img src={data.product_img} alt="" />
          </div>
          <h3>{data.product_name}</h3>
          <Link to={"/product-info"} state={{ product_details: data }}>
            View
          </Link>
        </div>
      </DialogContent>
      <Category_wise_Product related_product={related_product} />
    </>
  );
}

export default ProductDialogBox;
