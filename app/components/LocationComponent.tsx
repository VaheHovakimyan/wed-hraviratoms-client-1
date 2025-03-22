import type {Location} from "~/routes/locations";


export default function LocationComponent({location}: {location: Location}) {
    const {title, image, address, telephoneNumber, mapLink} = location;

    return (
        <div className="flex flex-col gap-5 justify-center items-center py-20">
            <h2 className="uppercase" style={{
                letterSpacing: '1.8px',
                fontSize: '28px',
            }}>{title}</h2>
            <img id="imges" src={image} alt="location_image"/>
            <h2>{address}</h2>
            <p style={{
                letterSpacing: '1.8px',
                fontSize: '18px',
            }}>{telephoneNumber}</p>
            <a href={`/`}>
                <button style={{
                    width: '150px',
                    padding: '10px',
                    background: 'green',
                    color: 'white',
                    borderRadius: '8px',
                    border: 'none',
                    backgroundColor: '#217180',
                }}>Քարտեզ</button>
            </a>
        </div>
    );
}
