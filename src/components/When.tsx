import React from 'react'
import styles from '../constants/style'

const When = () => {
    return (
        <section id='when' className={`flex flex-col ${styles.paddingX} ${styles.paddingY}`}>
            {/* ====> Heading <==== */}
            <div className={`flex justify-start items-center w-full mb-5`}>
                <h1 className={`${styles.heading2}`}>
                    When?
                </h1>
            </div>
        </section>
    )
}

export default When
