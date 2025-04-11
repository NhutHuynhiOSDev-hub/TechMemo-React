import Login from "@/components/views/Login";
import Home from "../components/views/Home";
import {
  Route,
  Routes,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router";
import SignUp from "@/components/views/SignUp";

const routes = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<SignUp />} />
    </Route>
  )
);

export default routes;
