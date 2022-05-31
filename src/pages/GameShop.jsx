import React, { useState } from "react";
import { GameCard } from "../components/GameCard";
import { Link } from "react-router-dom";
import gameStore from "../gameStore.json";

const GameShop = () => {
    const games = gameStore;

    const [item, setItem] = useState();
    const [cartItem, setCartItem] = useState([]);

    const addCartHandler = (e) => {
        const itemName = e.target.name;
        const clickedItem = games.find((obj) => obj.name === itemName);
        setCartItem(clickedItem);
        setItem(clickedItem);

        console.log(cartItem);
    };

    return (
        <div>
            {games.map((game) => {
                return (
                    <Link to={`/GameShop/${game.id}`} key={game.id}>
                        <GameCard game={game} addCartHandler={addCartHandler} />
                    </Link>
                );
            })}
        </div>
    );
};

export default GameShop;
