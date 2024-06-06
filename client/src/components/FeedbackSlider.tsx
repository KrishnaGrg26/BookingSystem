import React, { useRef } from 'react';
import FeedbackCard from './FeedbackCard';
import { ArrowLeft } from 'lucide-react';
import { ArrowRight } from 'lucide-react';

interface Feedback {
    id: number;
    name: string;
    email: string;
    message: string;
    image: string;
}

interface FeedbackSliderProps {
    feedbacks: Feedback[];
}

const FeedbackSlider: React.FC<FeedbackSliderProps> = ({ feedbacks }) => {
    const sliderRef = useRef<HTMLDivElement>(null);

    const scrollLeft = () => {
        if (sliderRef.current) {
            sliderRef.current.scrollBy({ left: -300, behavior: 'smooth' });
        }
    };

    const scrollRight = () => {
        if (sliderRef.current) {
            sliderRef.current.scrollBy({ left: 300, behavior: 'smooth' });
        }
    };

    return (
        <div className="relative">
            <button
                onClick={scrollLeft}
                className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 p-2 bg-gray-200 rounded-full shadow-md focus:outline-none"
            >
                <ArrowLeft />
            </button>
            <div ref={sliderRef} className="flex overflow-x-hidden space-x-4 p-4">
                {feedbacks.map((feedback) => (
                    <FeedbackCard key={feedback.id} {...feedback} />
                ))}
            </div>
            <button
                onClick={scrollRight}
                className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 p-2 bg-gray-200 rounded-full shadow-md focus:outline-none"
            >
                <ArrowRight />
            </button>
        </div>
    );
};

export default FeedbackSlider;
