import React from 'react'
import styles from '../constants/style'
import logo from '../assets/logo.webp'
import { footerLinks } from '../constants/constants'

const Footer = () => {
    return (
        <footer id='footer' className={`${styles.flexCenter} ${styles.paddingY} flex-col `}>
            <div className={`${styles.flexStart}  md:flex-row flex-col mb-8 w-full`}>
                {/* ===> Image <==== */}
                <div className="flex-1 flex flex-col  justify-start mr-10">
                    <img
                        src={logo}
                        alt="ziarat"
                        className="w-[200px] h-[150px] object-cover"
                    />
                    <p className={`max-w-[320px] ${styles.paragraph}`}>
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    </p>
                </div>

                {/* ====> Links <==== */}
                <div className="flex-[1.5] w-full flex md:flex-row justify-between flex-col md:mt-0 mt-10">
                    {footerLinks.map((footerlink) => (
                        <div key={footerlink.title} className={`flex flex-col ss:my-0 my-4 min-w-[150px] `}>
                            <h4 className="font-poppins font-medium text-[18px] leading-[27px] text-white">
                                {footerlink.title}
                            </h4>
                            <ul className="list-none mt-4">
                                {footerlink.links.map((link, index) => (
                                    <li key={link.name} className={`font-poppins font-normal text-[16px] leading-[24px] text-dimWhite hover:text-borderDark cursor-pointer ${index !== footerlink.links.length - 1 ? "mb-4" : "mb-0"
                                        }`}>
                                        {link.name}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>


            </div>

        </footer>
    )
}

export default Footer
