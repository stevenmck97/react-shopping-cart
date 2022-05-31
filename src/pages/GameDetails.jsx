import { useEffect } from "react";
import gameStore from "../gameStore.json";
import { useParams } from "react-router-dom";

const GameDetails = () => {
    useEffect(() => {
        console.log(id);
    });

    let { id } = useParams();

    const game = gameStore[id - 1];

    return (
        <div>
            <img src={game.img} alt={game.name} />
            <h1>{game.name}</h1>
            <p>Price: {game.price}</p>
            <button name={game.name}>Add to cart</button>
        </div>
    );
};

export default GameDetails;
