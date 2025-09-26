import React from "react";
import { imgs } from "../assets/image";
import "./style.css";
const data = {
  img: [imgs.Frame_16, imgs.Frame_17],
  title: "How Care Bridge Foundation Can Help ",
  desc: "If you or a loved one are in need of financial assistance for elderly care in Tucson or need assistance submitting an application for ALTCS, the Care Bridge Foundation can help. The foundation’s mission is to ensure that Arizona’s low-income aging and/or disabled individuals receive the care they need and deserve throughout the Medicaid application process by providing advocacy, interim care subsidies, and placement assistance.",
  subpoints1: [
    "Financial Assistance", 
    "Medicaid Advocacy"
],
  subpoints2: [

    "Care Subsidies",
    "Placement Support"
],
};
const Banner1 = () => {
    
  return (
    <div className="bg-gray w-100 mt-4 mt-lg-5 py-5">
      <div className="container">
        <div className="row align-items-center gy-5">
          <div className="col-12 col-md-12 col-lg-6 d-flex flex-row flex gap-3 justify-content-center align-items-start">
            <img
              src={data.img[0]}
              className="img-fluid"
              style={{ width: "48%", maxWidth: "280px" }}
              alt="Image 1" 
            />
            <img
              src={data.img[1]}
              className="img-fluid pt-3"
              style={{ width: "48%", maxWidth: "280px" }}
              alt="Image 2"
            />
          </div>

          {/* <!-- Content --> */}
          <div className="content col-12 col-md-12 col-lg-6">
            <h2 className="mb-4 fs-lg-60 fs-1 text-violet fw-bold text-md-start font-Raleway">
              {data.title}
             
            </h2>
            <p className="fs-6 text-md-start px-2 px-md-0 font-lora">
              {data.desc}
            </p>
            <div className="assistance mt-5 py-3 font-lora">
              <div className="row1 d-flex flex-wrap justify-content-center">
                {data.subpoints1.map((item, index) => (
                  <p className={`icon ms-5 ms-md-5 font-lora ${index === data.subpoints1.length - 1 ? "ms-lg-3 ms-sm-3 " : ""}`} key={index}>
                    {item}
                  </p>
                  
                ))}
              </div>
              <div className="row2 d-flex flex-wrap justify-content-center">
                {data.subpoints2.map((item, index) => (
                  <p className="icon ms-5 ms-md-5 font-lora " key={index}>
                    {item}
                  </p>
                  
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner1;
