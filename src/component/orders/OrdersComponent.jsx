import { Link, Outlet } from "react-router-dom";

export function OrdersComponent() {
  return (
    <div>
      <Link to="/Orders/1">Order 1</Link> <br />
      <Link to="/Orders/2">Order 2</Link> <br />
      <Outlet />
    </div>
  );
}
