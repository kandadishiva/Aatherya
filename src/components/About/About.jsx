import React,{ useContext }  from 'react'
import './About.css'
import Card from "../Card/Card";
import HeartEmoji from "../../static/Images/heartemoji.png";
import Glasses from "../../static/Images/glasses.png";
import Humble from "../../static/Images/humble.png";
import founder1 from "../../static/Images/profile1.jpg";
import founder2 from "../../static/Images/profile2.jpg";
import founder3 from "../../static/Images/profile3.jpg";
import founder4 from "../../static/Images/profile4.jpg";
import founder5 from "../../static/Images/profile5.jpg";
import { themeContext } from "../../Context";
import { motion } from "framer-motion";

export const About = () => {
  // context
  // transition
  const transition = {
    duration: 1,
    type: "spring",
  };

  return (
    <div className="services">
      {/* left side */}
      <div className="awesome">
        
        <span>Aathreya Trust</span>
        <span>Founders</span>
        <span>
          Lorem ispum is simpley dummy text of printing of printing Lorem
          <br />
          ispum is simpley dummy text of printing
        </span>
        <a>
          <button className="button s-button">Know more</button>
        </a>
        <div className="blur s-blur1" style={{ background: "#ABF1FF94" }}></div>
      </div>
      {/* right */}
      <div className="cards">
        {/* first card */}
        <motion.div
          initial={{ left: "30rem" }}
          whileInView={{ left: "23rem" }}
          transition={transition}
        >
          <Card
            emoji={founder1}
            heading={"Founder"}
            detail={"Good person with good heart and good mind"}
          />
        </motion.div>
        {/* second card */}
        <motion.div
          initial={{ left: "-11rem", top: "12rem" }}
          whileInView={{ left: "0rem" }}
          transition={transition}
        >
          <Card
            emoji={founder2}
            heading={"Co-Founder"}
            detail={"Good person with good heart and good mind"}
          />
        </motion.div>
        {/* 3rd */}
        <motion.div
          initial={{ top: "22rem", left: "25rem" }}
          whileInView={{ left: "20rem" }}
          transition={transition}
        >
          <Card
            emoji={founder3}
            heading={"Co-Founder"}
            detail={
              "Good person with good heart and good mind"
            }
            color="rgba(252, 166, 31, 0.45)"
          />
        </motion.div>
        <div
          className="blur s-blur2"
          style={{ background: "var(--purple)" }}
        ></div>
      </div>
    </div>
  );
}

export default About;