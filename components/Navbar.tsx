"use client"
import React from 'react'
import Image from "next/image"
import icon from "@/public/icons/fidibo-mobile-light.svg"
import icon2 from "@/public/icons/fidibo-desktop-light.svg"
import {User , ShoppingBasket , Search , SunMoon} from "lucide-react"
import { useEffect, useRef, useState } from "react"
export default function Navbar() {

   const [searchHidden, setSearchHidden] = useState(false);
  const previousScrollY = useRef(0);
  useEffect(()=>{

    const mobile = window.matchMedia("(width < 1140)");
    previousScrollY.current = window.scrollY;

    function handleScroll(){
      const currentScrollY = Math.max(0,window.scrollY);
      if (!mobile.matches || currentScrollY < 20  ) {
        setSearchHidden(false);
        previousScrollY.current = currentScrollY;
        return;
      };

      const difference = currentScrollY - previousScrollY.current;
      if (Math.abs(difference) < 8 ) {
        return;
      }
      setSearchHidden(difference > 0);
      previousScrollY.current = currentScrollY;
    }

    function handleScreenChange(){
      setSearchHidden(false);
      previousScrollY.current = window.scrollY;
    }
    window.addEventListener("scroll",handleScroll,{passive:true});
    mobile.addEventListener("change",handleScreenChange);
    return()=>{
      window.removeEventListener("scroll",handleScroll);
      mobile.removeEventListener("change",handleScreenChange);
    };

  },[])


  return (
    <>
    <div className='desktop:hidden fixed inset-x-0 top-0 mt-0 z-50 flex flex-col  w-full  px-4 pt-3 md:px-20 bg-background text-foreground'>
      <div className='relative z-20 -mx-4 flex items-center justify-between bg-background gap-3  px-4 py-3 md:mx-0 md:px-0'>
        <Image src={icon} alt='' width={70} height={70} />
      <div className='flex items-center gap-3'> 
        <button><ShoppingBasket /></button>
        <div className='bg-black w-[1px] h-4 bg-border'></div>
        <button><User /></button>
      </div>
      </div>
      <div className={`flex absolute inset-x-0 top-full md:px-20
      transition-[translate,clip-path] duration-[600ms] ease-in-out bg-background duration-300 ease-in-out
      z-10  px-4 pb-3 pt-2 items-center desktop:translate-y-0 desktop:pointer-events-auto ${searchHidden
  ? "-translate-y-full [clip-path:inset(100%_0_0_0)] pointer-events-none"
  : "translate-y-0 [clip-path:inset(0_0_0_0)]"
}`}>
        <input className=' bg-white text-foreground placeholder:text-muted-foreground w-full h-10 border-none focus:border-none focus:outline-none px-10   text-sm md:px-13' type="text place" placeholder='جستجو' />
        <Search className='absolute right-6 md:right-25' />
      </div>
    </div>
    <div className='hidden desktop:fixed desktop:bg-background desktop:w-full desktop:h-32 desktop:flex'>
      <div className='px-8 flex items-center'>
      <Image src={icon2} alt='' width={80} height={80}/>
      </div>

      <div className='flex flex-col  w-full h-full'>
        <div className='relative flex w-full h-1/2 items-center gap-4'>
          <input type="text" placeholder='جستجو' className='w-[70%] h-[70%] mt-6 outline-none border-none bg-primary-foreground px-10' />
          <Search className='absolute top-1/2 right-2' />
          <button className='gap-2 h-[70%] w-[14%] cursor-pointer border border-border mt-6 px-2 flex items-center rounded-[5px] flex items-center justify-center'><User width={20} />ورود / ثبت نام</button>
          <button className='h-[70%] cursor-pointer border border-border mt-6 px-2 rounded-[5px] w-12 flex justify-center items-center'><ShoppingBasket /></button>
          <button className='h-[70%] hover:bg-white cursor-pointer mt-6 px-2 rounded-[5px] w-12 flex justify-center items-center'><SunMoon/></button>
        </div>
      </div>

    </div>
    </>
  )
}
