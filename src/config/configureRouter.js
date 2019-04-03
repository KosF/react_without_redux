import Home from "../pages/Home";
import Login from "../pages/Login";
import News from "../pages/News";
import Profile from "../pages/Profile";

module.exports = [
  {
    path: "/",
    component: Home,
    exact: true
  },
  {
    path: "/login",
    component: Login,
    exact: true
  },
  {
    path: "/news",
    component: News,
    exact: true
  },
  {
    path: "/profile",
    component: Profile,
    exact: true,
    private: true
  }
];
