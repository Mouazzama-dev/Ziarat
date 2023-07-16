import React from 'react'
import styles from '../constants/style'
import FeatureCard from './FeatureCard'
import { features } from '../constants/constants'

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
            <div className="grid lg:grid-cols-12 gap-x-3 gap-y-9 font-poppins">
                {features.map((({ id, icon, title, description }) => (
                    <FeatureCard key={id} icon={icon} title={title} description={description} />
                )))}
            </div>
        </section >
    )
}

export default Business
