import React from 'react'
import Image from 'next/image'
import one from './public/one.png'
import sec from './public/sec.png'
import thri from './public/thri.png'
import yo from '/public/yo.png'
import img from './public/img.png'
import prite from './public/prite.png'
import pin from './public/pin.png'
import potty from './public/potty.png'

export default function OurProducts() {
  return (
       <div className="w-full pt-[30px] md:pt-[67px] pb-[50px] bg-lightBG">
            <div className="text-center relative w-full md:top-5 top-0">
                <h2 className="text-[30px] md:text-[40px] font-bold text-Gray1">Our Products</h2>
            </div>
            <div className="w-[1200px] mx-auto mt-5 text-white text-center grid md:grid-cols-2 lg:grid-cols-3 gap-2">
               <Image src='/one.png'alt='one'width={300}height={300}/>
               <Image src='/sec.png'alt='sec'width={300}height={300}/>
               <Image src='/thri.png'alt='thri'width={300}height={300}/>
               <Image src='/yo.png'alt='yo'width={300}height={300}/>
               <Image src='/img.png'alt='img'width={300}height={300}/>
               <Image src='/prite.png'alt='prite'width={300}height={300}/>
               <Image src='/pin.png'alt='pin'width={300}height={300}/>
               <Image src='/potty.png'alt='potty'width={300}height={300}/>




            </div>
    </div>
  );
}
