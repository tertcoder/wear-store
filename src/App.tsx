import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import AppLayout from "./ui/AppLayout";
import Home from "./pages/Home";
import Store from "./pages/Store";
import AuthLayout from "./ui/AuthLayout";
import Login from "./features/authentication/Login";
import Signup from "./features/authentication/Signup";
import { Provider } from "react-redux";
import { store } from "./store/store";
import ShoesDetails from "./features/ShoesDetails";
import ErrorFallback from "./ui/ErrorFallback";

const router = createBrowserRouter([
  {
    element: <AuthLayout />,
    children: [
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/signup",
        element: <Signup />,
      },
    ],
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
      {
        path: "/store/:shoeId",
        element: <ShoesDetails />,
      },
      {
        path: "*",
        element: <ErrorFallback />,
      },
    ],
  },
]);
const queryClient = new QueryClient();
function App() {
  return (
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <ReactQueryDevtools initialIsOpen />
        <RouterProvider router={router} />
      </QueryClientProvider>
    </Provider>
  );
}

export default App;
