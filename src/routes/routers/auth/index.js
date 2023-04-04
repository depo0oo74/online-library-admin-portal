// ** import pages
import Login from "../../../views/auth/index";

const AuthRoutes = [
  {
    path: "/login",
    component: <Login />,
    layout: "auth",
  },
];

export default AuthRoutes;
