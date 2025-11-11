import logo from "../assets/logo.webp";
import { footerLinks, socialLinks } from "../constants/constants";
import styles from "../constants/style";
// import { BsFillTelephoneFill } from "react-icons/bs";
// import { FaLocationDot } from "react-icons/fa6";

const Footer = () => (
  <section className={`${styles.flexCenter} ${styles.paddingY} flex-col`}>
    <div
      className={`${styles.flexStart} lg:flex-row flex-col w-full grid lg:grid-cols-12 grid-cols-3 gap-3`}
    >
      <div className="flex md:justify-start justify-center  items-center  lg:col-span-3 col-start-1 col-end-7">
        <img
          src={logo}
          alt="Ziarat Logo"
          className="w-auto h-[72.14px] object-contain"
        />
        {/* <address className="not-italic grid grid-cols-12 lg:text-sm text-xs gap-2">
                    <div className="flex gap-2 items-center col-start-2 col-end-12  ">
                        <BsFillTelephoneFill className="text-dimWhite" />
                        <a className="text-footerColor hover:text-dimWhite" href="tel:+15759362634">+1 (575) 936-2634</a><br />
                    </div>

                    <div className="flex gap-2 col-start-2 col-end-12  ">
                        <FaLocationDot className="text-dimWhite" />
                        <address className="text-footerColor not-italic hover:text-dimWhite">  2201 MENAUL BLVD NE, STE A<br />
                            ALBUQUERQUE , NM 87107
                        </address>
                    </div>
                </address> */}
      </div>

      <div className="lg:col-span-6 col-start-1 col-end-7 h-[72.14px] ">
        <ul className="flex lg:flex-row  lg:h-full justify-between items-center">
          {footerLinks.map(({ id, name, link }) => (
            <li
              key={id}
              className="text-footerColor hover:text-dimWhite transition duration-100 flex justify-center items-center lg:h-full"
            >
              <a href={link} target="_blank">
                {name}
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div className="flex  col-span-3 justify-end h-[72.14px] lg:items-center md:flex-row flex-col">
        <ul className="flex gap-4">
          {socialLinks.map(({ id, url, icon }) => (
            <li
              key={id}
              className="text-white transition w-[40px] cursor-pointer rounded-md shadow-md h-[40px] bg-black-gradient flex justify-center items-center"
            >
              <a href={url} target="_blank" aria-label={id}>
                {icon}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  </section>
);

export default Footer;
