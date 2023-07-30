import React from 'react'
import styles from '../constants/style'
import Accordian from './common/Accordian'
import { faqData } from '../constants/constants'
import towers from '../assets/towers.webp'
import ring1 from '../assets/ring1.png'
import ring2 from '../assets/ring2.png';


const FAQ: React.FC = () => {
  return (
    <section id='faq' className={`flex relative lg:flex-row flex-col  ${styles.paddingX} ${styles.paddingY}`}>


      {/*====> animated ring <==== */}
      <div className='absolute w-32 -left-20 top-0 animate-bounce hidden lg:block'>
        <img src={ring1} alt='bouncing ring' />
      </div>
      {/*=====> Image Part <=====  */}
      <div className='lg:w-1/2'>
        <img src={towers} alt='towers' className='object-contain' />
      </div>

      {/* ====> Accordian <===== */}
      <div className='lg:w-1/2'>
        {/* ====> Heading <==== */}
        <div className={`flex justify-start items-center w-full mb-5`}>
          <h1 className={`${styles.heading2} text-gradient text-center`}>
            FAQ's
          </h1>
        </div>
        {faqData.map(({ id, question, answer }) => (
          <Accordian key={id} accId={id} question={question} answer={answer} />
        ))}
      </div>

      <div className='absolute w-32  lg:-right-20 -right-10  -bottom-20 animate-bounce hidden lg:block'>
        <img src={ring2} alt='bouncing ring' />
      </div>


    </section>
  )
}

export default FAQ

