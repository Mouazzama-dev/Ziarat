import React, { Fragment, useState } from 'react'
import { Accordion, AccordionBody, AccordionHeader } from '@material-tailwind/react';
import Icon from './Icon';



interface AccordionProps {
    accId: number;
    question: string;
    answer?: string;

}


const Accordian: React.FC<AccordionProps> = ({ accId, question, answer }) => {

    const [open, setOpen] = useState(0);

    const handleOpen = (value: number) => {
        setOpen(open === value ? 0 : value);
    };
    return (
        <Fragment>
            <Accordion className={`px-3 bg-purple-gradient`} open={open === accId} icon={<Icon id={accId} open={open} />}>
                <AccordionHeader onClick={() => handleOpen(accId)} className='text-dimGray hover:text-lightGray outline-none'>
                    {question}
                </AccordionHeader>
                <AccordionBody className='text-dimGray text-lg'>
                    {answer}
                </AccordionBody>
            </Accordion>
        </Fragment>
    )
}


export default Accordian