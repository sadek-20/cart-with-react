export const initialState = {
    products: [],
    total: 0,
};

const reducer = (state, action) => {
    const { type, payload } = action;
    switch (type) {
        case 'ADD TO CART':
            return {
                ...state,
                products: payload.products,
            };
        case 'REMOVE FROM CART':
            return {
                ...state,
                products: payload.products,
            };
        case 'CALCULATE TOTALS':
            return {
                ...state,
                total: payload.total,
            };
        case 'UPDATE QUANTITY':
            return {
                ...state,
                products: state.products.map(product =>
                    product.id === payload.id
                        ? { ...product, quantity: payload.quantity }
                        : product
                ),
            };
        default:
            return state;
    }
};

export default reducer;