import LocationComponent from "~/components/LocationComponent";

export interface Location {
    id: number,
    title: string,
    image: string,
    address: string,
    telephoneNumber: string,
    mapLink: string,
}

const locationsData: Location[] = [
    {
        id: 0,
        title: 'Հարսի տուն',
        image: "2776786976.jpg",
        address: 'Վաղարշապատ, Չարենց փողոց, 15',
        telephoneNumber: '099 999999',
        mapLink: 'string',
    },
    {
        id: 1,
        title: 'Հռիփսիմե եկեղեցի',
        image: "0b44886a-4ebd-11ec-95d5-1e04f738edcf.800x600.jpg",
        address: 'Մեսրոպ Մաշտոց 1',
        telephoneNumber: '099 999999',
        mapLink: 'string',
    },
    {
        id: 2,
        title: 'Փեսայի տուն',
        image: "morgan-blake-7-1024x732.webp",
        address: 'Վաղարշապատ, Մյասնիկյան փողոց, 12',
        telephoneNumber: '099 999999',
        mapLink: 'string',
    },
    {
        id: 3,
        title: 'Ռեստորան Նոր Դվին',
        image: "82526439_225698741783968_9124258773398384256_n.jpg",
        address: 'M-3 մայրուղի, 12',
        telephoneNumber: '099 999999',
        mapLink: 'string',
    },
];


export default function Locations() {
    return (
        <>
            {locationsData.map((location) => <LocationComponent key={location.id} location={location}  />)}
        </>
    );
}
