import { Outlet } from "react-router-dom";
function AppLayout() {
  return (
    <div className="mx-auto my-14 flex max-w-7xl flex-col items-start gap-16">
      <Outlet />
    </div>
  );
}

export default AppLayout;
