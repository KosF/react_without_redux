import HomePage from "../pages/HomePage";
import LoginPage from "../pages/LoginPage";
import NewsPage from "../pages/NewsPage";
import ProfilePage from "../pages/ProfilePage";

module.exports = [
  {
    path: "/",
    component: HomePage,
    exact: true
  },
  {
    path: "/login",
    component: LoginPage,
    exact: true
  },
  {
    path: "/news",
    component: NewsPage,
    exact: true
  },
  {
    path: "/profile",
    component: ProfilePage,
    exact: true,
    private: true
  }
];
