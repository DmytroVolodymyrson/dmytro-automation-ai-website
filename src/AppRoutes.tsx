import { Route, Routes } from "react-router-dom";
import { appRoutes } from "./routes";

const AppRoutes = () => (
  <Routes>
    {appRoutes.map((route) => (
      <Route key={route.path} path={route.path} element={route.element} />
    ))}
  </Routes>
);

export default AppRoutes;
