import React, { useState } from 'react'
import dummyImg from '../assets/Ziarat Logo-08.png 21-09-27-834.png'
import Button from './common/Button'
import Modal from './common/Modal';


interface PartnershipProps {
    icon: JSX.Element;
    title: string;
    description: string;
    buttonText: string;
}

const PartnershipCard: React.FC<PartnershipProps> = ({ icon, title, description, buttonText }) => {
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
        <section id="customers" className="col-span-6  overflow-hidden flex flex-col items-start justify-center">
            <div className="px-6 w-32 h-[100px] flex items-center">
                {icon}
            </div>
            <div className="px-6 py-4 flex flex-col items-start justify-center">
                <div className="font-bold text-4xl mb-2 text-white">{title}</div>
                <p className="text-textColor text-base text-start">
                    {description}
                </p>
            </div>
            <div className='px-6  py-4 flex justify-center items-center  max-w-[200px]'>
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

export default PartnershipCard
