// import { useState } from 'react';
// import {AiOutlineMenu , AiOutlineClose} from 'react-icons/ai'
import logo from '../assets/logo.png' ;

const Navbar = () => {
    // const [nav , setNav] = useState(false) ;

    // const handleNav = () => {
    //     setNav(!nav) ;
    // }

    return (
        <div className='z-10 bg-gradient-to-br from-[rgb(0,0,0)] to-[rgb(57,57,57)] fixed top-0 w-screen flex justify-between items-center rounded-lg px-4 h-20 max-w-[1240] mx-auto text-white text-sm md:text-md'>
            <img className='w-16 md:w-20' src={logo} />
            <ul className='flex'>
               <li className='hover:border-b-2 hover:border-blue-500 text-[10px] sm:text-sm md:text-[17px]'><a href='#projects' className='p-4'>Projects</a></li>
               <li className='hover:border-b-2 hover:border-blue-500 text-[10px] sm:text-sm md:text-[17px]'><a href='#about' className='p-4'>About</a></li> 
                <li className='hover:border-b-2 hover:border-blue-500 text-[10px] sm:text-sm md:text-[17px]'><a href='#contact' className='p-4'>Contact</a></li>
            </ul>
            {/* <div onClick={handleNav} className='hidden'>
                {nav ? <AiOutlineClose size={25}/> : <AiOutlineMenu size={25}/>}
               
            </div>
          <div className={nav ? 'left-0 top-0 w-full h-full border-r border-r-gray-800 bg-[#000300] ease-in-out duration-500' : 'fixed left-[-100%] ease-in-out duration-500'}>
          <h1 className=' text-2xl font-bold text-white m-4'>
                Nima
            </h1>
          <ul className=' uppercase p-4 flex flex-col'>
                <a className='p-4 border-b border-gray-600'>Home</a>
                <a className='p-4 border-b border-gray-600'>Projects</a>
                <a className='p-4 border-b border-gray-600'>About ME</a>
                <a className='p-4 border-b border-gray-600'>Contact</a>
            </ul>
          </div> */}
        </div>
    );
};

export default Navbar;
