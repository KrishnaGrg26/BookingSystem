export interface Place {
    id: number;
    name: string;
    image: string;
    details: string;
    fullDetails: string;
}

const places: Place[] = [
    {
        id: 1,
        name: "Eiffel Tower",
        image: "/places/place1.jpg",
        details: "An iconic symbol of France, located in Paris. Paris is beutiful",
        fullDetails: "The Eiffel Tower is a wrought-iron lattice tower on the Champ de Mars in Paris, France. It is named after the engineer Gustave Eiffel, whose company designed and built the tower."
    },
    {
        id: 2,
        name: "Great Wall of China",
        image: "/places/place2.jpg",
        details: "A historic wall spanning across northern China. China is a beautiful country.",
        fullDetails: "The Great Wall of China is a series of fortifications that were built across the northern borders of ancient Chinese states and Imperial China as protection against various nomadic groups from the Eurasian Steppe."
    },
    {
        id: 3,
        name: "Machu Picchu",
        image: "/places/place3.jpg",
        details: "An ancient Incan city located in Peru. Peru is a beautiful country.",
        fullDetails: "Machu Picchu is a 15th-century Inca citadel situated on a mountain ridge 2,430 meters (7,970 ft) above sea level. It is located in the Cusco Region, Urubamba Province, Machupicchu District in Peru."
    },
    {
        id: 4,
        name: "Statue of Liberty",
        image: "/places/place4.jpg",
        details: "A colossal neoclassical sculpture on Liberty Island in New York Harbor.",
        fullDetails: "The Statue of Liberty is a colossal neoclassical sculpture on Liberty Island in New York Harbor within New York City, in the United States. The copper statue, a gift from the people of France, was designed by French sculptor Frédéric Auguste Bartholdi."
    },
    {
        id: 5,
        name: "Colosseum",
        image: "/places/place5.jpg",
        details: "An ancient amphitheater in Rome, Italy. Italy is a beautiful country.",
        fullDetails: "The Colosseum is an oval amphitheatre in the center of the city of Rome, Italy. Built of travertine limestone, tuff (volcanic rock), and brick-faced concrete, it was the largest amphitheatre ever built at the time and held 50,000 to 80,000 spectators."
    },
    {
        id: 6,
        name: "Taj Mahal",
        image: "/places/place6.jpg",
        details: "A white marble mausoleum in Agra, India. India is a beautiful country.",
        fullDetails: "The Taj Mahal is an ivory-white marble mausoleum on the southern bank of the river Yamuna in the Indian city of Agra. It was commissioned in 1632 by the Mughal emperor Shah Jahan to house the tomb of his favorite wife, Mumtaz Mahal."
    },
    {
        id: 7,
        name: "Christ the Redeemer",
        image: "/places/place7.jpg",
        details: "A large statue of Jesus Christ in Rio de Janeiro, Brazil.",
        fullDetails: "Christ the Redeemer is an Art Deco statue of Jesus Christ in Rio de Janeiro, Brazil, created by French sculptor Paul Landowski and built by Brazilian engineer Heitor da Silva Costa, in collaboration with French engineer Albert Caquot."
    },
    {
        id: 8,
        name: "Sydney Opera House",
        image: "/places/place8.jpg",
        details: "A multi-venue performing arts centre in Sydney, Australia.",
        fullDetails: "The Sydney Opera House is a multi-venue performing arts centre at Sydney Harbour in Sydney, New South Wales, Australia. It is one of the 20th century's most famous and distinctive buildings."
    },

];

export default places;
