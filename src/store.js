import { configureStore, createSlice } from '@reduxjs/toolkit'


let user = createSlice({
    name: 'user',
    initialState: 'kim',
})

let cart = createSlice({
    name: 'cart',
    initialState: [  ],
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

let id = createSlice({
    name: 'id',
    initialState: '',
})

export let {addItem, addCount} = cart.actions


export default configureStore({
  reducer: { 
        user: user.reducer,
        cart: cart.reducer,
        id: id.reducer,
   }
}) 