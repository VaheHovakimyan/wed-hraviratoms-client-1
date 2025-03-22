import {Link} from "react-router";
import main_image from '../../public/Dana-Whitley3.jpg';

export function Welcome() {
    return (
        <div className="flex flex-col items-center gap-5 m-auto p-16">
            <img src={main_image}  alt="main_image"/>
            <h1 className='text-5xl' style={{
                fontFamily:  "Lato",
                fontWeight: 300,
                fontStyle: 'normal',
                fontSize: '48px',
                letterSpacing: '1.8px',
                textAlign: 'center'
            }}>HAMLET <br/>
                & <br/>
                LIANNA
            </h1>
        </div>
    );
}