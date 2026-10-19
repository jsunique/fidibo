"use client"
import {User} from "lucide-react"
import icon from "@/public/icons/fidibo-mobile-light.svg"
import Image from "next/image"
import Link from "next/link"
import React, { useState } from 'react'
import type { RootState } from '@/lib/features/auth/store'
import { useDispatch, useSelector } from 'react-redux'
import {loginUser} from "@/lib/features/auth/authSlice"
import { useRouter } from 'next/navigation';

export default function Login() {
    const [password , setPassword] = useState("");
    const [email , setEmail] = useState("");
    const [error,setError] = useState("");
    const dispatch = useDispatch();
    const users = useSelector(
      (state:RootState) => state.auth.users
    );
    const router = useRouter();
    const handleForm = (e:React.FormEvent<HTMLFormElement>)=>{
      e.preventDefault();
      if (email === "" || password === "") {
        setError("ایمیل و پسوورد نمیتواند خالی باشد");
        return
      }
      const availableUser = users.find((user)=>{
        return user.email === email;
      })
      if (!availableUser) {
        setError("چنین ایمیلی وجود نداره");
        return
      }
      if (availableUser) {
        if (availableUser.password === password) {
          dispatch(loginUser(availableUser.id));
          router.push("/");
        }
        else{
          setError("رمز عبور اشتباه است");
        }
      }
    }
  return (
    <>
    <div className='md:hidden w-full h-full flex flex-col bg-background gap-6'>
      <User size={50} className='mt-25 mr-4' />
      <p className='font-bold text-[18px] px-5'>شروع کار با فیدیبو</p>
      <p className='text-xs text-muted-foreground font-medium px-5'>با ایمیل وراد شوید</p>
      {
        error &&       
        <p className='text-xs text-fidibo-badge font-medium px-5'>{error}</p>
      }
      <form onSubmit={handleForm} className='flex flex-col justify-center items-center gap-5 px-5'>
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
        error &&       
        <p className='text-xs text-fidibo-badge font-medium px-5'>{error}</p>
      }
      <form onSubmit={handleForm}  action="" className='flex flex-col justify-center items-center gap-6 px-4 mt-4'>
        <input type="email" placeholder='ایمیل' className='border border-border outline-none w-full h-11 px-5 rounded-[8px] focus:border focus:border-black'  />
        <input type="password" placeholder='رمز' className='border border-border outline-none w-full h-11 px-5 rounded-[8px] focus:border focus:border-black'  />
        <button className='border border-border w-full h-11 rounded-[8px] cursor-pointer' type='submit'>ورود</button>
        <p>حساب کاربری ندارید؟  <Link className='text-[#0000fa] cursor-pointer hover:underline' href="/signup"> ثبت نام کنید</Link></p>
      </form>
    </div>



  </div>
    </>
  )
}
