import { configureStore, createSlice } from '@reduxjs/toolkit'


let user = createSlice({
    name: 'user',
    initialState: 'kim',
})

let cart = createSlice({
    name: 'cart',
    initialState: [
        {id: 0, name: '티츄', count: 2},
        {id: 2, name: '할리갈리', count: 1},
    ],
    reducers: {
        addCount(state, action){
            state[action.payload].count++
        },
        addItem(state, action){
            let 번호 = state.findIndex((a)=>{return a.id === action.payload});
            state[번호].count++;
        },
    }
})

export let {addItem} = cart.actions

export default configureStore({
  reducer: { 
        user: user.reducer,
        cart: cart.reducer,
   }
}) 