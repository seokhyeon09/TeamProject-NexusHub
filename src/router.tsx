import { createBrowserRouter } from "react-router-dom";
import PublicLayout from "./page/PublicLayout";
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
  // 추후 AdminLayout 및 ProtectedRoute를 사용하는 /admin 라우트도 여기에 추가합니다.
]);

