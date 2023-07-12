import React from 'react'
import styles from '../constants/style'
import Accordian from './common/Accordian'
import { faqData } from '../constants/constants'

const FAQ = () => {
  return (
    <section id='faq' className={`flex flex-col ${styles.paddingX} ${styles.paddingY}`}>
      {/* ====> Heading <==== */}
      <div className={`flex justify-start items-center w-full mb-5`}>
        <h1 className={`${styles.heading2}`}>
          F.A.Q.
        </h1>
      </div>

      {/* ====> Accordian <===== */}
      <div>
        {faqData.map(({ id, question, answer }) => (
          <Accordian key={id} accId={id} question={question} answer={answer} />
        ))}
      </div>


    </section>
  )
}

export default FAQ

