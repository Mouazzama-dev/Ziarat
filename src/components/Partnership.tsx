import React from 'react'
import styles from '../constants/style'
import { partnershipData } from '../constants/constants'
import PartnershipCard from './PartnershipCard'

const Partnership: React.FC = () => {
    return (
        <section id='partnership' className={`flex flex-col ${styles.paddingX} ${styles.paddingY}`}>
            {/* ====> Heading <==== */}

            {/* ====> Cards <==== */}
            <div className="grid lg:grid-cols-12 lg:gap-x-20 gap-y-9 font-poppins">
                {partnershipData.map(({ id, title, description, buttonText }) => (
                    <PartnershipCard key={id} title={title} description={description} buttonText={buttonText} />
                ))}
            </div>
        </section >
    )
}

export default Partnership
