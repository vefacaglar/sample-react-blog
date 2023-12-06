import { Link } from "react-router-dom";

const NotFound = () => {
    return ( <div className="not-found">
        <h2>sorry</h2>
        <p>this page cannot be found</p>
        <Link to="/">back to the home page</Link>
    </div> );
}
 
export default NotFound;