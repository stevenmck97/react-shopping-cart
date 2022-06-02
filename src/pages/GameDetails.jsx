import { useEffect } from "react";
import gameStore from "../gameStore.json";
import { useParams } from "react-router-dom";
import { addToCartHandler } from "../functions/cartHandler";

const GameDetails = ({ cartItem, setCartItem }) => {
    useEffect(() => {
        console.log(id);
    });

    let { id } = useParams();
    const games = gameStore[id - 1];
    const addToCart = addToCartHandler(cartItem, setCartItem, games);

    return (
        <div>
            <img src={games.img} alt={games.name} />
            <h1>{games.name}</h1>
            <p>Price: {games.price}</p>
            <button name={games.name} onClick={addToCart}>
                Add to cart
            </button>
        </div>
    );
};

export default GameDetails;
