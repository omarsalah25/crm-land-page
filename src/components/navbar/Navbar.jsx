import { Button, NavbarBrand, } from 'flowbite-react';
import { Navbar as FlowNav } from 'flowbite-react';

// import React from 'react'

const Navbar = () => {

    return (
        <FlowNav fluid rounded className='bg-transparent'>
            <NavbarBrand href="https://crowd.com.eg">
                <img src="/c.png" className="align-sub h-9 sm:h-12" alt="Flowbite React Logo" />
            </NavbarBrand>
            <div className="flex md:order-2">
                <Button className='mx-1 bg-red-700 enabled:hover:bg-red-800  hover:text-white hover:-translate-y-0.5 transition-all ' >Login</Button>

                <Button className=' bg-red-700 enabled:hover:bg-red-800  hover:text-white hover:-translate-y-0.5 transition-all '>View demo</Button>
                {/* <NavbarToggle /> */}
            </div>
            {/* <NavbarCollapse className=''>
                <NavbarLink className='text-white md:text-red-700 active:text-red-800 active:font-bold  md:hover:text-red-800 text-base ' href="/" active>
                    Home
                </NavbarLink>
                <NavbarLink className='text-white active:text-red-800 md:hover:text-red-800 text-base' href="/about" >About</NavbarLink>
          
                <NavbarLink className='text-white active:text-red-800  md:hover:text-red-800 text-base' href="/contact">Contact</NavbarLink>
            </NavbarCollapse> */}
        </FlowNav>
    )
}

export default Navbar