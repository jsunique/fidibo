"use client"
import React, { useState } from 'react'
import {User } from "lucide-react"
import icon from "@/public/icons/fidibo-mobile-light.svg"
import Image from "next/image";
import Link from "next/link"
import { useDispatch, useSelector } from 'react-redux'
import type { RootState } from '@/lib/features/auth/store'
import {registerUser} from "@/lib/features/auth/authSlice"
import { useRouter } from 'next/navigation';
export default function SignUp() {
  const [username , setUsername] = useState("");
  const [password , setPassword] = useState("");
  const [email , setEmail] = useState("");
  const [error,setError] = useState("");
  const users = useSelector(
    (state:RootState) => state.auth.users
  ) 
  const dispatch = useDispatch();
  const router = useRouter()
  const handleForm = (e:React.FormEvent<HTMLFormElement>)=>{
    e.preventDefault();
    if (username==="" || password==="" || email==="") {
      setError("ورودی ها اشتباه است");
      setUsername("");
      setPassword("");
      setEmail("");
      return;
    }
    const userIsExist = users.some((item)=>{
      return item.email === email;
    });
    if(userIsExist) {
      setError("این ایمیل وجد دارد از پایین صفحه وارد شوید");
      setUsername("");
      setPassword("");
      setEmail("");
      return
      }
      if (!userIsExist) {
        const newUser = {
          id:crypto.randomUUID(),
          username,
          email,
          password,
          cart:[],
          favorits:[]
        }
        dispatch(registerUser(newUser));
        router.push("/");
      }
  }
  return (
    <>
    <div className='md:hidden w-full h-full flex flex-col bg-background gap-6'>
      <User size={50} className='mt-25 mr-4' />
      <p className='font-bold text-[18px] px-5'>شروع کار با فیدیبو</p>
      <p className='text-xs text-muted-foreground font-medium px-5'>با ایمیل وراد شوید</p>
      {
        error &&       <p className='text-xs text-fidibo-badge font-medium px-5'>{error}</p>
      }
      <form onSubmit={handleForm}  className='flex flex-col justify-center items-center gap-5 px-5'>
        <input value={username} onChange={(e)=>setUsername(e.target.value)} type="text" placeholder='نام' className='border border-border outline-none w-full h-11 px-5 rounded-[8px] focus:border focus:border-black' />
        <input value={email} onChange={(e)=>setEmail(e.target.value)} type="email" placeholder='ایمیل' className='border border-border outline-none w-full h-11 px-5 rounded-[8px] focus:border focus:border-black'  />
        <input value={password} onChange={(e)=>setPassword(e.target.value)} type="password" placeholder='رمز' className='border border-border outline-none w-full h-11 px-5 rounded-[8px] focus:border focus:border-black'  />
        <button className='border border-border w-full h-11 rounded-[8px] cursor-pointer' type='submit'>ورود</button>
      </form>
    </div>



  <div className='flex flex-col bg-secondary-foreground items-center justify-center gap-8  w-full  h-full pb-20 hidden md:flex '>
    <div className='flex justify-center items-center mt-16'>
    <Image src={icon} alt='' width={120} height={120}/>
    </div>

    <div className='bg-background flex flex-col gap-4 w-108 rounded-[5px] px-4 pb-12'>
       <User size={50} className='mt-8 mr-4' />
      <p className='font-bold text-[18px] px-5'>شروع کار با فیدیبو</p>
      <p className='text-xs text-muted-foreground font-medium px-5'>با ایمیل وراد شوید</p>
      {
        error && <p className='text-xs text-fidibo-badge font-medium px-5'>{error}</p>
      }
      <form onSubmit={handleForm} className='flex flex-col justify-center items-center gap-6 px-4 mt-4'>
        <input value={username} onChange={(e)=>setUsername(e.target.value)}  type="text" placeholder='نام' className='border border-border outline-none w-full h-11 px-5 rounded-[8px] focus:border focus:border-black' />
        <input value={email} onChange={(e)=>setEmail(e.target.value)}  type="email" placeholder='ایمیل' className='border border-border outline-none w-full h-11 px-5 rounded-[8px] focus:border focus:border-black'  />
        <input value={password} onChange={(e)=>setPassword(e.target.value)} type="password" placeholder='رمز' className='border border-border outline-none w-full h-11 px-5 rounded-[8px] focus:border focus:border-black'  />
        <button className='border border-border w-full h-11 rounded-[8px] cursor-pointer' type='submit'>ورود</button>
        <p>حساب کاربری دارید؟  <Link className='text-[#0000fa] cursor-pointer hover:underline' href="/login"> وارد شوید</Link></p>
      </form>
    </div>
  </div>
    </>
  )
}
