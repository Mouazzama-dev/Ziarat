import styles from "../constants/style";
import logo from "../assets/logo.webp";
import { footerLinks, socialLinks } from "../constants/constants";

const Footer = () => (
    <section className={`${styles.flexCenter} ${styles.paddingY} flex-col `}>
        <div className={`${styles.flexStart} lg:flex-row flex-col w-full grid lg:grid-cols-12 grid-cols-3`}>
            <div className="flex flex-col lg:col-span-3 col-start-1 col-end-7">
                <img
                    src={logo}
                    alt="Ziarat Logo"
                    className="w-[200px] h-[72.14px] object-cover"
                />
            </div>

            <div className="lg:col-span-6 col-start-1 col-end-7 h-[72.14px]">
                <ul className="flex lg:flex-row  lg:h-full justify-between items-center">
                    {footerLinks.map(({ id, name, link }) => (
                        <li key={id} className='text-footerColor hover:text-dimWhite transition duration-100 flex justify-center items-center lg:h-full' >
                            <a href={link} target='_blank'>{name}</a>
                        </li>
                    ))}
                </ul>
            </div>

            <div className="flex  col-span-3 justify-end  h-[72.14px] lg:items-center md:flex-row flex-col">
                <ul className="flex  gap-4 b">
                    {socialLinks.map(({ id, url, icon }) => (
                        <li key={id} className='text-white transition w-[40px] cursor-pointer rounded-md shadow-md h-[40px] bg-black-gradient flex justify-center items-center'>
                            <a href={url} target='_blank'>{icon}</a>
                        </li>
                    ))}
                </ul>
            </div>

        </div>
    </section>
);

export default Footer;


