import { Routes, Route } from "react-router";
import Home from "./pages/Home";
import Auth from "./pages/Auth"

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/regional-bank" element={<Home />} />
      <Route path="/" element={<Auth />} />
    </Routes>
  )
}


