import React from "react";

const Cart = ({ cartItem, cartTotal }) => {
    return (
        <div>
            {cartItem.map((item) => {
                return (
                    <div key={item.id}>
                        <p>{item.name}</p>
                        <span>
                            <p>Total price of this game: {item.total}</p>
                            <p>Number of this game: {item.count}</p>
                        </span>
                    </div>
                );
            })}
            <h1>{cartTotal}</h1>
        </div>
    );
};

export default Cart;
