import React, { useState } from 'react'
import styles from '../constants/style'
import Button from './common/Button'
import { BsTwitter } from 'react-icons/bs'
import logo from '../assets/logo.webp'
import Modal from './common/Modal'


const Hero = () => {
    const [showModal, setShowModal] = useState<boolean>(false)


    const openModal = () => {
        setShowModal((show) => !show)
    }

    return (
        <section id='#' className={`flex md:flex-row flex-col ${styles.paddingY}`}>
            {/* ====> Heading Part <===== */}
            <div className={`flex flex-wrap ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6  ${styles.paddingY}`}>
                <div className='flex justify-between items-center w-full'>
                    {/* <h1 className="flex-1 font-poppins font-semibold ss:text-[60px] text-[52px] text-white ss:leading-[100.8px] leading-[60px]">
                        Ziarat's Protocol:<br className="sm:block hidden" />{" "}
                        Unlock the Future of Scalability!{" "}
                    </h1> */}

                    <h1 className="flex-1 font-poppins font-semibold ss:text-[60px] text-[52px] text-white ss:leading-[100.8px] leading-[60px]">
                        Unlock the Future of <br className="sm:block hidden" />{" "}
                        Scalability with Ziarat's Game-Changing{" "}
                    </h1>
                </div>
                <h1 className="font-poppins font-semibold ss:text-[60px] text-[52px] text-white ss:leading-[100.8px] leading-[75px] w-full">
                    Protocol!
                </h1>
                <p className={`${styles.paragraph} max-w-[675px] mt-5`}>Ziarat revolutionizes scalability by combining off-chain transactions with zk-rollups, ensuring both efficiency and security. This breakthrough solution eliminates traditional limitations and enables lightning-fast transaction processing. Experience unparalleled speed with minimal delays, empowering businesses and users with limitless scalability.</p>

                {/* ====> Buttons <==== */}
                <div className='mt-5 grid lg:grid-cols-2 gap-10 max-w-[430px]'>
                    <Button text={'Follow us'} icon={<BsTwitter />} />
                    <Button text={'Contact the team'} hasStroke={true} onClick={openModal} />
                </div>
            </div>


            {/* ====> Imaga Part <===== */}
            <div className='flex-initial w-full md:w-1/2' >
                <img src={logo} alt="Ziarat Hero" className='w-[100%] h-[100%]' />
            </div>


            {showModal && (
                <Modal
                    isOpen={showModal}
                    handleOpen={openModal}
                    heading='Contact the team'
                    showCheckbox
                    buttonText='Contact the team'
                />
            )}

        </section>
    )


}

export default Hero