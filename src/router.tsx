import { createBrowserRouter } from "react-router-dom";
import MainLayout from "./components/layout/MainLayout";

import HomePage from "./pages/HomePage";
import PostDetailPage from "./pages/PostDetailPage";
import CreatePostPage from "./pages/CreatePostPage";
import NotFoundPage from "./pages/NotFoundPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "post/:postId",
        element: <PostDetailPage />,
      },
      {
        path: "submit",
        element: <CreatePostPage />,
      },
    ],
  },
  {
    // 레이아웃이 필요 없는 별도 페이지 (예: 로그인, 회원가입)
    // path: "/login",
    // element: <LoginPage />,
  },
  {
    path: "*",
    element: <NotFoundPage />,
  },
]);