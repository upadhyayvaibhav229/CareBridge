import React from "react";
import { imgs } from "../assets/image";
import Button from "react-bootstrap/esm/Button";

const data = [
  {
    no: "100",
    desc: "Number of Resources For Assistance Received Monthly",
    color: "bg-primary",
  },
  {
    no: "67",
    desc: "Number of Pro Bond Care Placement Made Monthly",
    color: "bg-success",
  },
  {
    no: "804",
    desc: "Number of Pro Bond Care Placement Made Annually",
    color: "bg-danger",
  },
];

export const Hero = () => {
  return (
    <section className="section1 gap-4">
      <div className="container">
        <div className="row align-items-center">
          <div className="content1 col-lg-7 order-2 order-lg-1">
            <h1 className="fs-1 text-violet fw-bold">
              Guiding Arizona Residents
              <span className="d-inline d-md-block">
                {" "}
                to Access Quality Care
              </span>
              <span className="d-inline d-md-block">and Support</span>
            </h1>
            <p>
              Advocating for Arizona’s low-income aging and disabled individuals
              by
              <span className="d-inline d-md-block">
                providing Medicaid support, interim care subsidies, and
                personalized
              </span>
              <span className="d-inline d-md-block">
                assistance to ensure access to essential services.
              </span>
            </p>
            <Button
              type="button"
              className="px-4 py-2 rounded border-0 btn-primary"
            >
              Contact Us
            </Button>
          </div>
          {/* <!-- Image column --> */}
          <div className="col-lg-5 col-sm-7 order-1 order-lg-2 ms-0">
            <img src={imgs.Hero} className="img-fluid" alt="" />
          </div>
        </div>

        <div className="box row mt-2 mt-lg-0">
          {data.map((item, index) => (
            <div
              className={`col-lg-4 col-sm-6 pb-2 pb-lg-0 ${
                index === data.length - 1 ? "ms-sm-0" : ""
              }`}
              key={index}
            >
              <div className={`${item.color} p-4 d-flex flex-column gap-2 `}>
                <div className="text-start ms-0">
                  <span className="fs-1 fw-bold text-white bg-violet rounded-circle px-3 py-3">
                    {item.no}
                  </span>
                </div>
                <p className="text-white text-left fw-semibold fs-4 ms-0 font-lora">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
