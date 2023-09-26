import React from "react";
import Donation from "../../assets/donation.jpg"

const Banner = () => {
  return (
    <div
      className="hero h-[600px]"
      style={{backgroundImage: 'url(https://daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.jpg)'}}
    >
      <div className="hero-overlay bg-opacity-90"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="">
          <h1 className="mb-5 text-5xl font-bold text-black text-center w-full inline">
            I Grow By Helping People In Need
          </h1>
          <div className="form-control mt-5">
            <label className="input-group text-center">
              <input
                type="text"
                placeholder="Search here..."
                className="input input-bordered w-3/4"
              />
              <span className="bg-[#FF444A]">Search</span>
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
