import React from 'react'
import styles from '../constants/style'
import arrow from '../assets/arrow.svg.png'
import { roadmaps } from '../constants/constants'

const When: React.FC = () => {
    return (
        <section id='when' className={`flex  flex-col ${styles.paddingX} ${styles.paddingY} `}>
            {/* ====> Heading <==== */}
            <div className={`flex justify-center items-center w-full mb-5`}>
                <h1 className={`${styles.heading2} text-center text-gradient uppercase`}>
                    Roadmap
                </h1>
            </div>

            {/* ====> Roadmap <==== */}
            <div className={`bg-faq-gradient ${styles.paddingX} ${styles.paddingY}`}>
                <div className='grid lg:grid-cols-12 sm:gap-y-8  gap-3 font-poppins'>
                    {roadmaps.map((quarter, index) => (
                        <div key={quarter.image} className={`col-span-3 flex flex-col justify-between mt-3 border rounded-md`}>

                            <div className='relative'>
                                <div className='flex  absolute -top-10 left-24 bg-[#330A66] rounded-full w-[70px] h-[70px] items-center justify-center'>
                                    <img src={quarter.image} />
                                </div>
                            </div>



                            <ul className="mt-4 flex flex-col h-full py-3">
                                {quarter.roadmap.map((road) => (
                                    <li key={road} className={`font-poppins font-light text-[18px] leading-[24px] m-5 text-white hover:text-borderDark cursor-pointer 
                                    }`}>
                                        {road}
                                    </li>
                                ))}
                            </ul>

                            <div className='flex justify-end p-3'>
                                <img src={arrow} className="hidden lg:block" />
                            </div>

                        </div>
                    ))}

                </div>
            </div>

        </section>
    )
}

export default When
