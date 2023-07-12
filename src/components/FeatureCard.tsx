import React from 'react'
import dummyImg from '../assets/Ziarat Logo-08.png 21-09-27-834.png'


interface FeatureCardProps {
    image: string;
    title: string;
    description: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ image, title, description }) => {
    return (
        <div className="rounded overflow-hidden flex justify-center flex-col items-start border border-borderLight shadow-lg col-span-2 md:col-span-1">
            <div className="px-6">
                <img className="w-[100px] object-contain" src={image} alt="feature img" />
            </div>

            <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2 text-white">{title}</div>
                <p className="text-textColor text-base">
                    {description}
                </p>
            </div>
        </div>

    )
}

export default FeatureCard
