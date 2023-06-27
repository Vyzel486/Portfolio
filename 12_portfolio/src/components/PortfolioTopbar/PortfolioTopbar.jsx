import { useState } from "react";
import { Link } from "react-router-dom";
import { HOME_ROUTE, topbarNavigationItems } from "../../routes/const";
import logo from "../../styles/images/logo.webp";
import "./PortfolioTopbar.scss";

const Topbar = () => {
  const [selectedNavItem, setSelectedNavItem] = useState(null);
  const [clicked, setClicked] = useState(null);

  const handleNavItemClick = (navItem) => {
    setSelectedNavItem(navItem);
  };

  const handleLogoClick = () => {
    setClicked(setSelectedNavItem);
  };

  return (
    <nav className={`topbar-container${clicked ? " logo-clicked" : ""}`}>
      <div>
        <Link to={HOME_ROUTE} onClick={handleLogoClick}>
          <img className="topbarLogo" src={logo} alt="RM logo" />
        </Link>
      </div>
      <div className="topbar-items">
        {topbarNavigationItems.map((navItem) => (
          <Link
            to={navItem.route}
            key={navItem.title}
            className={navItem === selectedNavItem ? "active" : ""}
            onClick={() => handleNavItemClick(navItem)}
          >
            {navItem.title}
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default Topbar;
