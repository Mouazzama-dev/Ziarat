import styles from "../constants/style";
import logo from "../assets/logo.webp";
import { footerLinks, socialLinks } from "../constants/constants";

const Footer = () => (
    <section className={`${styles.flexCenter} ${styles.paddingY} flex-col`}>
        <div className={`${styles.flexStart} md:flex-row flex-col mb-8 w-full`}>
            <div className="flex-[1] flex flex-col justify-start mr-10">
                <img
                    src={logo}
                    alt="Ziarat"
                    className="w-[200px] h-[72.14px] object-cover"
                />
                <p className={`${styles.paragraph} mt-4 max-w-[312px]`}>
                    A new way to make the payments easy, reliable and secure.
                </p>


                <div className="w-full flex justify-between items-center md:flex-row flex-col mt-10">
                    <ul className="flex flex-row gap-3">
                        {socialLinks.map(({ id, url, icon }) => (
                            <li className='text-white transition w-[40px] cursor-pointer rounded-md shadow-md h-[40px] bg-black-gradient flex justify-center items-center' key={id}>
                                <a href={url} target='_blank'>{icon}</a>
                            </li>
                        ))}
                    </ul>
                </div>

            </div>

            <div className="flex-[1.5] w-full flex flex-row justify-between flex-wrap md:mt-0 mt-10">
                {footerLinks.map((footerlink) => (
                    <div key={footerlink.title} className={`flex flex-col ss:my-0 my-4 min-w-[150px]`}>
                        <h4 className="font-poppins font-medium text-[18px] leading-[27px] text-footerColor">
                            {footerlink.title}
                        </h4>
                        <div className="flex flex-col mt-4">
                            {footerlink.links.map((link, index) => (
                                <a
                                    href={link.link}
                                    key={link.name}
                                    className={`font-poppins font-normal text-[16px] leading-[24px] text-footerDimColor hover:text-dimWhite duration-100 cursor-pointer ${index !== footerlink.links.length - 1 ? "mb-4" : "mb-0"
                                        }`}
                                >
                                    {link.name}
                                </a>


                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>

    </section>
);

export default Footer;




// import React from 'react'
// import { socialLinks } from '../constants/constants'
// import logo from '../assets/logo.webp';

// const Footer: React.FC = () => {
//     return (
//         <footer id='footer' className={`flex-col`}>

//             <div className="w-full flex justify-between items-center md:flex-row">
//                 <div className='flex justify-center items-center max-w-[140px]'>
//                     <img src={logo} alt="Ziarat" className="w-full object-cover cursor-pointer" />
//                 </div>

//                 <div className="flex flex-row md:mt-0 mt-6 justify-center items-center">
//                     <ul className='flex text-2xl text-white gap-8'>
//                         {socialLinks.map(({ id, url, icon }) => (
//                             <li className=' hover:text-borderDark transition duration-150 ' key={id}>
//                                 <a href={url} target='_blank'>{icon}</a>
//                             </li>
//                         ))}
//                     </ul>
//                 </div>
//             </div>

//         </footer>
//     )
// }

// export default Footer
