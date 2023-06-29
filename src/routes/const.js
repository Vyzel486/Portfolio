import Home from "../pages/Home/Home";
import About from "../pages/About/About";
import Portfolio from "../pages/Portfolio/Portfolio";
import Contact from "../pages/Contact/Contact";
import MainLayout from "../layouts/MainLayout";

export const HOME_ROUTE = "/";
export const ABOUT_ROUTE = "/about";
export const PORTFOLIO_ROUTE = "/portfolio";
export const CONTACT_ROUTE = "/contact";

export const mainRoutes = {
  Layout: MainLayout,
  routes: [
    {
      path: HOME_ROUTE,
      Component: Home,
    },
    {
      path: ABOUT_ROUTE,
      Component: About,
    },
    {
      path: PORTFOLIO_ROUTE,
      Component: Portfolio,
    },
    {
      path: CONTACT_ROUTE,
      Component: Contact,
    },
  ],
};

export const topbarNavigationItems = [
  { route: ABOUT_ROUTE, title: "about" },
  { route: PORTFOLIO_ROUTE, title: "portfolio" },
  { route: CONTACT_ROUTE, title: "contacts" },
];
