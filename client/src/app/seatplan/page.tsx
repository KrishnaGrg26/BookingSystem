"use client";
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

interface Seat {
    id: string;
    occupied: boolean;
    classType: 'firstClass' | 'businessClass' | 'economyClass';
}

const generateSeats = (): Seat[] => {
    const seats: Seat[] = [];

    // First Class: 1A-3D, 2 seats on each side with a gap in the middle
    for (let i = 1; i <= 3; i++) {
        seats.push({ id: `${i}A`, occupied: false, classType: 'firstClass' });
        seats.push({ id: `${i}B`, occupied: false, classType: 'firstClass' });
        seats.push({ id: `${i}C`, occupied: false, classType: 'firstClass' });
        seats.push({ id: `${i}D`, occupied: false, classType: 'firstClass' });
    }

    // Business Class: 4A-6F, 3 seats on each side with a gap in the middle
    for (let i = 4; i <= 6; i++) {
        seats.push({ id: `${i}A`, occupied: false, classType: 'businessClass' });
        seats.push({ id: `${i}B`, occupied: false, classType: 'businessClass' });
        seats.push({ id: `${i}C`, occupied: false, classType: 'businessClass' });
        seats.push({ id: `${i}D`, occupied: false, classType: 'businessClass' });
        seats.push({ id: `${i}E`, occupied: false, classType: 'businessClass' });
        seats.push({ id: `${i}F`, occupied: false, classType: 'businessClass' });
    }

    // Economy Class: 8A-20F, 3 seats on each side with a gap in the middle
    for (let i = 8; i <= 20; i++) {
        seats.push({ id: `${i}A`, occupied: false, classType: 'economyClass' });
        seats.push({ id: `${i}B`, occupied: false, classType: 'economyClass' });
        seats.push({ id: `${i}C`, occupied: false, classType: 'economyClass' });
        seats.push({ id: `${i}D`, occupied: false, classType: 'economyClass' });
        seats.push({ id: `${i}E`, occupied: false, classType: 'economyClass' });
        seats.push({ id: `${i}F`, occupied: false, classType: 'economyClass' });
    }

    return seats;
};

