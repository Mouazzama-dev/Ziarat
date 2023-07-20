import React from 'react'
import styles from '../constants/style'
import arrow from '../assets/arrow.svg.png'
import { roadmaps } from '../constants/constants'

const When: React.FC = () => {
    return (
        <section id='when' className={`flex flex-col ${styles.paddingX} ${styles.paddingY}`}>
            {/* ====> Heading <==== */}
            <div className={`flex justify-start items-center w-full mb-5`}>
                <h1 className={`${styles.heading2}`}>
                    When?
                </h1>
            </div>

            {/* ====> Roadmap <==== */}
            <div className='grid lg:grid-cols-12 sm:gap-y-8  font-poppins'>
                {roadmaps.map((quarter, index) => (
                    <div key={quarter.image} className='col-span-3  border-r-1 mt-3 lg:border-r-2 border-borderDark/20'>
                        <div className='flex lg:justify-around items-center sm:justify-start'>
                            <img src={quarter.image} />
                            {index !== roadmaps.length - 1 && <img src={arrow} className="hidden lg:block" />}

                        </div>


                        <ul className="mt-4 flex flex-col">
                            {quarter.roadmap.map((road) => (
                                <li key={road} className={`font-poppins font-normal text-[20px] leading-[24px] m-5 text-white hover:text-borderDark cursor-pointer 
                                    }`}>
                                    {road}
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}

            </div>
        </section>
    )
}

export default When
