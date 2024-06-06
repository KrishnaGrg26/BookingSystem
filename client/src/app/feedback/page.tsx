"use client";

import React, { useEffect, useState } from 'react';
import FeedbackSlider from '@/components/FeedbackSlider';
import feedbackData from '@/utils/feedbackData';
import FeedbackForm from '@/components/FeedbackForm';

interface Feedback {
    id: number;
    name: string;
    email: string;
    message: string;
    image: string;
}

const FeedbackPage: React.FC = () => {
    const [feedbacks, setFeedbacks] = useState<Feedback[]>([]);

    useEffect(() => {
        // Load feedback data from the local JSON file
        setFeedbacks(feedbackData);
    }, []);

    const handleFeedbackSubmit = async (feedback: { name: string; email: string; message: string }) => {
        const newFeedback = {
            id: feedbacks.length + 1,
            ...feedback,
            image: 'https://via.placeholder.com/150'
        };
        setFeedbacks([...feedbacks, newFeedback]);
    };

    return (
        <div className="px-32 space-y-8">
            <h1 className="text-4xl font-bold text-center py-4">What our Clients Says about us !</h1>
            <FeedbackSlider feedbacks={feedbacks} />
            <FeedbackForm onSubmit={handleFeedbackSubmit} />
        </div>
    );
};

export default FeedbackPage;
