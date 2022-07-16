import { Routes, Route } from "react-router-dom";
import Crew from "../screens/Crew";
import Destination from "../screens/Destination";
import { Home } from "../screens/Home";
import Technology from "../screens/Technology";

export const MyRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/crew" element={<Crew />} />
      <Route path="/destination" element={<Destination />} />
      <Route path="/technology" element={<Technology />} />
    </Routes>
  );
};
