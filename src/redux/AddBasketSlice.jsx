import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    basket: JSON.parse(localStorage.getItem("bas")) ||[]
}


export const addBasketSlice = createSlice({
    name:"ADD__BASKET",
    initialState,
    reducers: {
        addBasket(state,action){
            localStorage.setItem("bas",JSON.stringify([...state.basket , action.payload]))
            state.basket = [...state.basket , action.payload]
        }
    }
})


export const {addBasket} = addBasketSlice.actions;
export default addBasketSlice.reducer