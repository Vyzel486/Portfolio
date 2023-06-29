import PortfolioTopbar from "../components/PortfolioTopbar/PortfolioTopbar";
import "./Layout.scss";

const MainLayout = ({ children }) => {
  return (
    <div className="mainLayout-container">
      <PortfolioTopbar />
      <div>{children}</div>
    </div>
  );
};

export default MainLayout;
