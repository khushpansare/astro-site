import React from "react";
import Layout from "../Main Component/Layout";
import { BreadcrumbsItem } from "react-breadcrumbs-dynamic";
import { MetaTags } from "react-meta-tags";
import BreadCrumb from "../BreadCrumb/BreadCrumb";

import Research_Image from "../Assets/blog/research-img.png";
import Videos from "../Common/Videos";

import BgImg from "../Assets/bread-crumb-img.jpg";

function Blog() {
  return (
    <>
      <MetaTags>
        <title>Nutrihub | Blog </title>
        <meta name="Nutrihub" content="Nutrihub" />
      </MetaTags>
      <BreadcrumbsItem to={"/"}>Home</BreadcrumbsItem>
      <BreadcrumbsItem to={"/event"}>Blog</BreadcrumbsItem>
      <Layout>
        <BreadCrumb BgImg={BgImg} name="Blog" />

        <div className="blog-content">
          <div className="sec-1">
            <div className="left">
              <h1>Research & Development</h1>

              <p>
                We have a state-of-the-art infrastructure for doing all
                activities. For this we have separate air handling unit
                supported R & D laboratory, preparation laboratories, production
                & packaging units. All these units are having inter- segregated
                areas with epoxy flooring systems that greatly support the
                efforts involved in maintaining a contaminant-free environment.
              </p>

              <p>
                We have separate DM water plant and RO water plant which provide
                mineral free water required for all these activities. Our
                advanced production technology includes imported and
                scientifically accepted equipments like SCADA
                software-controlled fermenters, lab scale and industrial-scale
                centrifuges, cooling centrifuges and spray dryers, phase
                contrast microscopes, stereo microscopes, UV Vis
                spectrophotometer, biosafety cabinets, automated HPLC and GC
                systems.
              </p>
            </div>

            <div className="right">
              <div className="img">
                <img src={Research_Image} alt="" />
              </div>
            </div>
          </div>
        </div>

        <Videos />
      </Layout>
    </>
  );
}

export default Blog;
