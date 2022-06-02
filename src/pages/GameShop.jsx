import React from "react";
import { GameCard } from "../components/GameCard";
import { Link } from "react-router-dom";
import gameStore from "../gameStore.json";
import { addToCartHandler } from "../functions/cartHandler";

const GameShop = ({ cartItem, setCartItem }) => {
    const games = gameStore;
    const addToCart = addToCartHandler(cartItem, setCartItem, games);

    return (
        <div>
            {games.map((game) => {
                return (
                    <Link to={`/GameShop/${game.id}`} key={game.id}>
                        <GameCard game={game} addCartHandler={addToCart} />
                    </Link>
                );
            })}
        </div>
    );
};

export default GameShop;
