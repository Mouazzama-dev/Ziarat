import React from 'react'


interface FeatureCardProps {
    index: number;
    img: any
    title: string;
    description: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ index, img, title, description }) => {
    return (
        <div className={`rounded overflow-hidden flex justify-center flex-col  items-center border ${index === 1 ? 'border-borderDark ' : 'border-none'} shadow-lg col-span-6 md:col-span-4`}>
            <div className="px-6 ml-3 mt-1 w-[80px] h-[80px] flex items-center bg-circle-gradient rounded-full">
                <img src={img} />
            </div>

            <div className="px-6 py-4  flex justify-center items-center flex-col">
                <div className={`font-bold text-xl  mb-2 ${index === 1 ? 'text-white' : 'text-dimGray'}`}>{title}</div>
                <p className={`${index === 1 ? 'text-lightGray' : 'text-dimGrayText'} text-base text-center`}>
                    {description}
                </p>
            </div>
        </div>

    )
}

export default FeatureCard
