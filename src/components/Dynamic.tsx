import React from 'react'
import styles from '../constants/style'
import cube from '../assets/cube.webp'
import fullRing from '../assets/fullRing.png';
import bowl from '../assets/bowl2.png';

const Dynamic: React.FC = () => {
    return (
        <section id='partnership' className={`flex flex-col justify-center items-center ${styles.paddingX} ${styles.paddingY}`}>
            {/* ====> Heading <==== */}
            <div className={`flex flex-col justify-center  items-center  mb-5`}>
                <h1 className={`lg:flex-1 font-poppins lg:font-semibold lg:text-[52px]  text-center text-gradient uppercase`}>
                    the dynamic duo of zkrollups and state channels
                </h1>
            </div>

            {/* ====> Image <==== */}
            <div className='relative'>
                <img src={cube} alt="cube" />

                <div className='absolute  hidden lg:block top-0 animate-bounce'>
                    <img src={fullRing} alt='bouncing ring' />
                </div>
                <div className='absolute  hidden lg:block -right-48 bottom-0 animate-bounce' >
                    <img src={bowl} alt="bowl" />
                </div>
            </div>
        </section >
    )
}

export default Dynamic
