import { Outlet } from "react-router-dom";
import "../styles/admin.scss";

export default function AdminLayout() {
  return (
    <div className="admin-layout">
      {/* 어드민용 헤더나 사이드바가 들어갈 자리 */}
      <main>
        <Outlet />
      </main>
    </div>
  );
}
