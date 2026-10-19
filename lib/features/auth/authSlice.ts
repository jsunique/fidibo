import { createSlice } from "@reduxjs/toolkit"
import { PayloadAction } from "@reduxjs/toolkit"

type cartItem = {
  price:number,
  quantity:number,
  bookId:string,
}

type user = {
  id:string,
  username:string,
  email:string,
  password:string,
  favorits:string[],
  cart:cartItem[],
}

type authState = {
  currentUserId: string | null,
  users:user[],
}

const data:authState = {
  currentUserId:null,
  users:[]
}

const authSlice = createSlice({
  name:"auth",
  initialState:data,
  reducers:{

    registerUser(state,action:PayloadAction<user>){
      state.currentUserId = action.payload.id;
      state.users.push(action.payload)
    },

    loginUser(state,action:PayloadAction<string>){
      state.currentUserId = action.payload
    },
    logOutUser(state){
      state.currentUserId = null;
    },
    addToCart(state,action:PayloadAction<cartItem>){
      const karbar = state.users.find((user)=>{
      return user.id === state.currentUserId;
      });
      if (!karbar) {
        return
      }
      const availableItem = karbar.cart.find((cart)=>{
        return cart.bookId === action.payload.bookId 
      });
      if (availableItem) {
        availableItem.quantity += 1 ;
      }
      else{
        karbar.cart.push(action.payload)
      }
    },
    removeFromCart(state,action:PayloadAction<string>){
      const karbar = state.users.find((user)=>{
      return user.id === state.currentUserId;
      });
      if (!karbar) {
        return
      }
      karbar.cart = karbar.cart.filter((item)=>{
        return item.bookId !== action.payload
      })
    },
    restoreData(state,action:PayloadAction<authState>){
      state.currentUserId = action.payload.currentUserId;
      state.users = action.payload.users
    },
    toggleFavorite(state,action:PayloadAction<string>){
      const thisuser = state.users.find((user)=>{
        return user.id === state.currentUserId;
      });
      if (!thisuser) {
        return
      }
      else if (thisuser.favorits.includes(action.payload)) {
        thisuser.favorits = thisuser.favorits.filter((book)=>{
          return book !== action.payload
        })
      }
      else{
        thisuser.favorits.push(action.payload)
      }

    }
  },
})


export const {
  registerUser,
  logOutUser,
  loginUser,
  restoreData,
  removeFromCart,
  addToCart,
  toggleFavorite
} = authSlice.actions;
export default authSlice.reducer;