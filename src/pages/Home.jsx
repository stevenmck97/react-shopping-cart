import React from "react";

const Home = ({ cartItem }) => {
    return (
        <div>
            <p>Items in cart: {cartItem.length}</p>
            <h1>Welcome to my games store! </h1>
        </div>
    );
};

export default Home;
