import { Route, Routes, Navigate } from "react-router-dom";
import Dashboard from "./components/dashboard";
import MainScreen from "./layouts/mainscreen/mainscreen";
const MainRoutes = () => (
  <Routes>
    <Route path="/" element={<MainScreen />}>
      <Route path="/" element={<Navigate replace to="dashboard" />}></Route>
      <Route path="/dashboard" element={<Dashboard />}></Route>
    </Route>
  </Routes>
);

export default MainRoutes;
