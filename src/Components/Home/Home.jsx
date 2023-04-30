import React from "react";
import "./home.scss";
import video from "../../Assets/video.mp4";
import { GrLocation } from "react-icons/gr";
import { HiFilter } from "react-icons/hi";
import { FiFacebook } from "react-icons/fi";
import { AiOutlineInstagram } from "react-icons/ai";
import { SiTripadvisor } from "react-icons/si";
import { BsListTask } from "react-icons/bs";
import { TbApps } from "react-icons/tb";
import { useEffect } from "react";

import Aos from "aos";
import "aos/dist/aos.css";


const Home = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 })
  }, [])


  return (
    <section className="home">
      <div className="overlay"></div>
      <video src={video} muted autoPlay loop typeof="video/mp4"></video>

      <div className="homeContent container">
        <div className="textDiv">
          <span data-aos="fade-up" className="smallText">
            Our Packages
          </span>
          <h1 data-aos="fade-up" className="homeTitle">
            Search your holiday
          </h1>

          <div data-aos="fade-up" className="cardDiv">
            <div className="destinationInput">
              <div className="searchCity">
                <label htmlFor="city" >
                  Search your desitination
                </label>
                <div className="input flex">
                  <input type="text" placeholder="Enter name here..."></input>
                  <GrLocation className="icon" />
                </div>
              </div>

              <div className="dateInput">
                <label htmlFor="date" >
                  Enter date
                </label>
                <div className="input flex">
                  <input type="date" placeholder="Enter date here..."></input>
                </div>
              </div>

              <div className="priceInput">
                <div className="label_total flex">
                  <label htmlFor="price" >
                    Max price:
                  </label>
                  <h3 className="total">$5000</h3>
                </div>
                <div className="input flex">
                  <input type="range" max='5000' min='1000' />
                </div>
              </div>
              <div className='searchOptions flex'>
                <HiFilter className="icon" />
                <span>More Filter</span>
              </div>
            </div>
          </div>

          <div data-aos="fade-up" className="homeFooterIcons flex">
            <div className="rightIcons">
              <FiFacebook className='icon' />
              <AiOutlineInstagram className='icon' />
              <SiTripadvisor className="icon" />
            </div>
            <div className="leftIcons">
              <BsListTask className='icon' />
              <TbApps className='icon' />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
