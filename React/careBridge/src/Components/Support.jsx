import React from "react";

const data = {
  title: "Support or Seek Help \n We're Here for You",
  desc: "Whether you’re looking to make an impact or need support, we’re here\n to guide you every step of the way with care and dedication.",
};

const buttons = [
  {
    title: "Request Assistance",
    className: "btn btn-primary px-4 py-2",
  },
  {
    title: "Donate",
    className: "btn btn-outline-light  px-5 py-2 mt-3 mt-md-0",
  },
];

export const Support = () => {
  return (
    <section className="mt-5 py- p-1" id="Donate">
      <div className="container bg-violet d-flex flex-column py-5 rounded gap-3">
        <h2 className="text-white text-center fs-1 fw-bold lh-1 font-Raleway">
          {data.title.split("\n").map((line, index) => (
            <div key={index}>{line}</div>
          ))}
        </h2>

        <p className="text-white text-center font-lora fs-5 lh-2 ">
          {data.desc.split("\n").map((line, index) => (
            <div key={index}>{line}</div>
          ))}
        </p>
        <div className="d-flex flex-md-row gap-2 flex-column justify-content-center">
          {buttons.map((item, index) => (
            <button key={index} className={item.className}>
              {item.title}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};
