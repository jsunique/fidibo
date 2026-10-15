import React from 'react'
import Image from "next/image"
import icon from "@/public/icons/fidibo-mobile-light.svg"
import {User , ShoppingBasket , Search} from "lucide-react"
export default function Navbar() {
  return (
    <div className='flex flex-col  w-full bg-red-500 px-4 py-3 gap-5'>


      <div className='flex justify-between items-center gap-3'>
        <Image src={icon} alt='' width={70} height={70} />
      <div className='flex items-center gap-3'> 
        <button><ShoppingBasket /></button>
        <div className='bg-black w-[1px] h-4'></div>
        <button><User /></button>
      </div>
      </div>


      <div className='flex relative items-center'>
        <input className='bg-white w-full h-10 border-none focus:border-none focus:outline-none px-10 text-sm' type="text place" placeholder='جستجو' />
        <Search className='absolute right-2' />
      </div>
    </div>
  )
}
