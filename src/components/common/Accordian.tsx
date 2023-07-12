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
            <Accordion open={open === accId} icon={<Icon id={accId} open={open} />}>
                <AccordionHeader onClick={() => handleOpen(accId)} className='text-white hover:text-borderDark'>
                    {question}
                </AccordionHeader>
                <AccordionBody className='text-dimWhite text-lg'>
                    {answer}
                </AccordionBody>
            </Accordion>
        </Fragment>
    )
}


export default Accordian