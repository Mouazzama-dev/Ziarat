import React, { useState } from 'react'
import { Button, Card, CardFooter, Checkbox, Dialog, DialogBody, DialogHeader, Input, Textarea, Typography, } from '@material-tailwind/react'
import { ModalProps } from '../../constants/constants'
import { addDoc, collection } from 'firebase/firestore'
import { db } from '../../config/firebase'



const ContactModal: React.FC<ModalProps> = ({ isOpen, handleOpen, heading, showCheckbox, buttonText }) => {
    const [email, setEmail] = useState<string>('')
    const [message, setMessage] = useState<string>('')

    const userCollectionRef = collection(db, 'userMessages')


    /* TODOs: 
        - Modal button will have a loader.
        - Loading stops Modal should display "Thankyou for Contact"
     */

    const onSubmit = async () => {
        try {
            await addDoc(userCollectionRef, { email, message })

        } catch (error) {
            console.error(error)
        }
    }


    return (
        <Dialog
            size="md"
            open={isOpen}
            handler={handleOpen}
            className="bg-transparent drop-shadow-lg"

        >
            <Card className="mx-auto max-w-[24rem] bg-black-gradient-2 ">
                <DialogHeader className='flex justify-center items-center font-poppins text-white'  >{heading}</DialogHeader>
                <DialogBody className="flex flex-col gap-4" >
                    <Input label="Email" size="lg" color={'blue-gray'} className='text-white' required name='email' onChange={(e) => setEmail(e.target.value)} value={email} />

                    <Textarea label="Message" color={'blue-gray'} className='text-white' name='message' onChange={(e) => setMessage(e.target.value)} value={message} />
                    {showCheckbox && (

                        <Checkbox
                            color='amber'
                            label={

                                <Typography variant="small" className="font-normal text-dimWhite">
                                    {`Keep me in the loop! occasional offers (optional)`}
                                </Typography>

                            }

                        />
                    )}

                </DialogBody>
                <CardFooter className="pt-0">
                    <Button variant={'filled'} color={'white'} size="lg" onClick={onSubmit} fullWidth>
                        {buttonText}
                    </Button>
                </CardFooter>
            </Card>
        </Dialog >
    )
}

export default ContactModal
