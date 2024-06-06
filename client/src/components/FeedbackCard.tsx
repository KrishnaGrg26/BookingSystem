import React from 'react';
import Image from 'next/image';

interface FeedbackCardProps {
    name: string;
    email: string;
    message: string;
    image: string;
}

const FeedbackCard: React.FC<FeedbackCardProps> = ({ name, email, message, image }) => {
    return (
        <div className="bg-white px-6  py-8 rounded shadow-md space-y-2 flex flex-col items-center justify-center">
            <div className="w-[300px] h-auto mx-auto relative flex flex-col items-center justify-center">
                <Image
                    src={image}
                    alt={name}
                    width={50}
                    height={50}
                    className="rounded-full object-cover"

                />
            </div>
            <h2 className="text-xl font-semibold text-center">"{name}"</h2>
            <p className="text-gray-700 text-center">{message}</p>
        </div>
    );
};

export default FeedbackCard;
