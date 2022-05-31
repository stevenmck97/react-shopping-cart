import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <ul>
            <Link to="/">Home</Link>
            <Link to="/GameShop">GameShop</Link>
            {/* <Link to="/Cart"></Link> */}
        </ul>
    );
};

export default Navbar;
