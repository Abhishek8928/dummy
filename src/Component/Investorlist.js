import React from 'react';
import List from './List';
import Dummydata from '../Random/Constant';
const Investorlist = () => {

    return (

        <>
            
            <Investorhero />
            <div className='flex  bg-white items-center xsm:mt-4 mt-10 xsm:justify-center justify-between lg:px-8'>
            <div className='xsm:hidden p-4  xsm:gap-4 xsm:flex-start xsm:flex-wrap flex items-center gap-6  '>
                <p>Filter By</p>
                <List />
                <List />
                </div>
                
                <div class="group xsm:w-80 w-60">
  <svg class="icon" aria-hidden="true" viewBox="0 0 24 24"><g><path d="M21.53 20.47l-3.66-3.66C19.195 15.24 20 13.214 20 11c0-4.97-4.03-9-9-9s-9 4.03-9 9 4.03 9 9 9c2.215 0 4.24-.804 5.808-2.13l3.66 3.66c.147.146.34.22.53.22s.385-.073.53-.22c.295-.293.295-.767.002-1.06zM3.5 11c0-4.135 3.365-7.5 7.5-7.5s7.5 3.365 7.5 7.5-3.365 7.5-7.5 7.5-7.5-3.365-7.5-7.5z"></path></g></svg>
  <input placeholder="Search" type="search" class="input"/>
</div>
                
            </div>
            
        

            <div className='w-full xsm:p-2 mb-12 p-4  lg:px-8'>

                <div className='w-full  bg-white  sticky top-0 flex text-center py-4 border-b'>
                    <div className='xsm:w-3/6 sm:w-2/6   lg:w-1/6  bg-red'>Name</div>
                    <div className='xsm:hidden  sm:hidden lg:block  lg:w-1/6 '></div>
                    <div className='xsm:hidden  sm:hidden md:block  lg:block   lg:w-1/6 '>Invested</div>
                    <div className='xsm:w-2/6 sm:w-2/6  lg:w-1/6 '>Category</div>
                    <div className=' xsm:hidden  sm:w-1/6 '>Type</div>
                    <div className='xsm:w-2/6  lg:w-1/6 '>Location</div>
                </div>

                <div className='w-full   text-center py-4'>
                    

                    {
                        Dummydata.map((x) => {
                            return <>
                            <div className='hover:bg-slate-100 -z-10 shadow mb-4  xsm:relative xsm:pt-12    p-4 flex items-center justify-center rounded-lg w-full'>
                        <div className='xsm:w-3/6  md:w-2/6  lg:w-1/6  flex items-center  text-left'>
                                        <div className='flex items-center gap-4 text-left'>
                           
                                                
                                   <img className='rounded-full' src="https://source.unsplash.com/40x40/?person" alt="" />
                            
                           
                           <div>
                                       <span className="block text-sm text-bold">Abhishek Sharma</span>
                                       <span className="inline-block text-slate-400">
                                           <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="fill-blue-600 w-4 h-4">
                                               <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z" clipRule="evenodd" />
                                           </svg>
                                       </span>
                                       <span  className='text-xs align-top'>
                                           1245 followers
                                       </span>
                            </div>
                            
                            </div>
                            


                                </div>
                        <div className='xsm:hidden lg:w-1/6 sm:hidden lg:block'>

                            <button  className="py-2 px-4 border rounded" >Follow +</button>
                        </div>  
                        <div className='md:block lg:w-1/6 xsm:hidden sm:hidden '>
                            <small>Cread,Swiggy</small>
                        </div>

                        <div className='xsm:absolute xsm:top-4 xsm:right-5 sm:w-2/6  lg:w-1/6'>
                            <div className=''>
                            <small className='w-fit py-2 px-4  rounded-full mr-4 bg-[#e3e9f0] text-blue-500'>Technology</small>
                            <small className='w-fit bg-red-50 text-red-400  py-2 px-6  rounded-full'>B2B</small>
                            </div>
                            
                        </div>
                    
                        <div className='w-1/6'>
                            <small>Angle</small>
                        </div>

                        
                        <div className='xsm:w-2/6 w-1/6'>
                            <small>Ludhaina punjab</small>
                        </div>


                        </div>
                            
                            
                            </>
                       }) 
                    }
                    </div>
                </div>
            </>
    );
};



let Investorhero = () => {
    return (
        <>
        <div id="hero"  className="xsm:mt-8 relative lg:px-8 xsm:px-0 xsm:pt-10 p-6  mt-20">
                <div className="bg-[#111827] xsm:rounded-none  rounded-[16px] xsm:pt-12 xsm:pb-4 pt-20 pb-6 flex justify-center text-white">

                    <div className=" text-center">
                        <h2 className="xsm:text-[32px] xsm:leading-[1] sm:leading-[1.2]  xsm:pb-4 text-5xl pb-6 font-bold">Connect with potential <span className="bg-gradient-to-br from-indigo-400 via-indigo-400 to-cyan-400 bg-clip-text text-transparent font-bold">Investors here.
                        </span> </h2>

                        
                        <div className="flex justify-center">
                        
                        </div>
                        
                        <p className="pb-6 xsm:text-[#ccc] xsm:text-[12px]" >Maximize your potebtial and reach your goals faster by building meaningful <br /> relationships with some of most amazing investors in industry</p>
                    </div>


                </div>  
                
                
        </div>
        
        
        </>
    )
}

export default Investorlist;