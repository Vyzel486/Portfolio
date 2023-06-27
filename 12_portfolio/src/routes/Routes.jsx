import { Routes as RoutesWrapper, Route } from "react-router-dom";
import { mainRoutes } from "../routes/const";

const Routes = () => {
  const { Layout, routes } = mainRoutes;

  return (
    <RoutesWrapper>
      {routes.map(({ path, Component }) => (
        <Route
          key={path}
          path={path}
          element={
            <Layout>
              <Component />
            </Layout>
          }
        />
      ))}
    </RoutesWrapper>
  );
};

export default Routes;
