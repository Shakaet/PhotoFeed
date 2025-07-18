import Link from 'next/link'
import React from 'react'

import img from "/public/lws_logo.png"
import bd from "/public/images/bd.png"
import usa from "/public/images/usa.png"
import Image from 'next/image'

const NavBar = () => {
  return (
    <div>

        <nav className="py-4 md:py-6 border-b ]">
    <div className="container mx-auto flex items-center justify-between gap-x-6">
    
      <Link href="/">
        <Image className="max-w-[100px] md:max-w-[165px]" src={img} alt="Lws" />
      </Link>
     

      <div className="flex gap-4 items-center">

        <div className="relative">
          <button className="flex items-center gap-2">
            <Image className="max-w-8" src={bd} alt="bangla" />
            Bangla
          </button>

       
           <div
              className="absolute right-0 top-full mt-2 w-40 rounded-md bg-white p-2 z-10 shadow-lg"
            >
              <li
                className="flex items-center gap-2 p-2 rounded-md cursor-pointer hover:bg-gray-100"
              >
                <Image
                  className="max-w-8"
                  src={bd}
                  alt="bangla"
                />
                Bangla
              </li>
              <li
                className="flex items-center gap-2 p-2 rounded-md cursor-pointer hover:bg-gray-100"
              >
                <Image
                  className="max-w-8"
                  src={usa}
                  alt="bangla"
                />
                English
              </li>
            </div> 
        </div>
      </div>
    </div>
  </nav>



    </div>
  )
}

export default NavBar