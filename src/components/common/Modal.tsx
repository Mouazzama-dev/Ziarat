import React, { useState } from 'react'
import { Button, Card, CardFooter, Checkbox, Dialog, DialogBody, DialogHeader, Input, Spinner, Textarea, Typography, } from '@material-tailwind/react'
import { ModalProps } from '../../constants/constants'
import { addDoc, collection } from 'firebase/firestore'
import { db } from '../../config/firebase'



const ContactModal: React.FC<ModalProps> = ({ isOpen, handleOpen, heading, showCheckbox, buttonText }) => {
    const [email, setEmail] = useState<string>('')
    const [message, setMessage] = useState<string>('')
    const [loading, setLoading] = useState<boolean>(false)
    const [formSubmit, setFormSubmit] = useState<boolean>(false);

    const userCollectionRef = collection(db, 'userMessages')



    const onSubmit = async () => {
        try {
            setLoading(true)
            const submitted = await addDoc(userCollectionRef, { email, message })
            if (submitted) {
                setLoading(false)
                setFormSubmit(true)
            }

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
                {!formSubmit ? (
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
                        <CardFooter className="p-0">
                            <Button variant={'filled'} color={'white'} size="lg" fullWidth onClick={onSubmit} className='flex justify-center items-center' >
                                {loading ? (<Spinner />) : (buttonText)}
                            </Button>
                        </CardFooter>
                    </DialogBody>
                ) : (
                    <DialogBody className="flex flex-col justify-center items-center" >
                        <Typography variant="h5" className=" text-white font-bold bg-borderDark p-2 text-center rounded-md border border-solid border-borderDark">
                            {`Thank you! Your data has been submitted`}
                        </Typography>
                    </DialogBody>
                )}
            </Card>
        </Dialog >
    )
}

export default ContactModal
