import { createSlice } from "@reduxjs/toolkit";

const wishlistSlice=createSlice({
    name:'wishlist',
    initialState:{
        wishlist:[]
    },
    reducers:{
        
        addToWishList:(state,action)=>{
            state.wishlist.push(action.payload)
            // localStorage.setItem("wishlist",JSON.stringify(state.wishlist))          
        },
        removeFromWishList:(state,action)=>{
            state.wishlist=state.wishlist.filter(item=>item.id!=action.payload)
            // localStorage.setItem("wishlist",JSON.stringify(wishlist))
            // return state.wishlist.filter(item=>item.id!=action.payload)
        }
    }
})


export const {addToWishList,removeFromWishList}=wishlistSlice.actions
export default wishlistSlice.reducer