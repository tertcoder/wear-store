import { Outlet } from "react-router-dom";
import Header from "./Header";
function AppLayout() {
  return (
    <div className="mx-auto my-14 flex max-w-7xl flex-col items-start gap-16">
      <Header />
      <Outlet />
    </div>
  );
}

export default AppLayout;
