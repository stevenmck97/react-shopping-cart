import React from "react";
import {
    deleteCartItemHandler,
    updateCartItemHandler,
} from "../functions/cartHandler";

const Cart = ({ cartItem, setCartItem, cartTotal }) => {
    const deleteCartItem = deleteCartItemHandler(cartItem, setCartItem);

    const plus = "+";
    const minus = "-";

    const increaseItem = updateCartItemHandler(cartItem, setCartItem, plus);
    const decreaseItem = updateCartItemHandler(cartItem, setCartItem, minus);

    return (
        <div>
            {cartItem.map((item) => {
                return (
                    <div key={item.id}>
                        <p>{item.name}</p>
                        <span>
                            <p>Price: ${item.total}</p>
                            <p>
                                <button onClick={decreaseItem} name={item.name}>
                                    -
                                </button>
                                Quantity: {item.count}
                                <button onClick={increaseItem} name={item.name}>
                                    +
                                </button>
                            </p>
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
