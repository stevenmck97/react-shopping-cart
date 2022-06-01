import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <ul>
            <li>
                <Link to="/">Home</Link>
            </li>
            <li>
                {" "}
                <Link to="/GameShop">GameShop</Link>
            </li>
            <li>
                <Link to="/Cart">Cart</Link>
            </li>
        </ul>
    );
};

export default Navbar;
