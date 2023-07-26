import React from 'react'
import styles from '../constants/style'
import Accordian from './common/Accordian'
import { faqData } from '../constants/constants'
import towers from '../assets/towers.png'

const FAQ: React.FC = () => {
  return (
    <section id='faq' className={`flex lg:flex-row flex-col  ${styles.paddingX} ${styles.paddingY}`}>


      {/*=====> Image Part <=====  */}
      <div className='lg:w-1/2'>
        <img src={towers} className='object-contain' />
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


    </section>
  )
}

export default FAQ

