import Home from "../components/views/Home";
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router";

const routes = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/" element={<Home />} />
    </Route>
  )
);

export default routes;
