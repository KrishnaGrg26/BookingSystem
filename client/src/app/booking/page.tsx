"use client";
import { useState, ChangeEvent, FormEvent } from 'react';
import places from '@/utils/places';
import Link from 'next/link';

interface Place {
    id: number;
    name: string;
}

const Book: React.FC = () => {
    const [name, setName] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [contactNumber, setContactNumber] = useState<string>('');
    const [address, setAddress] = useState<string>('');
    const [destination, setDestination] = useState<string>('');
    const [date, setDate] = useState<string>('');
    const [seatClass, setSeatClass] = useState<string>('Economy');
    const [from, setFrom] = useState<string>('');

    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        switch (name) {
            case 'name':
                setName(value);
                break;
            case 'email':
                setEmail(value);
                break;
            case 'contactNumber':
                setContactNumber(value);
                break;
            case 'address':
                setAddress(value);
                break;
            case 'destination':
                setDestination(value);
                break;
            case 'date':
                setDate(value);
                break;
            case 'seatClass':
                setSeatClass(value);
                break;
            case 'from':
                setFrom(value);
                break;
            default:
                break;
        }
    };

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        const bookingData = { name, email, contactNumber, address, destination, date, seatClass, from };
        const response = await fetch('/api/booking', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(bookingData),
        });
        if (response.ok) {
            alert('Booking submitted successfully!');
        } else {
            alert('Failed to submit booking.');
        }
    };

    return (
        <div className="px-40 py-8 flex items-center justify-center flex-col ">
            <div className='flex justify-between items-center'>
                <h1 className="text-2xl font-bold mb-2">Book Your Trip</h1>
                <div className='flex items-center'>
                    <Link href='/personalDetail' > Book your Seat </Link>
                </div>
            </div>
            <form onSubmit={handleSubmit} className="space-y-4 w-[80%]">
                <div>
                    <label className="block text-gray-700">Name:</label>
                    <input
                        type="text"
                        name="name"
                        value={name}
                        onChange={handleChange}
                        className="mt-1 p-2 border border-gray-300 rounded w-full"
                    />
                </div>
                <div>
                    <label className="block text-gray-700">Email:</label>
                    <input
                        type="email"
                        name="email"
                        value={email}
                        onChange={handleChange}
                        className="mt-1 p-2 border border-gray-300 rounded w-full"
                    />
                </div>
                <div>
                    <label className="block text-gray-700">Contact Number:</label>
                    <input
                        type="text"
                        name="contactNumber"
                        value={contactNumber}
                        onChange={handleChange}
                        className="mt-1 p-2 border border-gray-300 rounded w-full"
                    />
                </div>
                <div>
                    <label className="block text-gray-700">Contact Address:</label>
                    <input
                        type="text"
                        name="address"
                        value={address}
                        onChange={handleChange}
                        className="mt-1 p-2 border border-gray-300 rounded w-full"
                    />
                </div>
                <div className="flex space-x-4">
                    <div className="flex-1">
                        <label className="block text-gray-700">From:</label>
                        <select
                            name="from"
                            value={from}
                            onChange={handleChange}
                            className="mt-1 p-2 border border-gray-300 rounded w-full"
                        >
                            <option value="">Select a departure location</option>
                            <option value="Kathmandu, Nepal">Kathmandu, Nepal</option>
                            <option value="Heathrow, London">Heathrow, London</option>
                            <option value="New Delhi, India">New Delhi, India</option>
                        </select>
                    </div>
                    <div className="flex-1">
                        <label className="block text-gray-700">Destination:</label>
                        <select
                            name="destination"
                            value={destination}
                            onChange={handleChange}
                            className="mt-1 p-2 border border-gray-300 rounded w-full"
                        >
                            <option value="">Select a destination</option>
                            {places.map((place: Place) => (
                                <option key={place.id} value={place.name}>
                                    {place.name}
                                </option>
                            ))}
                        </select>
                    </div>
                </div>
                <div>
                    <label className="block text-gray-700">Date:</label>
                    <input
                        type="date"
                        name="date"
                        value={date}
                        onChange={handleChange}
                        className="mt-1 p-2 border border-gray-300 rounded w-full"
                    />
                </div>
                <div>
                    <label className="block text-gray-700">Seat Class:</label>
                    <select
                        name="seatClass"
                        value={seatClass}
                        onChange={handleChange}
                        className="mt-1 p-2 border border-gray-300 rounded w-full"
                    >
                        <option value="Business">Business Class</option>
                        <option value="First">First Class</option>
                        <option value="Economy">Economy Class</option>
                    </select>
                </div>
                <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded w-full">
                    Submit
                </button>
            </form>
        </div>
    );
};

export default Book;
