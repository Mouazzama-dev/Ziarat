import React from 'react'
import styles from '../constants/style'
import FeatureCard from './FeatureCard'
import Partnership from './Partnership'
import { features, partnershipData } from '../constants/constants'

const Business = () => {
    return (
        <section id='why' className={`flex flex-col ${styles.paddingX} `}>
            {/* ====> Heading <==== */}
            <div className={`flex justify-start items-center w-full mb-5`}>
                <h1 className={`${styles.heading2}`}>
                    Why Ziarat?
                </h1>
            </div>

            {/* ====> Cards <==== */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-3 gap-y-9 font-poppins">
                {features.map((({ id, img, title, description }) => (
                    <FeatureCard key={id} image={img} title={title} description={description} />
                )))}

                {partnershipData.map(({ id, img, title, description, buttonText }) => (
                    <Partnership key={id} img={img} title={title} description={description} buttonText={buttonText} />
                ))}
            </div>


        </section >
    )
}

export default Business
