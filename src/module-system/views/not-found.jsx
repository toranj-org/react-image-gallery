import { Link } from "react-router-dom";
import * as Home from '../../module-home';

const NotFound = () => (
    <section className="page-404-root">
        <div className="page-404-container">
            <h1 className="page-404-header">404</h1>
            <img className="page-404-image" src="https://cdn.dribbble.com/users/285475/screenshots/2083086/dribbble_1.gif" alt="" />
            <div className="page-404-footer">
                <h3 className="h2">Look like you're lost</h3>
                <p>the page you are looking for not avaible!</p>
                <Link to={Home.Routes.Index.path}>Go to Home</Link>
            </div>
        </div>
    </section>
);

export default NotFound;