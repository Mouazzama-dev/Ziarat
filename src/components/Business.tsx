import React, { useState } from 'react'
import styles from '../constants/style'
import FeatureCard from './FeatureCard'
import { features } from '../constants/constants'
import Button from './common/Button'
import Modal from './common/Modal'

const Business: React.FC = () => {
    const [showModal, setShowModal] = useState<boolean>(false)


    const openModal = () => {
        setShowModal((show) => !show)
    }
    return (
        <section id='why' className={`flex flex-col ${styles.paddingX} `}>
            {/* ====> Heading <==== */}
            <div className={`flex flex-col justify-center items-center w-full mb-5`}>
                <h1 className={`${styles.heading2} text-center text-gradient`}>
                    Why Ziarat?
                </h1>
                <p className='text-lightTextColor text-center'>When you resell Ziarat, you build trust and increase</p>
            </div>

            {/* ====> Cards <==== */}
            <div className={`grid lg:grid-cols-12 gap-x-3 gap-y-9 ${styles.paddingY} font-poppins`}>
                {features.map(((feature, idx) => (
                    <FeatureCard key={feature.id} index={idx} img={feature.image} title={feature.title} description={feature.description} />
                )))}
            </div>

            <div className='px-6  py-4 flex  w-full justify-center items-center '>
                <Button text={'Become a Partner'} onClick={openModal} />
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

        </section >
    )
}

export default Business
