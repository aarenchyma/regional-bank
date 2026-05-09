import { Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import Home from "./pages/Home";
import Auth from "./pages/Auth";
import Profile from "./pages/Profile";
import Transfer from "./pages/Transfer";
import Cards from "./pages/Cards";
import History from "./pages/History";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Auth />} />
      <Route element={<Layout />}>
        <Route path="/welcome" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/transfer" element={<Transfer />} />
        <Route path="/cards" element={<Cards />} />
        <Route path="/history" element={<History />} />
      </Route>
    </Routes>
  );
}