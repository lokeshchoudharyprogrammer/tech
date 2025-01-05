import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    value: 0,
}

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {

        AddtoCart: (state, action) => {
            state.value += action.payload
            localStorage.setItem('cart', JSON.stringify(state.value))
        },
        RemoveFromCart: (state, action) => {
            let cart = JSON.parse(localStorage.getItem('cart'))
            let id = action.payload
            let index = cart.findIndex((item) => item.id === id)
            cart.splice(index, 1)
            localStorage.setItem('cart', JSON.stringify(cart))

        },
        ClearCart: (state) => {
            state.value = 0
            localStorage.removeItem('cart')
        },

        TotalItemsInCart: (state) => {
            let cart = JSON.parse(localStorage.getItem('cart'))
            return state.value = cart.length
        },




    },
})

export const { AddtoCart, RemoveFromCart, ClearCart, TotalItemsInCart } = cartSlice.actions

export default cartSlice.reducer