import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import App from "./App";
import Home from "./pages/Home";
import GameShop from "./pages/GameShop";
import GameDetails from "./pages/GameDetails";
import Cart from "./pages/Cart";
import Navbar from "./components/Navbar";

const RouteSwitch = () => {
    const [cartItem, setCartItem] = useState([]);
    const [cartTotal, setCartTotal] = useState(0);

    useEffect(() => {
        setCartTotal(cartItem.reduce((total, item) => total + item.total, 0));
        setCartItem(cartItem.filter((item) => item.count !== 0));
    }, [cartItem, cartTotal]);

    return (
        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home cartItem={cartItem} />} />
                <Route
                    path="/GameShop"
                    element={
                        <GameShop
                            cartItem={cartItem}
                            setCartItem={setCartItem}
                            cartTotal={cartTotal}
                            setCartTotal={setCartTotal}
                        />
                    }
                />
                <Route
                    path="/GameShop/:id"
                    element={
                        <GameDetails
                            cartItem={cartItem}
                            setCartItem={setCartItem}
                        />
                    }
                />
                <Route
                    path="/Cart"
                    element={
                        <Cart
                            cartItem={cartItem}
                            setCartItem={setCartItem}
                            cartTotal={cartTotal}
                        />
                    }
                />
            </Routes>
        </BrowserRouter>
    );
};

export default RouteSwitch;
