

import React from 'react';
import travelData from "@/utils/travelData"

const DisplayTravelData = () => {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center p-4">
            <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-6xl">
                <h1 className="text-3xl font-bold mb-4">Travel Data</h1>
                <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                        <tr>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Image</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Phone Number</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">From</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">To</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                        </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                        {travelData.map((traveler) => (
                            <tr key={traveler.id}>
                                <td className="px-6 py-4 whitespace-nowrap">
                                    <img src={traveler.image} alt={traveler.name} className="w-16 h-16 rounded-full" />
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{traveler.name}</td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{traveler.phoneNumber}</td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{traveler.from}</td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{traveler.to}</td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                                    <button
                                        className="bg-green-500 text-white px-3 py-1 rounded mr-2"
                                    >
                                        Edit
                                    </button>
                                    <button
                                        className="bg-red-500 text-white px-3 py-1 rounded"
                                    >
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default DisplayTravelData;