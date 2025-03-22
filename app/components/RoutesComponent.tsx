import {Link} from "react-router";

export default function RoutesComponent() {
    return (
        <div className="flex flex-col gap-2 justify-center items-center pt-20 pb-5">
            <Link to="/" style={{width:'100%', marginLeft:'auto', marginRight:'auto'}}>
                <h2 style={{
                    width: '100%',
                    margin: 'auto',
                    borderTop: '1px solid black',
                    padding: '8px',
                    textAlign: 'center',
                    maxWidth: '300px',
                    textDecoration: 'underline',
                }}>Home</h2>
            </Link>
            <Link to="/locations" style={{width:'100%'}}>
                <h2 style={{
                    width: '100%',
                    margin: 'auto',
                    borderTop: '1px solid black',
                    borderBottom: '1px solid black',
                    padding: '8px',
                    textAlign: 'center',
                    maxWidth: '300px'
                }}>Locations</h2>
            </Link>
        </div>
    );
}
