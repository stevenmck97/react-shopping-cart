const Cart = ({ cartItem }) => {
    return (
        <div>
            {cartItem.map((item) => {
                return (
                    <div key={item.id}>
                        <p>{item.name}</p>
                        <span>
                            <p>{item.price * item.count}</p>
                            <p>{item.count}</p>
                        </span>
                    </div>
                );
            })}
        </div>
    );
};

export default Cart;
