import { Link } from "react-router-dom";
import * as Home from '../../module-home';


const NotFound = () => (
    <div>
        <h1>404</h1>
        <p>Page not found</p>
        <Link to={Home.Routes.Index.path}>Home</Link>
    </div>
);

export default NotFound;