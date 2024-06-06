"use client";

import { useParams } from 'next/navigation';
import places from '@/utils/places';
import Image from 'next/image';
import { useState } from 'react';




const Destination = () => {
    const { id } = useParams();

    const place = places.find((place) => place.id === Number(id));

    if (!place) {
        return <div>Place not found</div>;
    }


    return (
        <div className="px-16 w-full flex py-8">
            <div className='flex-1 flex items-center justify-center flex-col w-[75%]'>
                <h1 className="text-2xl font-bold mb-4">{place.name}</h1>
                <Image src={place.image} alt={place.name} className="w-full h-96 object-cover mb-4 " style={{ width: '75%', height: 'auto', borderRadius: "20px" }} width={256} height={256} />
                <p className="text-gray-600 text-center p-12">{place.fullDetails}</p>
            </div>

            <div className='flex-1 flex items-center justify-center p-4'>
                <div className=" w-full flex flex-wrap gap-10">
                    <Image src="/places/place07.jpg" alt={place.name} className="w-full h-96 object-cover mb-4 " style={{ width: '40%', height: 'auto', borderRadius: "20px" }} width={256} height={256} />
                    <Image src="/places/place08.webp" alt={place.name} className="w-full h-96 object-cover mb-4 " style={{ width: '40%', height: 'auto', borderRadius: "20px" }} width={256} height={256} />
                    <Image src="/places/place09.webp" alt={place.name} className="w-full h-96 object-cover mb-4 " style={{ width: '40%', height: 'auto', borderRadius: "20px" }} width={256} height={256} />
                    <Image src="/places/place10.jpg" alt={place.name} className="w-full h-96 object-cover mb-4 " style={{ width: '40%', height: 'auto', borderRadius: "20px" }} width={256} height={256} />

                </div>
            </div>
        </div>
    );
};

export default Destination;
