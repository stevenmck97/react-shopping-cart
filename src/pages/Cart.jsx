import React from "react";

const Cart = ({ cartItem, cartTotal }) => {
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
                    </div>
                );
            })}
            <h1>Total: ${cartTotal}</h1>
        </div>
    );
};

export default Cart;
