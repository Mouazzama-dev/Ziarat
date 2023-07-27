import React from 'react'
import styles from '../constants/style'
import Button from './common/Button'
import ring from '../assets/ring5.png';
import bowl from '../assets/bowl.png'


const CTA = () => {
    return (
        <section className={`${styles.flexCenter} ${styles.marginY} ${styles.padding} sm:flex-row flex-col bg-black-gradient-2 relative box-shadow`}>

            <div className='absolute -top-20 -left-20 animate-bounce hidden lg:block'>
                <img src={ring} alt="floating ring" />
            </div>

            <div className="flex-1 flex flex-col">
                <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
                    ACHIEVE MORE
                </p>
                <h2 className={'flex-1 font-poppins font-semibold text-white text-[32px]'}>Join our community of faith{''} <br /> centered blockchain {''} <br />enthusiasts</h2>

            </div>

            {/* ====> input email <==== */}
            <div className={`${styles.flexCenter} sm:ml-10 ml-0 sm:mt-0 mt-10`}>

                <Button text={'Notify Me'} hasStroke />
            </div>

            <div className='absolute -bottom-40 -right-20 animate-bounce hidden lg:block'>
                <img src={bowl} alt="floating bowl" />
            </div>
        </section>
    )
}

export default CTA
