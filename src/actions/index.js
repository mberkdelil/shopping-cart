export const addToCart = (product) => {
    return { type: "ADD_TO_CART", payload: product }
};

export const deleteProduct = id => {
    return { type: "DELETE_PRODUCT", payload: id }
};

export const editProduct = product => {
    return { type: "EDIT", payload: product }
}

export const removeFromCart = id => {
    return { type: "REMOVE_CART", payload: id }
}

export const increaseCount = id => {
    return { type: "INC_COUNT", payload: id }
}

export const decreaseCount = id => {
    return { type: "DEC_COUNT", payload: id }
}
