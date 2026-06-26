import { createBrowserRouter } from "react-router-dom";
import PublicLayout from "./page/PublicLayout";
import AdminLayout from "./page/AdminLayout";
import Home from "./page/publicpage/Home";
import Tracking from "./page/publicpage/Tracking";
import Pickup from "./page/publicpage/Pickup";
import Recruit from "./page/publicpage/Recruit";
import Support from "./page/publicpage/Support";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <PublicLayout />,
    children: [
      { index: true, element: <Home /> },
      { path: "tracking", element: <Tracking /> },
      { path: "pickup", element: <Pickup /> },
      { path: "recruit", element: <Recruit /> },
      { path: "support", element: <Support /> },
    ],
  },
  {
    path: "/admin",
    element: <AdminLayout />,
    children: [
      // 어드민 하위 페이지들이 여기에 추가됩니다.
    ],
  },
]);

