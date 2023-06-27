import PortfolioTopbar from "../components/PortfolioTopbar/PortfolioTopbar";

const MainLayout = ({ children }) => {
  return (
    <div className="mainLayout-container">
      <PortfolioTopbar />
      <div>{children}</div>
    </div>
  );
};

export default MainLayout;
