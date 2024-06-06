import React, { useState } from 'react';
import Image from 'next/image';

interface FeedbackFormProps {
    onSubmit: (feedback: { name: string; email: string; message: string }) => void;
}

const FeedbackForm: React.FC<FeedbackFormProps> = ({ onSubmit }) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onSubmit({ name, email, message });
        setName('');
        setEmail('');
        setMessage('');
    };

    return (
        <div className='w-full flex items-center justify-center mb-6'>
            <div className='flex-1  flex items-center justify-center'>
                <Image
                    src="/feedback.png"
                    alt="Feedback"
                    width={500}
                    height={500}
                    className="rounded-full object-cover"
                />
            </div>
            <div className='flex-1  flex items-center justify-center flex-col '>

                <form onSubmit={handleSubmit} className="space-y-4 p-4 border rounded shadow-md">
                    <div>
                        <h2 className='font-bold text-3xl py-4'>Provide Your Feedback here.</h2>
                        <label className="block text-gray-700">Name:</label>
                        <input
                            type="text"
                            name="name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            className="mt-1 p-2 border border-gray-300 rounded w-full"
                        />
                    </div>
                    <div>
                        <label className="block text-gray-700">Email:</label>
                        <input
                            type="email"
                            name="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="mt-1 p-2 border border-gray-300 rounded w-full"
                        />
                    </div>
                    <div>
                        <label className="block text-gray-700">Feedback:</label>
                        <textarea
                            name="message"
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            className="mt-1 p-2 border border-gray-300 rounded w-full"
                        />
                    </div>
                    <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded w-full">
                        Submit
                    </button>
                </form>
            </div>
        </div>
    );
};

export default FeedbackForm;
