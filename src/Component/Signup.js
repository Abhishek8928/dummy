import React from 'react'
import {Link} from 'react-router-dom'
export default function Signup() {
  return (
    <div>
      <div className="flex xsm:justify-center   sm:justify-center ">
        <div className=' xsm:hidden sm:hidden  lg:block   w-1/2 m-2 rounded bg-[#DEE5F0] h-[97vh]'>
          <h2 className='font-bold text-4xl p-4'>Vision<span className='text-blue-700'>.</span>
          </h2>
          <div>
            
          </div>
          
          
        </div>
        <div className=' sm:w-full xsm:h-[90vh] lg:w-1/2 h-[90vh] mt-2 mr-2 mb-2 '>
          <div className="flex justify-end items-center  gap-4">

            <Link to="" className="text-sm font-semibold text-gray-900">
              New to vision <span aria-hidden="true">&rarr;</span>
            </Link>
            <Link
              to="/"
              className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Go back home
            </Link>


          </div>



          <h1 className='text-[#303030] font-bold text-center text-4xl py-8'>Sign in to <span className='bg-gradient-to-br from-indigo-400 via-indigo-400 to-cyan-400 bg-clip-text text-transparent'>
            Vision</span>  </h1>

          <div className='flex justify-center'>
            <div className='  xsm:w-10/12  md:w-2/4 lg:w-96'>
              <div className='xsm:py-1  md:py-2'>
                <label className='text-[#606060] py-4 text-sm block' htmlFor=''>Enter your email address</label>
                <div className='relative'>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 absolute top-0 mt-5 ml-2 text-[#606060]">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                  </svg>

                  <input className='w-full outline-none px-8   border rounded py-3.5  focus:outline-none box-sd ' placeholder='example321@gmail.com' type="email" />
                </div>
              </div>

              <div className=' xsm:py-1  md:py-2'>

                <label className='text-[#606060] py-4 text-sm block' htmlFor=''>Enter your password</label>
                <div className='relative'>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 absolute top-0 mt-4 ml-2 text-[#606060]">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
                  </svg>
                  <input className='w-full outline-none  border rounded py-3 px-8 focus:outline-none box-sd ' placeholder='xxxxxxxx' type="email" />
                </div>
              </div>
              <div className=' pt-8 pb-4'>
                <button className='rounded-md block w-full bg-indigo-600 px-3 py-2.5 font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'>Sign in</button>
              </div>



              <div className='flex justify-between items-center py-2'>
                <div className='flex  items-center gap-2'>



                  <input type="checkbox" name="" id="" />

                  <label className='text-sm text-[#606060] ' htmlFor="">Remember Me</label>
                </div>
                <div className='float-right'>

                  <a className='font-medium text-indigo-600 hover:text-indigo-500' href="">Forgot Password?</a>
                </div>
              </div>



              <div className='mt-5'>

                <button className='inline-flex gap-4 w-full items-center justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-500 shadow-sm mb-4 hover:bg-gray-50 disabled:cursor-wait disabled:opacity-50'>  Sign in with google </button>



                <button className='inline-flex gap-4 w-full items-center justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-500 shadow-sm hover:bg-gray-50 disabled:cursor-wait disabled:opacity-50'> Sign in with facebook</button>
              </div>
            </div>
          </div>




        </div>
      </div>
    </div>
  )
}
