
import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import {FaShoppingCart} from "@react-icons/all-files/Fa/FaShoppingCart";






export default function index() {
  return (
    <div className='sm:container sm:w-2/3 sm:mx-auto '>
      <div className=' flex justify-around border border-green-500 h-16 shadow-lg shadow-green-200 mt-1'>
        <div>
          <h1 className='pl-14 mt-4 text-green-800 font-bold'>Center Store</h1>
        </div>
        <div className='mt-5 w-6 text-green-500 text-2xl'>
          <a><Link href='/'><FaShoppingCart /></Link></a>
        </div>
        <div className=' px-3 pt-4 text-green-500'>
          <a className='px-3 hover:text-green-700'><Link href='/'>Shopping</Link></a>
          <a className='px-3 hover:text-green-700'><Link href='/'>About</Link></a>
          <a className='px-3 hover:text-green-700'><Link href='/'>Call</Link></a>
        </div>
      </div>
      <div className=' flex justify-around mt-10'>
        <p className=' w-60 lg:w-80 mt-1 sm:font-bold md:text-lg px-2 text-center'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus dicta repellendus non, recusandae voluptatum molestiae ullam perferendis voluptatibus animi sed,reiciendis odit itaque placeat nostrum voluptas quod cum.Voluptate,tempore?
        </p>
        <div className=' px-2'>
          <Image src='/Images/shopping.jpg' width={300} height={250} alt="shopping" ></Image>
        </div>
      </div>
    </div>
  )
}
