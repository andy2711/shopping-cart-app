import { INCREASE_QUANTITY, DECREASE_QUANTITY, CLEAR_PRODUCT } from './types';
console.log("in productQuantity!!");
export const productQuantity = (action, name) => {
    return (dispatch) => {
        console.log("Inside Product Quantity");
        console.log("The action is", action);
        console.log("The name is", name);

        dispatch({
            type: action === "increase" ? INCREASE_QUANTITY : DECREASE_QUANTITY,
            payload: name
        })
    }
}

export const clearProduct = (name) => {
    return(dispatch) => {
        console.log("Inside claer Product");
        console.log("The product name is", name);

        dispatch({
            type: CLEAR_PRODUCT,
            payload: name
        })
    }
}