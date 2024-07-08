import React from "react";

function Cards({ data }) {
  return (
    <div className="cards flex flex-wrap gap-6 items-center h-full w-full mt-5 justify-between">
      {data.map((item, index) => (
        <div className="card" key={index}>
          <div className={`top-section`} style={{ backgroundImage: `url(${item.img})` }}>
            <div className="border1"></div>
            <div className="icons">
              <div className="logo">
                <h6 className="text-nowrap absolute top-0 font-mono">{item.title}</h6>
              </div>
            </div>
          </div>
          <div className="bottom-section">
            <span className="title font-mono tracking-tight">{item.data}</span>
            <div className="row row1 max-sm:flex-col">
              <div className="item">
                <span className="big-text">Created Date</span>
                <span className="regular-text ">27/3/2024 10/4/2024</span>
              </div>
              <div className="item">
                <a href={item.code}>
                  <span className="big-text text-nowrap">Source Code</span>
                  <span className="regular-text">Free for use</span>
                </a>
              </div>
              <div className="item">
                <a href={item.live}>
                  <span className="big-text text-nowrap">Live Website</span>
                  <span className="regular-text">Visit now</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Cards;
