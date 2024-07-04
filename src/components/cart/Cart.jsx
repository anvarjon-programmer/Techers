import React from 'react'
import { GiNotebook } from "react-icons/gi";

const Cart = () => {
  return (
    <>
    <div className='flex items-center justify-between'>
    <section className='w-[450px] h-[200px] bg-[#D5D5D5] flex items-center justify-center rounded-lg'>
        <div className='flex items-center py-7 gap-5'>
            <div className='flex flex-col items-center'>
                <h2 className='text-[22px]'>Qilingan uyga vazifalar</h2>
                <b className='text-[22px] text-center m-auto'>10</b>
            </div>
            <div className='h-[100px] w-[100px] rounded-[50%] bg-white flex items-center justify-center'>
               <GiNotebook className='text-[40px] bg-[#22AAD8]'/>
            </div>
        </div>
    </section>

    <section className='w-[450px] h-[200px] bg-[#D5D5D5] flex items-center justify-center rounded-lg'>
        <div className='flex items-center py-7 gap-5'>
            <div className='flex flex-col items-center'>
                <h2 className='text-[22px]'>Qilingan uyga vazifalar</h2>
                <b className='text-[22px] text-center m-auto'>10</b>
            </div>
            <div className='h-[100px] w-[100px] rounded-[50%] bg-white flex items-center justify-center'>
               <GiNotebook className='text-[40px] bg-[#22AAD8]'/>
            </div>
        </div>
    </section>

    <section className='w-[450px] h-[200px] bg-[#D5D5D5] flex items-center justify-center rounded-lg'>
        <div className='flex items-center py-7 gap-5'>
            <div className='flex flex-col items-center'>
                <h2 className='text-[22px]'>Qilingan uyga vazifalar</h2>
                <b className='text-[22px] text-center m-auto'>10</b>
            </div>
            <div className='h-[100px] w-[100px] rounded-[50%] bg-white flex items-center justify-center'>
               <GiNotebook className='text-[40px] bg-[#22AAD8]'/>
            </div>
        </div>
    </section>
    </div>
    </>
  )
}

export default Cart