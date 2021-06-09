export const calculateTotal = (cartData) => {
    return cartData.reduce( (acc, current) => {
        return acc + current.product.price * current.quantity
    }, 0);
}

export const cartItemQuantity = (items) => !items ? 0 : items.reduce((accumulator, current) => accumulator + current.quantity, 0);

export const itemExistIncart = (cartItems, product) => {
    let productInfoInCart = {found: false, index: null};
    for(let i=0; i<cartItems.length; i++){
        if(cartItems[i].product.id === product.id){
            productInfoInCart = { found: true, index: i };
            break;
        }
    }
    return productInfoInCart;
}