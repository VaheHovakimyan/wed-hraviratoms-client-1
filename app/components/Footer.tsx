

export default function Footer() {
    return (
        <div className="flex flex-col gap-2 justify-center items-center py-20">
            <h2 className="pb-4" style={{
                margin: '0 auto',
                borderBottom: '1px solid black',
                width:'120px',
                textAlign: 'center',
                fontSize: '28px',
            }}>H & L</h2>
            <p className="text-center"> 24.02.2025</p>
        </div>
    );
}
