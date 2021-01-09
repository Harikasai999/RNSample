

const types = {
    ADD_TO_CART: 'ADD_TO_CART',
    REMOVE_FROM_CART: 'REMOVE_FROM_CART',
    EMPTY_CART: 'EMPTY_CART',
};

export const actions = {
    addToCart: (dispatch, product) => {
        dispatch({
            type: types.ADD_TO_CART,
            product,
        });
    },
    removeFromCart: (dispatch, product) => {
        dispatch({
            type: types.REMOVE_FROM_CART,
            product
        });
    },
    emptyCart: (dispatch, product) => {
        dispatch({
            type: types.EMPTY_CART,
            product
        });
    },


};

const initialState = {
    cartItems: [],
};
export const reducer = (state = initialState, action) => {
    const compareCartItem = (cartItem, action) => {
        return cartItem.id === action.product.id;
    };
    const { type } = action;
    switch (type) {
        case types.ADD_TO_CART: {

            const isExisted = state.cartItems.some(cartItem =>
                compareCartItem(cartItem, action)
            );
            var newCartItems = state.cartItems;
            if (isExisted) {
                state.cartItems.map((item, key) => {
                    if (item.id === action.product.id) {
                        item.quantity = action.product.quantity
                    }
                })
                newCartItems = state.cartItems;
            } else {
                newCartItems = [...state.cartItems, action.product]
            }
            return {
                cartItems: newCartItems
            };


        }
        case types.REMOVE_FROM_CART: {

            return {
                cartItems: state.cartItems.filter(
                    item => item.id !== action.product.id
                ),

            };
        }
        case types.EMPTY_CART: {

            return initialState;
        }
        default: {
            return state;
        }
    }
};

