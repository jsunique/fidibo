import React from 'react'
import {User} from "lucide-react"
import icon from "@/public/icons/fidibo-mobile-light.svg"
import Image from "next/image";
import Link from "next/link"

export default function page() {
  return (
    <>
    <div className='md:hidden w-full h-full flex flex-col bg-background gap-6'>
      <User size={50} className='mt-25 mr-4' />
      <p className='font-bold text-[18px] px-5'>شروع کار با فیدیبو</p>
      <p className='text-xs text-muted-foreground font-medium px-5'>با ایمیل وراد شوید</p>
      <form action="" className='flex flex-col justify-center items-center gap-5 px-5'>
        <input type="text" placeholder='نام' className='border border-border outline-none w-full h-11 px-5 rounded-[8px] focus:border focus:border-black' />
        <input type="email" placeholder='ایمیل' className='border border-border outline-none w-full h-11 px-5 rounded-[8px] focus:border focus:border-black'  />
        <input type="password" placeholder='رمز' className='border border-border outline-none w-full h-11 px-5 rounded-[8px] focus:border focus:border-black'  />
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
      <form action="" className='flex flex-col justify-center items-center gap-6 px-4 mt-4'>
        <input type="text" placeholder='نام' className='border border-border outline-none w-full h-11 px-5 rounded-[8px] focus:border focus:border-black' />
        <input type="email" placeholder='ایمیل' className='border border-border outline-none w-full h-11 px-5 rounded-[8px] focus:border focus:border-black'  />
        <input type="password" placeholder='رمز' className='border border-border outline-none w-full h-11 px-5 rounded-[8px] focus:border focus:border-black'  />
        <button className='border border-border w-full h-11 rounded-[8px] cursor-pointer' type='submit'>ورود</button>
        <p>حساب کاربری دارید؟  <Link className='text-[#0000fa] cursor-pointer hover:underline' href="/login"> وارد شوید</Link></p>
      </form>
    </div>



  </div>
    </>
  )
}
