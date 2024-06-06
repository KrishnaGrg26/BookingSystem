import Link from 'next/link';
import places from '@/utils/places';

const Destination = () => {
    return (
        <div className="p-8">
            <h1 className="text-2xl font-bold mb-4">Popular Places</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 ">
                {places.map((place) => (
                    <div key={place.id} className="bg-white shadow-lg rounded-lg overflow-hidden flex flex-col items-center justify-center">
                        <img src={place.image} alt={place.name} className="w-full h-48 object-cover" />
                        <div className="p-4">
                            <h2 className="text-xl font-bold text-center">{place.name}</h2>
                            <p className="text-gray-600 text-center">{place.details}</p>
                            <Link href={`/destination/${place.id}`} className='flex items-center justify-center'>
                                <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded">Read More</button>
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Destination;
