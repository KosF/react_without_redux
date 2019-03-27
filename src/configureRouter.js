import Home from "Pages/Home";
import Leads from "Pages/Leads";

module.exports = [
  {
    path: "/",
    component: Home,
    exact: true
  },
  {
    path: "/leads",
    component: Leads,
    exact: true
  }
];
