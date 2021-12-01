import Dashboard from "views/Dashboard.js";
import Notifications from "views/Notifications.js";
import Icons from "views/Icons.js";
import Typography from "views/Typography.js";
import TableList from "views/Tables.js";
import Project from "views/Project.js";
import UserPage from "views/User.js";
import UpgradeToPro from "views/Upgrade.js";

var routes = [
   // User Profile
  {
    path: "/user-page",
    name: "ประวัติส่วนตัว",
    icon: "nc-icon nc-single-02",
    component: UserPage,
    layout: "/admin",
  },
  // Dashboard
  {
    path: "/dashboard",
    name: "Dashboard",
    icon: "nc-icon nc-bank",
    component: Dashboard,
    layout: "/admin",
  },
  // Maps
    {
    path: "/Project",
    name: "Projects",
    icon: "nc-icon nc-pin-3",
    component: Project,
    layout: "/admin",
  },
  // Notifications
  {
    path: "/notifications",
    name: "ช่วยเหลือ",
    icon: "nc-icon nc-bell-55",
    component: Notifications,
    layout: "/admin",
  },
  // Table List
  // {
  //   path: "/tables",
  //   name: "Table List",
  //   icon: "nc-icon nc-tile-56",
  //   component: TableList,
  //   layout: "/admin",
  // },
  //Typography
  {
    path: "/typography",
    name: "ออกจากระบบ",
    icon: "nc-icon nc-caps-small",
    component: Typography,
    layout: "/admin",
  },
  // Icons
  {
    path: "/icons",
    name: "Icons",
    icon: "nc-icon nc-diamond",
    component: Icons,
    layout: "/admin",
  },
  // {
  //   pro: true,
  //   path: "/upgrade",
  //   name: "Upgrade to PRO",
  //   icon: "nc-icon nc-spaceship",
  //   component: UpgradeToPro,
  //   layout: "/admin",
  // },
];
export default routes;
