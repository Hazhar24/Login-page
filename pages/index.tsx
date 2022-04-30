import type { NextPage } from 'next'
import Link from 'next/link'

export default function Login() {
  return (
    <div className=' sm:pb-10'>
      <div className='container max-w-6xl mx-auto flex sm:flex-col md:flex-row pt-28  '>
        <div className='col w-1/2 sm:mx-auto'>
          <img src="/login.png" className='flex lg:flex-wrop' ></img>
        </div>
        <div className='col border-r-2 w-1/2 py-3 flex-wrap sm:mx-auto sm:mt-4'>
          <h3 className='text-center text-lg text-violet-800'> ورود </h3>
          <h3 className='text-center text-neutral-400 pt-3'> ..مشخصات خود را وارد کنید</h3>
          <form className=' text-center pt-4'>
            <input type="text" className='border-b-4 border-violet-800 w-72 outline-none text-right' placeholder='نام' required /><br />
            <input type="password" className='border-b-4 border-violet-400 w-72 outline-none pt-5 text-right ' placeholder='رمز' required />
          </form>
          <div className='border-2 bg-slate-50 w-72 mt-9 h-16 mx-auto flex justify-around items-center '>
            <img src="/recaptcha.png" className='w-14' />
            <p className='pl-9'> من ربات نیستم </p>
            <div className=' border-2 w-7 h-7 bg-white'></div>
          </div>
          <div className='flex justify-center '>
            <button className='border-2 border-violet-400 w-64 h-14 mt-5 hover:bg-violet-200 '> ثبت </button>
          </div>
          <div className='text-center pt-2'>
            <a href='#' className='text-xs text-blue-500'> ثبت نام نکردی؟  |  رمز عبورت یادت نیست؟ </a>
          </div>
        </div>
      </div>
      <div className='container max-w-6xl mx-auto border rounded-b-md h-2 bg-gradient-to-r from-red-600 via-blue-700 to-yellow-400 sm:w-1/2 md:w-full'>
      </div>
    </div>
  )
}
