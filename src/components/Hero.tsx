import React, { useState } from 'react'
import styles from '../constants/style'
import Button from './common/Button'
import { BsTwitter } from 'react-icons/bs'
import Modal from './common/Modal'
import heroImg from '../assets/hero.svg';
import daimond from '../assets/Diamond.svg'
import star from '../assets/star.png'


const Hero: React.FC = () => {
    const [showModal, setShowModal] = useState<boolean>(false)


    const openModal = () => {
        setShowModal((show) => !show)
    }

    return (
        <section className={`flex md:flex-row flex-col ${styles.paddingY}`}>
            {/* ====> Heading Part <===== */}
            <div className={`flex flex-wrap ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6 w-full md:w-3/5 ${styles.paddingY}`}>

                <div className="flex mb-2">
                    <img src={star} alt="star" className="w-[32px] h-[32px]" />
                    <p className={`text-grayColor font-poppins `}>
                        Ziarat Breaking Boundaries Solving the Blockchain Trilemma
                    </p>
                </div>

                <div className='flex text-gradient justify-between items-center w-full'>
                    <h1 className="flex-1 font-poppins font-semibold ss:text-[60px] text-[52px] text-white ss:leading-[100.8px] leading-[60px]">
                        Ziarat's Protocol:<br className="sm:block hidden" />{" "}
                        Unlock the Future of Scalability!{" "}
                    </h1>
                </div>
                <p className={`${styles.paragraph} paragraph-color max-w-[675px] mt-5`}>Ziarat revolutionizes scalability by combining off-chain transactions with zk-rollups, ensuring both efficiency and security. This breakthrough solution eliminates traditional limitations and enables lightning-fast transaction processing. Experience unparalleled speed with minimal delays, empowering businesses and users with limitless scalability.</p>

                {/* ====> Buttons <==== */}
                <div className={`${styles.paddingY} grid lg:grid-cols-2 gap-10 max-w-[430px]`}>
                    <Button text={'Follow us'} icon={<BsTwitter />} hasLink />
                    <Button text={'Contact the team'} hasStroke={true} onClick={openModal} />
                </div>
            </div>


            {/* ====> Imaga Part <===== */}
            <div className='flex-initial w-full md:w-2/5 relative' >
                <div className='w-[20%] absolute lg:top-[10%]  right-[38%] animate-bounce'>
                    <img src={daimond} alt="Ziarat Diamond" className='object-contained' />
                </div>
                <img src={heroImg} alt="Ziarat Hero" className='w-[100%] h-[100%] object-contain' />
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