export const addToCartHandler = (cartItem, setCartItem, games) => (e) => {
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
                      ? {
                            ...item,
                            count: item.count + 1,
                            total: item.price * (item.count + 1),
                        }
                      : item
              )
          );
};
