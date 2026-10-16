type cartItem = {
  quantity:number,
  bookId:string,
  price:number,
}

type user = {
  id:string,
  username:string,
  email:string,
  password:string,
  cart:cartItem[],
}

type authState = {
  currentUser: string | null,
  users:user[],
}

const data:authState = {
  currentUser:null,
  users:[]
}