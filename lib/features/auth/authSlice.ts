import { createSlice } from "@reduxjs/toolkit"
import { PayloadAction } from "@reduxjs/toolkit"
import { Users } from "lucide-react"

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
} = authSlice.actions;
export default authSlice.reducer;