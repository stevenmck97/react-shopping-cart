import React from "react";
import { deleteCartItemHandler } from "../functions/cartHandler";

const Cart = ({ cartItem, setCartItem, cartTotal }) => {
    const deleteCartItem = deleteCartItemHandler(cartItem, setCartItem);

    return (
        <div>
            {cartItem.map((item) => {
                return (
                    <div key={item.id}>
                        <p>{item.name}</p>
                        <span>
                            <p>Price: ${item.total}</p>
                            <p>Quantity: {item.count}</p>
                        </span>
                        <button onClick={deleteCartItem} name={item.name}>
                            Delete Game
                        </button>
                    </div>
                );
            })}
            <h1>Total: ${cartTotal}</h1>
        </div>
    );
};

export default Cart;
