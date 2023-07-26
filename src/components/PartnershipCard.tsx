import React, { useState } from 'react'
import Button from './common/Button'
import Modal from './common/Modal';


interface PartnershipProps {
    title: string;
    description: string;
    buttonText: string;
}

const PartnershipCard: React.FC<PartnershipProps> = ({ title, description, buttonText }) => {
    const [showNotifModal, setShowNotifModal] = useState<boolean>(false)
    const [showContactModal, setShowContactModal] = useState<boolean>(false)


    const openModal = (buttonText: string) => {
        if (buttonText === 'Contact the Team') {
            setShowContactModal((show) => !show)
        } else if (buttonText === 'Notify Me') {
            setShowNotifModal((show) => !show)
        }

    }

    return (
        <section id="customers" className={`col-span-6 bg-purple-gradient py-6 overflow-hidden flex flex-col items-start justify-center`}>

            <div className="px-6 py-4 flex flex-col items-start justify-center">
                <div className="font-bold text-4xl mb-2 text-white">{title}</div>
                <p className="text-textColor text-base text-start">
                    {description}
                </p>
            </div>
            <div className='px-6  py-4 flex  w-full justify-end items-center '>
                <Button text={buttonText} onClick={() => openModal(buttonText)} />
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

export default PartnershipCard
