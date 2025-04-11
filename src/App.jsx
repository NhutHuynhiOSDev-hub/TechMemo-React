import routes from "./router";
import { RouterProvider } from "react-router";

function App() {
  return (
    <div>
      <RouterProvider router={routes} />
    </div>
  );
}

export default App;
