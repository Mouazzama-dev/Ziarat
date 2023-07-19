import React, { ReactNode } from 'react'
import { socialLinks } from '../../constants/constants';

interface ButtonProps {
    text: string;
    hasStroke?: boolean;
    hasLink?: boolean;
    onClick?: () => void;
    icon?: ReactNode;
    fullWidth?: boolean;
}

const Button: React.FC<ButtonProps> = ({ text, hasStroke, hasLink, onClick, icon, fullWidth }) => {

    const buttonStyles = ` ${fullWidth ? 'w-full' : 'w-[172px]'}  h-[46px] font-poppins flex justify-center cursor-pointer items-center text-white 
    rounded-md bg-btn_primary hover:bg-btn_primary_hover hover:ease-in transition duration-150 ${hasStroke ? `border-2 border-white bg-transparent hover:border-none hover:bg-btn_primary` : ''
        }`;

    return hasLink ? (
        <a className={buttonStyles} href={socialLinks[1].url} target='_blank'>
            {icon && <span className="mr-2">{icon}</span>}
            {text}
        </a>
    ) : (
        <button className={buttonStyles} onClick={onClick}>
            {icon && <span className="mr-2">{icon}</span>}
            {text}
        </button>
    );
}

export default Button
