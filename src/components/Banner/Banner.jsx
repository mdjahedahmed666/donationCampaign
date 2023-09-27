import React, { useState } from "react";

const Banner = ({setSearch}) => {
  const [searchValue, setSearchValue] = useState();
  const handleSearch = ()=>{
setSearch(searchValue); 
setSearchValue(''); 
  }
  const handleChange = (e)=>{
    setSearchValue(e.target.value);
  }
  
  return (
    <div
      className="hero h-[400px] md:h-[600px] bg-contain"
      style={{backgroundImage: 'url(https://i.ibb.co/NsDLNKN/78864487-group-of-volunteer-people-donate-stuff-for-charity.jpg)'}}
    >
      <div className="hero-overlay bg-white bg-opacity-90"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="">
          <h1 className="mb-5 text-2xl lg:text-5xl font-bold text-black text-center w-full inline">
            I Grow By Helping People In Need
          </h1>
          <div className="form-control mt-5">
            <label className="input-group text-center">
              <input
              value={searchValue}
              onChange={handleChange}
                type="text"
                placeholder="Search here..."
                className="input input-bordered w-3/4"
              />
              <button onClick={handleSearch} className="bg-[#FF444A] w-20">Search</button>
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
