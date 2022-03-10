import { data } from "../data";

const initialState = {
    products: data,
    cart: []
}

export const reducer = (state = initialState, action) => {
    switch (action.type) {

        case "ADD_TO_CART":
            return {
                ...state,
                cart: state.cart.find(cartItem => cartItem.id === action.payload.id)
                    ? state.cart.map(cartItem =>
                        cartItem.id === action.payload.id ? { ...cartItem, count: cartItem.count + 1 } : cartItem
                    )
                    : [...state.cart, { ...action.payload, count: 1 }]

            }

        case "DELETE_PRODUCT":
            return {
                ...state, products: state.products.filter(product => product.id !== action.payload)
            }

        case "EDIT":
            return {
                ...state, products: state.products.map(product => product.id === action.payload.id ? action.payload : product)
            }

        case "REMOVE_CART":
            return {
                ...state, cart: state.cart.filter(product => product.id !== action.payload)
            }

        case "INC_COUNT":
            return {
                ...state, cart: state.cart.map((cartItem) => cartItem.id === action.payload ? { ...cartItem, count: cartItem.count + 1 } : cartItem)
            };

        case "DEC_COUNT":
            return {
                ...state, cart: state.cart.map((cartItem) => cartItem.id === action.payload ? { ...cartItem, count: cartItem.count > 1 ? cartItem.count - 1 : 1 } : cartItem)
            }

        default:
            return state;
    }
}