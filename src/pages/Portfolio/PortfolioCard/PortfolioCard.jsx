import { useState, useEffect } from "react";
import carImage from "../../../styles/images/cardImage.jpg";
import "./PortfolioCard.scss";

const PortfolioCard = ({ onClick }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    setIsTransitioning(true);

    const transitionTimeout = setTimeout(() => {
      setIsTransitioning(false);
    }, 1000);

    return () => {
      clearTimeout(transitionTimeout);
    };
  }, [isHovered]);

  return (
    <div
      className="portfoliocard"
      isHovered={isHovered}
      isTransitioning={isTransitioning}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={onClick}
    >
      <img className="cardImage" src={carImage} alt="" />
      <div className="cardDescription">
        <h4>This was an HTML/CSS thesis assignment</h4>
      </div>
    </div>
  );
};

export default PortfolioCard;
