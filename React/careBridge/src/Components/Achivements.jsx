import React from 'react'

export const Achivements = () => {
  return (
    
    <section className="section3 container w-100 mt-5 mt-lg-5 py-5">
      <div className="row bg-gray align-items-center" id='achievements' style={{ marginTop: "4rem" }}>
        <div className="col-lg-4 col-md-12 col-12">
          <h2 className="text-violet fw-bolder fs-1 py-2 font-Raleway">
            Our Achievements in Numbers
          </h2>
          <p className="font-lora">
            Our dedication and hard work are reflected in these milestones.
            We're continuously growing and making a difference in more lives
            every day.
          </p>
        </div>
        <div className="col-md-12 col-lg-5 col-12">
          <div className="right-cont">
            <div className="datas-wrapper">
              <div className="data top-left">
                <span className="number text-violet">200K+</span>
                <p className="font-lora">Families Assisted</p>
              </div>
              <div className="data top-right">
                <span className="number text-pink">150K+</span>
                <p className="font-lora">Families Assisted</p>
              </div>
              <div className="data bottom-left">
                <span className="number text-success">75K+</span>
                <p className="font-lora">Care Subsidies Distributed</p>
              </div>
              <div className="data bottom-right">
                <span className="number text-primary">10K+</span>
                <p className="font-lora">Hours of Support Provided</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

  )
}

