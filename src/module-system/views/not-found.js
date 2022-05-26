import { Link } from "react-router-dom";
import { routeUtils } from "../../utils";
import * as Home from '../../module-home';


const NotFound = () => (
    <div>
        <h1>404</h1>
        <p>Page not found</p>
        <Link to={routeUtils.buildRoute(Home.Routes.Home)}>Home</Link>
    </div>
);

export default NotFound;