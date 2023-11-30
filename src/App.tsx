import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Login from "./pages/Login";
import AppLayout from "./ui/AppLayout";
import Home from "./pages/Home";
import Store from "./pages/Store";

const router = createBrowserRouter([
  {
    path: "/login",
    element: <Login />,
  },
  {
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/store",
        element: <Store />,
      },
    ],
  },
]);
function App() {
  return <RouterProvider router={router} />;
}

export default App;
