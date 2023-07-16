import React from 'react'


interface FeatureCardProps {
    icon: JSX.Element
    title: string;
    description: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description }) => {
    return (
        <div className="rounded overflow-hidden flex justify-center flex-col items-start border border-borderLight shadow-lg col-span-6 md:col-span-4">
            <div className="px-6 ml-3 mt-1 w-[90px] h-[80px] flex items-center bg-iconBg/20 rounded-full">
                {icon}
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
