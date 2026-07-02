import { Outlet } from "react-router-dom";
import AdminHeader from "../components/AdminHeader";
import AdminSidebar from "../components/AdminSidebar";
import "../styles/admin.scss";

export default function AdminLayout() {
  return (
    <div className="admin-layout">
      <AdminHeader />
      <div className="admin-body">
        <AdminSidebar />
        <main className="admin-content">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
