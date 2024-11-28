import React from 'react'
import Image from 'next/image'
 import { headerLogo} from '../assets/images'
 import { hamburger } from '../assets/icons'
 import { navLinks } from '../constant'

const Uper = () => {
  return (
    <section className='padding-x py-8 absolute z-10 w-full'>
     <nav className= "flex justify-between items-center max-container ">

       <div>
        <a href="#home">
        <Image src={headerLogo} alt="fukc" width={130} height={10} className='flex-1' />
        </a>
       </div>
      
      <div>
      <ul className='flex-1 flex justify-between items-center gap-16 max-lg:hidden'>
        {navLinks.map((item)=>(
          <li key={item.label} className="">
            <a href={item.href} className="font-montserrat leading-normal text-lg text-slate-gray/50 hover:text-slate-gray">
              {item.label}
            </a>
          </li>
        
        ))}

      </ul>
      </div>
      
<div className='flex justify-center items-center  max-lg:hidden '>
< button className=' buton hover:box-border  m-3 gap-2 px-8 py-2 border-[2px] font-montserrat text-lg leading-non  rounded-full text-white bg-[#8a5aff] hover:text[#8a5aff] hover:bg-white hover:border-[#8a5aff]  hover:text-[#8a5aff]  '>
      Sing in 
    </button>
< button className=' gap-2 px-6 py-2 border-[2px] font-montserrat text-lg leading-non  rounded-full text-white bg-[#8a5aff] hover:text[#8a5aff] hover:bg-white hover:border-[#8a5aff]  hover:text-[#8a5aff]  '>
      Log in
    </button>
</div>

       
       <div className='hidden max-lg:block'>
        <Image src={hamburger} alt='humburger' width={24} height={24} />
        
       </div>
     </nav>
    </section>
  )
}
export default Uper