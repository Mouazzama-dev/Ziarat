import React, { useState } from 'react'
import dummyImg from '../assets/Ziarat Logo-08.png 21-09-27-834.png'
import Button from './common/Button'
import Modal from './common/Modal';


interface PartnershipProps {
    img: string;
    title: string;
    description: string;
    buttonText: string;
}

const Partnership: React.FC<PartnershipProps> = ({ img, title, description, buttonText }) => {
    const [showNotifModal, setShowNotifModal] = useState<boolean>(false)
    const [showContactModal, setShowContactModal] = useState<boolean>(false)


    const openModal = (buttonText: string) => {
        console.log('button', buttonText)
        if (buttonText === 'Contact the Team') {
            setShowContactModal((show) => !show)
        } else if (buttonText === 'Notify Me') {
            setShowNotifModal((show) => !show)
        }

    }

    return (
        <section id='partnership' className="col-span-2 rounded overflow-hidden border-2 flex flex-col items-center justify-center border-borderDark">
            <div className="px-6">
                <img className="w-[100px] object-contain" src={img} alt="feature img" />
            </div>
            <div className="px-6 py-4 flex flex-col items-center justify-center">
                <div className="font-bold text-xl mb-2 text-white">{title}</div>
                <p className="text-textColor text-base text-center">
                    {description}
                </p>
            </div>
            <div className='py-4 flex justify-center items-center max-w-[200px]'>
                <Button text={buttonText} hasStroke={true} onClick={() => openModal(buttonText)} />
            </div>

            {(showContactModal || showNotifModal) && (
                <Modal
                    isOpen={(showContactModal || showNotifModal)}
                    handleOpen={() => openModal(buttonText)}
                    heading={showContactModal ? 'Contact the team' : 'Notify me'}
                    showCheckbox={showContactModal ? true : false}
                    buttonText={buttonText}
                />
            )}


        </section>


    )
}

export default Partnership
