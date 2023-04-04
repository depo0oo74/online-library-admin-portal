// ** import pages
import Dashboard from "../../../views/dashboard/index";
import Sliders from "../../../views/sliders/index";
import Sections from "../../../views/sections/index";
import Faqs from "../../../views/faqs/index";
import Goals from "../../../views/goals/index";
import Messages from "../../../views/messages/index";
import Users from "../../../views/users/index";
import PrivacyPolicies from "../../../views/privacy-policies/index";
import PublishingHouses from "../../../views/publising-houses/index";

const ViewsRoutes = [
  {
    path: "/",
    component: <Dashboard />,
    layout: "default",
  },
  {
    path: "/sliders",
    component: <Sliders />,
    layout: "default",
  },
  {
    path: "/sections",
    component: <Sections />,
    layout: "default",
  },
  {
    path: "/faqs",
    component: <Faqs />,
    layout: "default",
  },
  {
    path: "/goals",
    component: <Goals />,
    layout: "default",
  },
  {
    path: "/messages",
    component: <Messages />,
    layout: "default",
  },
  {
    path: "/users",
    component: <Users />,
    layout: "default",
  },
  {
    path: "/policies",
    component: <PrivacyPolicies />,
    layout: "default",
  },
  {
    path: "/publishing-houses",
    component: <PublishingHouses />,
    layout: "default",
  },
];

export default ViewsRoutes;
