import React from "react";

import Layout from "../Main Component/Layout";
import BreadCrumb from "../BreadCrumb/BreadCrumb";
import Sec_3 from "../Sections/Home/Sec_3";
import { BreadcrumbsItem } from "react-breadcrumbs-dynamic";
import { MetaTags } from "react-meta-tags";

import BgImg from "../Assets/bread-crumb-img.jpg";

function Gallary() {
  return (
    <>
      <MetaTags>
        <title>Nutrihub | Gallery </title>
        <meta name="Nutrihub" content="Nutrihub" />
      </MetaTags>
      <BreadcrumbsItem to={"/"}>Home</BreadcrumbsItem>
      <BreadcrumbsItem to={"/event"}>Gallery</BreadcrumbsItem>
      <Layout>
        <BreadCrumb BgImg={BgImg} name="Gallery" />

        <div className="home-content">
          <Sec_3 />
        </div>
      </Layout>
    </>
  );
}

export default Gallary;
