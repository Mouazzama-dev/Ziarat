import React, { ReactNode } from 'react'

interface ButtonProps {
    text: string;
    hasStroke?: boolean;
    hasLink?: boolean;
    onClick?: () => void;
    icon?: ReactNode;
}

const Button: React.FC<ButtonProps> = ({ text, hasStroke, hasLink, onClick, icon }) => {

    const buttonStyles = `sm:w-[172px] w-[298px] h-[46px] font-poppins flex justify-center cursor-pointer items-center text-white 
    rounded-md bg-btn_primary hover:bg-btn_primary_hover hover:ease-in transition duration-150 ${hasStroke ? `border-2 border-white bg-transparent hover:border-none hover:bg-btn_primary` : ''
        }`;

    return (
        <button className={buttonStyles} onClick={onClick}>
            {icon && <span className="mr-2">{icon}</span>}
            {text}
        </button>
    )
}

export default Button
