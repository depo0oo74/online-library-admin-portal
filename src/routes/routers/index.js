// ** import routes
import ViewsRoutes from "./views";
import AuthRoutes from "./auth";

// ** combine all routes
const routes = [...ViewsRoutes, ...AuthRoutes];

export default routes;
