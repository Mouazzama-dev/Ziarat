import React, { useState } from 'react'

import logo from '../assets/logo.webp'



import menu from '../assets/menu.svg';
import close from '../assets/close.svg';

import { navLinks, socialLinks } from '../constants/constants'
import styles from '../constants/style'
const Navbar: React.FC = () => {
    const [toggle, setToggle] = useState<boolean>(false);


    return (
        <nav className={`${styles.boxWidth} grid grid-cols-5 bg-primary `}>
            {/* =====> Logo div <====== */}
            <div className='grid items-center justify-start'>
                <img src={logo} alt="Ziarat" className="lg:w-[120px] object-contain cursor-pointer" />
            </div>


            {/*======> Navlinks div <======  */}
            <div className='sm:flex hidden items-center col-span-4 font-poppins'>
                <ul className='flex justify-around w-full items-center text-white cursor-pointer'>
                    {navLinks.map((nav, idx) => (
                        <li
                            key={nav.id}
                        >
                            <a className={' text-navColor capitalize '} href={idx === 5 ? `${nav.id}` : `#${nav.id}`} target={idx === 5 ? '_blank' : ''}>
                                {nav.title}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>


            {/* Responsive navbar */}
            <div className='flex justify-end items-center sm:hidden col-span-4 cursor-pointer '>
                <img
                    src={toggle ? close : menu}
                    alt="menubar"
                    className='object-contain' onClick={() => setToggle((prev) => !prev)} />
            </div>

            {/* Navlinks  Mobile div */}
            {
                toggle && (
                    <div className='sm:hidden sidebar items-center col-span-5 font-poppins grid absolute bg-primary top-10 right-0 left-0 py-3'>
                        <ul className='flex flex-col justify-between items-center h-80 text-white cursor-pointer text-xl  '>
                            {navLinks.map((nav, idx) => (
                                <li
                                    key={nav.id}
                                    onClick={() => setToggle((prev) => !prev)}
                                >
                                    <a className={idx === 0 ? 'capitalize text-white' : 'capitalize text-dimWhite'} href={`#${nav.id}`}>
                                        {nav.title}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                )
            }
        </nav >
    )
}

export default Navbar