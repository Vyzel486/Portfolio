import { useEffect } from "react";
import portfolioImage from "../../styles/images/portfolio.png";
import PortfolioCard from "./PortfolioCard/PortfolioCard";
import "./Portfolio.scss";

const Portfolio = () => {
  const handlePortfolioCardClick = () => {
    window.open("https://github.com/Vyzel486/HTML-ir-CSS-exam.git", "_blank");
  };

  useEffect(() => {
    setTimeout(() => {
      document.querySelector(".portfolioHero").classList.add("animate-in");
    }, 0.1);
  }, []);

  return (
    <div className="portfolioWrapper">
      <div className="portfolioHero">
        <div className="heroTitle">
          <h1>portfolio</h1>
          <h2>Check out some of my recent work.</h2>
          <p>
            I did these works while studying at CodeAcademy and working in my
            free time
          </p>
        </div>
        <div className="heroImageWrapper">
          <img src={portfolioImage} alt="#" />
        </div>
      </div>
      <div className="cardWrapper">
        <PortfolioCard onClick={handlePortfolioCardClick} />
      </div>
    </div>
  );
};

export default Portfolio;
