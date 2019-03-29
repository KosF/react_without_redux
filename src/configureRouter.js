import Home from "Pages/Home";
import Login from "Pages/Login";
import News from "Pages/News";
import Profile from "Pages/Profile";

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
    exact: true
  }
];
