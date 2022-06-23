
import React from 'react'
import Image from 'next/image'
import type { NextPage } from "next";


type Props = {
  Image:string
  price:any
  discount:string
};

const Card1: React.FC<Props> = (props) =>{
    
    return (
        <div>
            <div className=' border-2 border-green-500 w-44 my-5 hover:border-green-700 shadow-xl  shadow-green-300 hover:shadow-green-500'>
                <div className=' mx-auto'>
                    <Image src={props.Image} width={200} height={150} alt='clock' ></Image>
                </div>
                <h1 className='text-center font-bold text-2xl font-serif'>{props.discount}</h1>
                <h1 className='text-center'>{props.price}</h1>
                <button className=' border-0 text-xl bg-green-300 w-full h-14 mt-6 hover:bg-green-700 hover:text-white font-bold font-serif'>Buy</button>
            </div>
        </div>
    )
}

export default Card1