import React from 'react'
import styles from '../constants/style'
import { partnershipData } from '../constants/constants'
import PartnershipCard from './PartnershipCard'

const Partnership = () => {
    return (
        <section id='partnership' className={`flex flex-col ${styles.paddingX} ${styles.paddingY}`}>
            {/* ====> Heading <==== */}
            <div className={`flex justify-start items-center w-full mb-5`}>
                <h1 className={`${styles.heading2} font-poppins`}>
                    Partnership
                </h1>
            </div>

            {/* ====> Cards <==== */}
            <div className="grid lg:grid-cols-12 gap-x-3 gap-y-9 font-poppins">
                {partnershipData.map(({ id, img, title, description, buttonText }) => (
                    <PartnershipCard key={id} img={img} title={title} description={description} buttonText={buttonText} />
                ))}
            </div>
        </section >
    )
}

export default Partnership
