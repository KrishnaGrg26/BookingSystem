"use client";
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

const TravelForm = () => {
    const router = useRouter();
    const initialFormData = {
        name: '',
        dob: '',
        passportNumber: '',
        nationality: '',
        houseNumber: '',
        address: '',
        postalCode: '',
        from: 'Kathmandu, Nepal',
        to: 'Kathmandu, Nepal',
        date: '',
        time: '',
        seatType: 'Economy',
    };

    const [formData, setFormData] = useState(initialFormData);
    const [errors, setErrors] = useState({});

    useEffect(() => {
        if (formData.dob) {
            const today = new Date();
            const birthDate = new Date(formData.dob);
            let age = today.getFullYear() - birthDate.getFullYear();
            const monthDiff = today.getMonth() - birthDate.getMonth();
            if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
                age--;
            }
            setFormData((prevFormData) => ({ ...prevFormData, age: age.toString() }));
        }
    }, [formData.dob]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
    };

    const validate = () => {
        const newErrors = {
            name: formData.name ? '' : 'Name is required.',
            dob: formData.dob ? '' : 'Date of birth is required.',
            passportNumber: formData.passportNumber ? '' : 'Passport number is required.',
            nationality: formData.nationality ? '' : 'Nationality is required.',
            houseNumber: formData.houseNumber ? '' : 'House number is required.',
            address: formData.address ? '' : 'Address is required.',
            postalCode: formData.postalCode ? '' : 'Postal code is required.',
            date: formData.date ? '' : 'Date is required.',
            time: formData.time ? '' : 'Time is required.',
        };

        setErrors(newErrors);

        return Object.values(newErrors).every((x) => x === '');
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (validate()) {
            localStorage.setItem('formData', JSON.stringify(formData));
            router.push('/seatplan');
        }
    };

    return (
        <div className="min-h-auto flex items-center justify-center flex-col mb-4">
            <div className='border-solid border-2 border-gray-300 rounded-md shadow-xl p-6 mt-4'>
                <h1 className='text-4xl font-semibold pb-12 pt-2 text-center'>Fill the form to book your flight.</h1>
                <form onSubmit={handleSubmit} className="space-y-8">
                    <div className="space-y-6">
                        <div className="flex gap-4">
                            <div className="flex-1">
                                <label htmlFor="name" className="block text-lg font-medium text-gray-700">
                                    Name
                                </label>
                                <input
                                    type="text"
                                    name="name"
                                    id="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-lg"
                                />
                                {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
                            </div>
                            <div className="flex-1">
                                <label htmlFor="dob" className="block text-lg font-medium text-gray-700">
                                    Date of Birth
                                </label>
                                <input
                                    type="date"
                                    name="dob"
                                    id="dob"
                                    value={formData.dob}
                                    onChange={handleChange}
                                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-lg"
                                />
                                {errors.dob && <p className="text-red-500 text-xs mt-1">{errors.dob}</p>}
                            </div>
                            <div className="flex-1">
                                <label htmlFor="age" className="block text-lg font-medium text-gray-700">
                                    Age
                                </label>
                                <input
                                    type="text"
                                    name="age"
                                    id="age"
                                    value={formData.age || ''}
                                    readOnly
                                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-lg"
                                />
                            </div>
                        </div>

                        <div className="flex gap-4">
                            <div className="flex-1">
                                <label htmlFor="passportNumber" className="block text-lg font-medium text-gray-700">
                                    Passport Number
                                </label>
                                <input
                                    type="text"
                                    name="passportNumber"
                                    id="passportNumber"
                                    value={formData.passportNumber}
                                    onChange={handleChange}
                                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-lg"
                                />
                                {errors.passportNumber && <p className="text-red-500 text-xs mt-1">{errors.passportNumber}</p>}
                            </div>
                            <div className="flex-1">
                                <label htmlFor="nationality" className="block text-lg font-medium text-gray-700">
                                    Nationality
                                </label>
                                <input
                                    type="text"
                                    name="nationality"
                                    id="nationality"
                                    value={formData.nationality}
                                    onChange={handleChange}
                                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-lg"
                                />
                                {errors.nationality && <p className="text-red-500 text-xs mt-1">{errors.nationality}</p>}
                            </div>
                        </div>

                        <div className="flex gap-4">
                            <div className="flex-1">
                                <label htmlFor="houseNumber" className="block text-lg font-medium text-gray-700">
                                    House Number
                                </label>
                                <input
                                    type="text"
                                    name="houseNumber"
                                    id="houseNumber"
                                    value={formData.houseNumber}
                                    onChange={handleChange}
                                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-lg"
                                />
                                {errors.houseNumber && <p className="text-red-500 text-xs mt-1">{errors.houseNumber}</p>}
                            </div>
                            <div className="flex-1">
                                <label htmlFor="address" className="block text-lg font-medium text-gray-700">
                                    Address
                                </label>
                                <input
                                    type="text"
                                    name="address"
                                    id="address"
                                    value={formData.address}
                                    onChange={handleChange}
                                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-lg"
                                />
                                {errors.address && <p className="text-red-500 text-xs mt-1">{errors.address}</p>}
                            </div>
                            <div className="flex-1">
                                <label htmlFor="postalCode" className="block text-lg font-medium text-gray-700">
                                    Postal Code
                                </label>
                                <input
                                    type="text"
                                    name="postalCode"
                                    id="postalCode"
                                    value={formData.postalCode}
                                    onChange={handleChange}
                                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-lg"
                                />
                                {errors.postalCode && <p className="text-red-500 text-xs mt-1">{errors.postalCode}</p>}
                            </div>
                        </div>

                        <div className="flex gap-4">
                            <div className="flex-1">
                                <label htmlFor="from" className="block text-lg font-medium text-gray-700">
                                    From
                                </label>
                                <select
                                    name="from"
                                    id="from"
                                    value={formData.from}
                                    onChange={handleChange}
                                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-lg"
                                >
                                    <option value="Kathmandu, Nepal">Kathmandu, Nepal</option>
                                    <option value="Heathrow, England">Heathrow, England</option>
                                    <option value="New Delhi, India">New Delhi, India</option>
                                </select>
                            </div>
                            <div className="flex-1">
                                <label htmlFor="to" className="block text-lg font-medium text-gray-700">
                                    To
                                </label>
                                <select
                                    name="to"
                                    id="to"
                                    value={formData.to}
                                    onChange={handleChange}
                                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-lg"
                                >
                                    <option value="Kathmandu, Nepal">Kathmandu, Nepal</option>
                                    <option value="Heathrow, England">Heathrow, England</option>
                                    <option value="New Delhi, India">New Delhi, India</option>
                                </select>
                            </div>
                        </div>

                        <div className="flex gap-4">
                            <div className="flex-1">
                                <label htmlFor="date" className="block text-lg font-medium text-gray-700">
                                    Date
                                </label>
                                <input
                                    type="date"
                                    name="date"
                                    id="date"
                                    value={formData.date}
                                    onChange={handleChange}
                                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-lg"
                                />
                                {errors.date && <p className="text-red-500 text-xs mt-1">{errors.date}</p>}
                            </div>
                            <div className="flex-1">
                                <label htmlFor="time" className="block text-lg font-medium text-gray-700">
                                    Time
                                </label>
                                <input
                                    type="time"
                                    name="time"
                                    id="time"
                                    value={formData.time}
                                    onChange={handleChange}
                                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-lg"
                                />
                                {errors.time && <p className="text-red-500 text-xs mt-1">{errors.time}</p>}
                            </div>
                        </div>

                        <div className="flex gap-4">
                            <div className="flex-1">
                                <label htmlFor="seatType" className="block text-lg font-medium text-gray-700">
                                    Seat Type
                                </label>
                                <select
                                    name="seatType"
                                    id="seatType"
                                    value={formData.seatType}
                                    onChange={handleChange}
                                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-lg"
                                >
                                    <option value="First Class">First Class</option>
                                    <option value="Business Class">Business Class</option>
                                    <option value="Economy">Economy</option>
                                </select>
                            </div>
                        </div>
                    </div>

                    <div className='flex items-center justify-center mb-6'>
                        <button
                            type="submit"
                            className="inline-flex items-center px-4 py-2 border border-transparent text-lg font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                        >
                            Submit
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default TravelForm;
