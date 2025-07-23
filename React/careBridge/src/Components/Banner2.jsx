import React from "react";
import { imgs } from "../assets/image";
const data = {
  row1: {
    img: imgs.Frame_25,
    desc: "Care Bridge Foundation's mission is to ensure that Arizona's low-income aging and/or disabled individuals receive the care they need and deserve throughout the Medicaid application process by providing advocacy, interim care subsidies, and placement assistance.",
  },
  row2: {
    img: imgs.Frame_26,
    title: "Our Purpose and Mission",
  },

  img: [imgs.Frame_25, imgs.Frame_26],
};
const Banner2 = () => {
  return (
    <section class="section3 mt-5 mt-md-10 w-100 bg-violet">
      <div class="container row mx-auto w-100" id="container">
        {/* <!-- Left Column --> */}
        <div class="col-xl-7 col-md-6 order-1 order-md-0 row1 mb-1">
          {/* <!-- Small screen images stacked with gap --> */}
          <div class="d-block d-md-none d-flex flex-column gap-3 mt-5">
            {data.img.map((item, index) => (
              <img src={item} key={index} class="w-100" alt="" />
            ))}
          </div>

          {/* <!-- Desktop image --> */}
          {data.row1 && (
            <>
              <img
                src={data.row1.img}
                id="img"
                class="pb-md-2 pt-5 d-none d-md-block mt-n1"
                alt=""
              />

              <p class="fs-6 text-white font-lora">{data.row1.desc}</p>
            </>
          )}
        </div>

        {/* <!-- Right Column --> */}
        <div class="col-xl-5 col-md-6 mb">
          {data.row2 && (
            <>
              <h2 class="fs-1 text-white mt-5 font-Raleway">
                {data.row2.title}
              </h2>

              {/* <!-- Desktop image --> */}
              <img
                src={data.row2.img}
                id="img"
                class="d-md-block d-none mb-n1"
                alt="not-loaded"
              />
            </>
          )}
        </div>
      </div>
    </section>
  );
};

export default Banner2;
