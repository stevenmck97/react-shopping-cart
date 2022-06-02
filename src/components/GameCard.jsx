export const GameCard = ({ game, addCartHandler, handleClick }) => {
    return (
        <div onClick={handleClick}>
            <img src={game.img} alt={game.name} />
            <h1>{game.name}</h1>
            <p>Price: {game.price}</p>

            <button onClick={addCartHandler} name={game.name}>
                Add to cart
            </button>
        </div>
    );
};
