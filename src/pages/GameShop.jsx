import React, { useState } from "react";
import { GameCard } from "../components/GameCard";
import { Link } from "react-router-dom";
import gameStore from "../gameStore.json";

const GameShop = ({ cartItem, setCartItem }) => {
    const games = gameStore;

    const addCartHandler = (e) => {
        e.preventDefault();
        const itemName = e.target.name;
        const storeItem = games.find((obj) => obj.name === itemName);
        const stateItem = cartItem.find((obj) => obj.name === itemName);

        /* Checks if the item is in the cart. If it isn't, it adds
       it to the cart. If it is, it adds one to the count*/
        !stateItem
            ? setCartItem(cartItem.concat(storeItem))
            : setCartItem(
                  cartItem.map((item) =>
                      item.name === itemName
                          ? { ...item, count: item.count + 1 }
                          : item
                  )
              );
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
