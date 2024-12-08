import React from 'react'
import Image from 'next/image';
import vector from '../public/vector.png';
import shop from '../public/shop.png';
import search from '../public/search.png';
import dil from '../public/dil.png'
import logo from '../public/logo.png'


export default function Header() {
  return (
    <div>
      <header className='bg-white'>
        {/* Header Container */}
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          {/* Logo */}
          <Image src="/logo.png" alt=" Logo" width={40} height={40}/>

          <span className="ml-3 text-xl font-black">Furniro</span>

          {/* Navigation and Icons */}
          <div className="md:ml-auto md:mr-auto flex flex-wrap items-center justify-center space-x-6">
            {/* Navigation Links */}

            <nav className="flex space-x-6 gap-12">
              <a className="gap-10  hover:text-blank-900 ">Home</a>
              <a className=" gap-10 hover:text-blank-900 ">Shop</a>
              <a className="hover:text-blank-900 ">Blog</a>
              <a className="hover:text-blank-900">Contact</a>
            </nav>

            <div></div>

            {/* Icons */}
            <div className="flex flex-col sm:flex-row  justify-between top-[150px] left-[200px] p-0  pr-[64px] pl-[62px] items-center gap-11 mt-9 sm:mt-0 ">
              <Image src="/vector.png" alt="User Profile Icon" width={24} height={24} />
              <Image src="/search.png" alt="Search Icon" width={24} height={24} />
              <Image src="/shop.png" alt="Shopping Cart Icon" width={24} height={24} />
              <Image src="/dil.png" alt="dil" width={24} height={24} />
            </div>
            
          </div>
    
        </div>
      </header>
    </div>
  );
}



// export default function Header() {
//   return (
//     <div>
//       <header >
//         <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
//         <Image src='/logo.png'alt='logo'width={100}height={50}/>
//         </div>
        

//   <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
//     <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
       
       
//       <span className="ml-3 text-xl">Furniro</span>
//     </a>
//     <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
//       <a className="mr-5 hover:text-gray-900">Home</a>
//       <a className="mr-5 hover:text-gray-900">Shop</a>
//       <a className="mr-5 hover:text-gray-900">Blog</a>
//       <a className="mr-5 hover:text-gray-900">Contact</a>
//     </nav>
//     <div className='md:ml-auto md-mr-auto flex flex-wrap items-end item-base justify-end'>

// <Image src="/vector.png" alt="vector" width={24} height={24} />;
// <Image src="/search.png" alt="search" width={24} height={24} />;
// <Image src="/shop.png" alt="shop" width={24} height={24} />;


//     </div>
   
//   </div>
// </header>

//     </div>
//   )
// }