const SeatSelection: React.FC = () => {
    const router = useRouter();
    const [seats, setSeats] = useState<Seat[]>(generateSeats());
    const [selectedSeats, setSelectedSeats] = useState<string[]>([]);
    const [showWarning, setShowWarning] = useState<string | null>(null);
    const [age, setAge] = useState<number | null>(null);
    const [emergencySeat, setEmergencySeat] = useState<string | null>(null);

    useEffect(() => {
        const storedData = JSON.parse(localStorage.getItem('formData') || '{}');
        if (storedData.dob) {
            const birthDate = new Date(storedData.dob);
            const today = new Date();
            let userAge = today.getFullYear() - birthDate.getFullYear();
            const monthDiff = today.getMonth() - birthDate.getMonth();
            if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
                userAge--;
            }
            setAge(userAge);
        }
    }, []);

    const seatPrices = {
        firstClass: 800,
        businessClass: 600,
        economyClass: 400,
    };

    const handleSeatClick = (seatId: string) => {
        const seat = seats.find(seat => seat.id === seatId);

        // Check if the seat is occupied
        if (seat?.occupied) return;

        // Check if the seat is a middle seat and the user is trying to book it alone
        const middleSeats = ['B', 'E'];
        const seatLetter = seatId.slice(-1);
        if (selectedSeats.length === 0 && middleSeats.includes(seatLetter)) {
            setShowWarning('Solo travelers cannot book a middle seat. Please select other seats.');
            return;
        }

        // Check if the user is trying to book more than 6 seats
        if (selectedSeats.length >= 6) {
            setShowWarning('One Person can only book 6 seats at maximum. Please contact the airline for group bookings.');
            return;
        }

        // Check if the seat is in the emergency exit row
        const emergencyExitSeats = ['4A', '4B', '4C', '4D', '4E', '4F'];
        if (emergencyExitSeats.includes(seatId)) {
            setEmergencySeat(seatId);
            setShowWarning('This seat is in the emergency exit row. You must take responsibility in case of an emergency. Do you want to proceed?');
            return;
        }

        // Toggle seat selection
        toggleSeatSelection(seatId);
    };

    const toggleSeatSelection = (seatId: string) => {
        if (selectedSeats.includes(seatId)) {
            setSelectedSeats(selectedSeats.filter(id => id !== seatId));
        } else {
            setSelectedSeats([...selectedSeats, seatId]);
        }
    };

    const handleConfirmEmergencySeat = () => {
        if (emergencySeat) {
            toggleSeatSelection(emergencySeat);
            setEmergencySeat(null);
            setShowWarning(null);
        }
    };

    const handleBookSeats = () => {
        const updatedSeats = seats.map(seat =>
            selectedSeats.includes(seat.id) ? { ...seat, occupied: true } : seat
        );
        setSeats(updatedSeats);

        const reservedSeats = seats.filter(seat => selectedSeats.includes(seat.id));
        const totalPrice = reservedSeats.reduce((total, seat) => {
            return total + seatPrices[seat.classType];
        }, 0);

        const discount = age !== null && age < 15 ? totalPrice * 0.25 : 0;
        const finalPrice = totalPrice - discount;

        const bookingDetails = {
            seats: reservedSeats,
            totalPrice: finalPrice,
            discount: discount,
            totalAmount: totalPrice,
        };

        localStorage.setItem('bookingDetails', JSON.stringify(bookingDetails));
        router.push('/alldetails');
    };

    const renderRow = (row: number, seatsPerRow: number, gapAfter: number | null = null) => {
        const rowSeats = seats.filter(seat => seat.id.startsWith(row.toString()));
        return (
            <div key={row} className="grid grid-cols-8 gap-2">
                {rowSeats.slice(0, seatsPerRow / 2).map(seat => (
                    <div
                        key={seat.id}
                        className={`p-2 border rounded cursor-pointer text-center ${seat.occupied ? 'bg-red-500' : selectedSeats.includes(seat.id) ? 'bg-green-500' : 'bg-gray-200'
                            }`}
                        onClick={() => handleSeatClick(seat.id)}
                    >
                        {seat.id}
                    </div>
                ))}
                {gapAfter ? <div className="col-span-2"></div> : null}
                {rowSeats.slice(seatsPerRow / 2).map(seat => (
                    <div
                        key={seat.id}
                        className={`p-2 border rounded cursor-pointer text-center ${seat.occupied ? 'bg-red-500' : selectedSeats.includes(seat.id) ? 'bg-green-500' : 'bg-gray-200'
                            }`}
                        onClick={() => handleSeatClick(seat.id)}
                    >
                        {seat.id}
                    </div>
                ))}
            </div>
        );
    };

    return (
        <div className="flex flex-col items-center w-full">
            <h1 className="text-2xl font-bold mb-4">Select Your Seat</h1>
            <div className="mb-8">
                <h2 className="text-xl font-semibold mb-2 text-center">First Class</h2>

                {renderRow(3, 4, 2)}
            </div>
            <div className="mb-4">
                <div className="flex justify-between items-center w-full text-center p-2">
                    <span className="w-1/2 mr-32 bg-gray-300 p-2">Exit</span>&#09;
                    <span className="w-1/2 ml-32 bg-gray-300 p-2">Washroom</span>
                </div>
            </div>
            <div className="mb-4">
                <h2 className="text-xl font-semibold mb-2 text-center">Business Class</h2>
                {renderRow(4, 6, 3)}
                {renderRow(5, 6, 3)}
                {renderRow(6, 6, 3)}
            </div>
            <div className="mb-4">
                <div className="flex justify-between items-center w-full text-center p-2">
                    <span className="w-1/2 mr-32 bg-gray-300 p-2">Washroom</span>&#09;
                    <span className="w-1/2 ml-32 bg-gray-300 p-2">Washroom</span>
                </div>
            </div>
            <div className="mb-8">
                <h2 className="text-xl font-semibold mb-2 text-center">Economy Class</h2>
                {renderRow(8, 6, 3)}
                {renderRow(9, 6, 3)}
                {renderRow(10, 6, 3)}
                {renderRow(11, 6, 3)}
                {renderRow(12, 6, 3)}
                {renderRow(13, 6, 3)}
                {renderRow(14, 6, 3)}
                {renderRow(15, 6, 3)}
                {renderRow(16, 6, 3)}
                {renderRow(17, 6, 3)}
                {renderRow(18, 6, 3)}
                {renderRow(19, 6, 3)}
                {renderRow(20, 6, 3)}
            </div>
            <div className="mb-8">
                <div className="flex justify-between items-center w-full text-center p-2">
                    <span className="w-1/2 mr-32 bg-gray-300 p-2">Washroom</span>&#09;
                    <span className="w-1/2 ml-32 bg-gray-300 p-2">Washroom</span>
                </div>
            </div>
            {selectedSeats.length > 0 && (
                <div className="mt-4 border-solid border-2 border-gray-300 rounded-md shadow-xl p-8 mb-8">
                    <h2 className="text-xl font-bold mb-2">Booking Summary</h2>
                    <ul className="mb-4">
                        {selectedSeats.map((seatId, index) => {
                            const seat = seats.find(seat => seat.id === seatId);
                            return (
                                <li key={index} className="text-lg">
                                    {seat?.id} - {seat?.classType.charAt(0).toUpperCase() + seat?.classType.slice(1)} - ${seatPrices[seat!.classType]}
                                </li>
                            );
                        })}
                    </ul>
                    <p className="text-lg font-bold">
                        Total Price: ${selectedSeats.reduce((total, seatId) => {
                            const seat = seats.find(seat => seat.id === seatId);
                            return total + seatPrices[seat!.classType];
                        }, 0)}
                    </p>
                    {age !== null && age < 15 && (
                        <p className="text-lg font-bold text-red-500">
                            Discount Applied: ${selectedSeats.reduce((total, seatId) => {
                                const seat = seats.find(seat => seat.id === seatId);
                                return total + seatPrices[seat!.classType];
                            }, 0) * 0.25}
                        </p>
                    )}
                    <p className="text-lg font-bold">
                        Final Price: ${selectedSeats.reduce((total, seatId) => {
                            const seat = seats.find(seat => seat.id === seatId);
                            return total + seatPrices[seat!.classType];
                        }, 0) * (age !== null && age < 15 ? 0.75 : 1)}
                    </p>
                    <button
                        onClick={handleBookSeats}
                        className="mt-2 bg-blue-500 text-white px-4 py-2 rounded"
                    >
                        Book Seats
                    </button>
                </div>
            )}
            {showWarning && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
                    <div className="bg-white p-4 rounded shadow-lg">
                        <p className='text-xl font-bold py-4 px-2'>{showWarning}</p>
                        <div className='flex justify-center items-center w-full'>
                            {emergencySeat ? (
                                <button
                                    onClick={handleConfirmEmergencySeat}
                                    className="mt-2 bg-green-500 text-white px-4 py-2 rounded"
                                >
                                    Confirm
                                </button>
                            ) : (
                                <button
                                    onClick={() => setShowWarning(null)}
                                    className="mt-2 bg-red-500 text-white px-4 py-2 rounded"
                                >
                                    Close
                                </button>
                            )}
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default SeatSelection;
