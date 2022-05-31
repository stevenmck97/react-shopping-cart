import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import Home from "./pages/Home";
import GameShop from "./pages/GameShop";
import GameDetails from "./pages/GameDetails";
import Cart from "./pages/Cart";
import Navbar from "./components/Navbar";

const RouteSwitch = () => {
    return (
        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/GameShop" element={<GameShop />} />
                {/* <Route path="/GameShop:id" element={<GameDetails />} /> */}
                {/* <Route path="/Cart" element={<Cart />} />  */}
            </Routes>
        </BrowserRouter>
    );
};

export default RouteSwitch;
