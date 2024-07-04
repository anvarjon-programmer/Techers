import React from 'react'
import { GiNotebook } from "react-icons/gi";

const Cart = ({title,number,icons}) => {
  return (
    <>

    <section className='w-[450px] h-[200px] bg-[#D5D5D5] flex items-center justify-center rounded-lg'>
        <div className='flex items-center py-7 gap-5'>
            <div className='flex flex-col items-center'>
                <h2 className='text-[22px]'>{title}</h2>
                <b className='text-[22px] text-center m-auto'>{number}</b>
            </div>
            <div className='h-[100px] w-[100px] rounded-[50%] bg-white flex items-center justify-center'>
               <div>{icons}</div>
            </div>
        </div>
    </section>
    </>
  )
}

export default Cart