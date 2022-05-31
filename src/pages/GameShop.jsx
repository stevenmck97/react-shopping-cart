import React, { useState } from "react";
import { GameCard } from "../components/GameCard";

const GameShop = () => {
    const games = [
        {
            id: 1,
            img: "https://images.igdb.com/igdb/image/upload/t_cover_big/co1wyy.png",
            name: "The Witcher 3: Wild Hunt",
            description: `Good game`,
            price: 70,
        },
        {
            id: 2,
            img: "https://images.igdb.com/igdb/image/upload/t_cover_big/co1wko.png",
            name: "Call of Duty: Modern Warfare",
            description: `First person shooter`,
            price: 40,
        },
        {
            id: 3,
            img: "https://images.igdb.com/igdb/image/upload/t_cover_big/xrpmydnu9rpxvxfjkiu7.png",
            name: "Stardew Valley",
            description: `Farming game`,
            price: 20,
        },
        {
            id: 4,
            img: "https://images.igdb.com/igdb/image/upload/t_cover_big/co2k5h.png",
            name: "Mass Effect: Legendary Edition",
            description: `Role Playing Game`,
            price: 70,
        },
    ];

    const [item, setItem] = useState();
    const [cartItem, setCartItem] = useState([]);

    const addCartHandler = (e) => {
        const itemName = e.target.name;
        const clickedItem = games.find((obj) => obj.name === itemName);
        setCartItem(clickedItem);

        console.log(cartItem);
    };

    return (
        <div>
            {games.map((game) => {
                return (
                    <GameCard
                        game={game}
                        key={game.id}
                        addCartHandler={addCartHandler}
                    />
                );
            })}
        </div>
    );
};

export default GameShop;
