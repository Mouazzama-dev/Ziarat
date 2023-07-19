import React from 'react'
import styles from '../constants/style'
import { footerLinks, socialLinks } from '../constants/constants'
import logo from '../assets/logo.webp';

const Footer = () => {
    return (
        <footer id='footer' className={`flex-col`}>

            <div className="w-full flex justify-between items-center md:flex-row">
                <div className='flex justify-center items-center max-w-[140px]'>
                    <img src={logo} alt="Ziarat" className="w-full object-cover cursor-pointer" />
                </div>

                <div className="flex flex-row md:mt-0 mt-6 justify-center items-center">
                    <ul className='flex text-2xl text-white gap-8'>
                        {socialLinks.map(({ id, url, icon }) => (
                            <li className=' hover:text-borderDark transition duration-150 ' key={id}>
                                <a href={url} target='_blank'>{icon}</a>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>

        </footer>
    )
}

export default Footer
