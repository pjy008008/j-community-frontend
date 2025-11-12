import { createBrowserRouter } from "react-router-dom";
import MainLayout from "./components/layout/MainLayout";

import HomePage from "./pages/HomePage";
import PostDetailPage from "./pages/PostDetailPage";
import CreatePostPage from "./pages/CreatePostPage";
import NotFoundPage from "./pages/NotFoundPage";
import Auth from "./pages/Auth";
import Communities from "./pages/Communities";
import Messages from "./pages/Messages";
import SubLayout from "./components/layout/SubLayout";
import Profile from "./pages/Profile";
import Settings from "./pages/Settings";
import Trending from "./pages/Trending";
import Explore from "./pages/Explore";
import Notifications from "./pages/Notifications";
import CommunityDetail from "./pages/CommunityDetail";

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
      {
        path: "trending",
        element: <Trending />,
      },
      {
        path: "explore",
        element: <Explore />,
      },
      {
        path: "notifications",
        element: <Notifications />,
      },
    ],
  },
  {
    path: "/",
    element: <SubLayout />,
    children: [
      {
        path: "messages",
        element: <Messages />,
      },
      {
        path: "profile",
        element: <Profile />,
      },
      {
        path: "settings",
        element: <Settings />,
      },
      {
        path: "community/:id",
        element: <CommunityDetail />,
      },
    ],
  },
  {
    path: "/auth",
    element: <Auth />,
  },
  {
    path: "/communities",
    element: <Communities />,
  },
  {
    path: "*",
    element: <NotFoundPage />,
  },
]);
