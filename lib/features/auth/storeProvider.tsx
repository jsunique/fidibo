"use client"
import { useEffect, useState ,type ReactNode } from "react"
import { Provider } from "react-redux"
import { type AppStore, makeStore } from "./store"
import { restoreData } from "./authSlice";

export default function StoreProvider({children,}:{children:ReactNode;}) {
  const [store] = useState<AppStore>(makeStore);
  useEffect(()=>{
    const saved = localStorage.getItem("fidibo");
    if (saved) {
      const savedText = JSON.parse(saved);
      store.dispatch(restoreData(savedText));
    }
    const unsubscribe = store.subscribe(()=>{
      const currentAuth = store.getState().auth;
      localStorage.setItem(
        "fidibo",JSON.stringify(currentAuth));
    });
    return()=>unsubscribe();
  },[store])
  return (
    <Provider store={store}>
      {children}
    </Provider>
  )
}
