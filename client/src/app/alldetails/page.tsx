"use client";
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

const AllDetails = () => {
    const [formData, setFormData] = useState(null);
    const [bookingDetails, setBookingDetails] = useState(null);
    const router = useRouter();

    useEffect(() => {
        const storedFormData = JSON.parse(localStorage.getItem('formData') || '{}');
        const storedBookingDetails = JSON.parse(localStorage.getItem('bookingDetails') || '{}');
        setFormData(storedFormData);
        setBookingDetails(storedBookingDetails);
    }, []);

    const handleCancel = () => {
        localStorage.clear();
        router.push('/'); // Redirect to home or form page
    };

    if (!formData || !bookingDetails) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <p className="text-lg">No details available. Please submit the form first.</p>
            </div>
        );
    }

    return (
        <div className="min-h-auto flex flex-col items-center justify-center p-4">
            <div className="bg-white px-12 py-6 rounded-lg shadow-xl w-full max-w-3xl">
                <h1 className="text-3xl font-bold mb-4 text-center ">All Details</h1>
                <div className='flex w-full '>
                    <div className="space-y-2 mb-4 flex-1">
                        <h2 className="text-2xl font-bold mb-2">Travel Information</h2>
                        <p className="text-lg"><strong>Name:</strong> {formData.name}</p>
                        <p className="text-lg"><strong>Date of Birth:</strong> {formData.dob}</p>
                        <p className="text-lg"><strong>Age:</strong> {formData.age}</p>
                        <p className="text-lg"><strong>Passport Number:</strong> {formData.passportNumber}</p>
                        <p className="text-lg"><strong>Nationality:</strong> {formData.nationality}</p>
                        <p className="text-lg"><strong>House Number:</strong> {formData.houseNumber}</p>
                        <p className="text-lg"><strong>Address:</strong> {formData.address}</p>
                        <p className="text-lg"><strong>Postal Code:</strong> {formData.postalCode}</p>
                        <p className="text-lg"><strong>From:</strong> {formData.from}</p>
                        <p className="text-lg"><strong>To:</strong> {formData.to}</p>
                        <p className="text-lg"><strong>Date:</strong> {formData.date}</p>
                        <p className="text-lg"><strong>Time:</strong> {formData.time}</p>
                        <p className="text-lg"><strong>Seat Type:</strong> {formData.seatType}</p>
                    </div>
                    <div className="space-y-2 mb-4 flex-1">
                        <h2 className="text-2xl font-bold mb-2">Booking Details</h2>
                        <p className="text-lg"><strong>Total Amount:</strong> ${bookingDetails.totalAmount}</p>
                        <p className="text-lg"><strong>Discount:</strong> ${bookingDetails.discount}</p>
                        <p className="text-lg"><strong>Final Price:</strong> ${bookingDetails.totalPrice}</p>
                        <h3 className="text-xl font-bold mb-2">Reserved Seats</h3>
                        <ul className="list-disc pl-6">
                            {bookingDetails.seats.map((seat, index) => (
                                <li key={index} className="text-lg">
                                    {seat.id} - {seat.classType.charAt(0).toUpperCase() + seat.classType.slice(1)}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>



                <div className='flex w-full justify-center items-center'>
                    <button
                        onClick={handleCancel}
                        className="mt-4 bg-red-500 text-white px-4 py-2 rounded"
                    >
                        Cancel Now
                    </button>
                </div>
            </div>
        </div>
    );
};

export default AllDetails;
