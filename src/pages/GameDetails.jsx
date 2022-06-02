import { useEffect } from "react";
import gameStore from "../gameStore.json";
import { useParams } from "react-router-dom";
import { addToCartHandler } from "../functions/cartHandler";

const GameDetails = ({ cartItem, setCartItem }) => {
    useEffect(() => {
        console.log(id);
    });

    let { id } = useParams();
    const game = gameStore[id - 1];
    const games = gameStore;
    const addToCart = addToCartHandler(cartItem, setCartItem, games);

    return (
        <div>
            <img src={game.img} alt={game.name} />
            <h1>{game.name}</h1>
            <p>Price: {game.price}</p>
            <button name={game.name} onClick={addToCart}>
                Add to cart
            </button>
        </div>
    );
};

export default GameDetails;
