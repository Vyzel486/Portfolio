import { useEffect } from "react";
import ball from "../../styles/images/ball.webp";
import frontend from "../../styles/images/FrontDesign.png";
import frontvsend from "../../styles/images/frontvsbackend.png";
import gruppe from "../../styles/images/Gruppe.png";
import web from "../../styles/images/webdesign.jpg";
import dreamer from "../../styles/images/dreamer.webp";
import programmer from "../../styles/images/programmer.jpg";
import "./About.scss";

const About = () => {
  useEffect(() => {
    setTimeout(() => {
      document.querySelector(".about-container").classList.add("animate-in");
      document.querySelector(".programmingWay").classList.add("animate-in");
      document.querySelector(".present").classList.add("animate-in");
    }, 0.1);
  }, []);

  return (
    <div>
      <div className="about-container">
        <div className="about-description">
          <h1>about</h1>
          <h2>I am a beginner FRONT-END developer from Vilnius, Lithuania</h2>
          <p>
            From 2018 I decided to be a programmer, I liked it a lot interesting
            things can be learned in the design and functionality of a website.
          </p>
          <div className="about-description-images">
            <img src={frontend} alt="" />
            <img src={frontvsend} alt="" />
            <img src={gruppe} alt="" />
            <img src={web} alt="" />
          </div>
        </div>
        <div className="main-image-container">
          <img src={ball} alt="" className="main-image" />
        </div>
      </div>
      <div className="programmingWay">
        <div className="programmingWay-imageContainer">
          <img src={dreamer} alt="" className="programmingWay-image" />
        </div>
        <div className="programmingWay-description">
          <h2>The way of thinking towards programming</h2>
          <p>
            I started thinking about programming five years ago, when my
            youngest cousin had started to take his first steps in this field.
            He showed me his first works and I was impressed. I thought that I
            also wanted to create like that. Since then, I kept dreaming about
            it.
          </p>
        </div>
      </div>
      <div className="present">
        <div className="present-description">
          <h2>The present</h2>
          <p>
            Dreams can come true, you just have to want it :) And here it is - I
            am already working on my first projects, which you can see here.
            Please don't criticize too much because these are my first steps in
            programming. I, like a small child, am still exploring everything
            and trying to absorb and understand this new and unseen world for me
            :) I know that this is only the beginning, and there are many more
            interesting things waiting for me in the future.
          </p>
        </div>
        <div className="present-imageContainer">
          <img src={programmer} alt="" className="present-image" />
        </div>
      </div>
    </div>
  );
};

export default About;
