import React, { useState } from 'react'
import styles from '../constants/style'
import Button from './common/Button'
import ring from '../assets/ring5.png';
import bowl from '../assets/bowl.png'
import { BsArrowUpRight } from 'react-icons/bs';
import { db } from '../config/firebase';
import { addDoc, collection } from 'firebase/firestore';


const CTA: React.FC = () => {
    const [email, setEmail] = useState<string>('')
    const [emailSaved, setEmailSaved] = useState<boolean>(false)

    const userCollectionRef = collection(db, 'userEmails')

    const onSubmit = async () => {
        try {
            const submitted = await addDoc(userCollectionRef, { email })
            if (submitted) {
                setEmailSaved(true)
            }
        } catch (error) {
            console.error(error)
        }
    }

    return (
        <section className={`${styles.flexCenter} ${styles.marginY} ${styles.padding} sm:flex-row flex-col bg-black-gradient-2 relative box-shadow`}>

            <div className='absolute -top-20 -left-20 animate-bounce hidden lg:block'>
                <img src={ring} alt="floating ring" />
            </div>

            <div className="flex-1 flex flex-col  ">
                <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
                    ACHIEVE MORE
                </p>
                <h2 className={'flex-1 font-poppins font-semibold text-white lg:text-[32px] md:text-[32px] text-[20px]'}>Join our community of faith{''} <br /> centered blockchain {''} <br />enthusiasts</h2>

            </div>

            {emailSaved ? (
                <div className={`${styles.flexCenter} sm:ml-10 lg:w-1/2 ml-0 sm:mt-0 mt-10 `}>
                    <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
                        YOUR EMAIL IS ADDED TO THE COMMUNITY LIST!
                    </p>
                </div>

            ) : (
                <div className={`${styles.flexCenter} sm:ml-10 lg:w-1/2 ml-0 sm:mt-0 mt-10 `}>
                    <input className='bg-[#aeaeae7a] w-full px-4 py-3 focus:outline-none focus:bg-[#aeaeae7a] text-white' type="email" name="email" placeholder='Email' onChange={(e) => setEmail(e.target.value)} value={email} />
                    <Button icon={<BsArrowUpRight />} hasBg onClick={onSubmit} />
                </div>
            )}


            <div className='absolute -bottom-40 -right-20 animate-bounce hidden lg:block'>
                <img src={bowl} alt="floating bowl" />
            </div>
        </section>
    )
}

export default CTA
