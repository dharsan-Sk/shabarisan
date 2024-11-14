import calander from "./calander.jpg"
function Page6(){
    return(<div className="of">
        <div className="container">
            <div className='h100px'></div>
            <div className="row bgr">
                <div className="col-6 "> <img className="mt-5 m100" src={calander} height={290} width={300} alt="" /></div>
                <div className="col-6">
                    <div className="mt-5">
                        <p>TIME TABLE</p>
                        <p style={{ lineHeight: '1.5'}}></p>
                        <h1>Appointment <br /> hedules</h1>
                        <p style={{ lineHeight: '1.5' }}></p>
                        <h6 className="cg">Apparently we had reached a great height in the <br />
                        great effort to adjust the daily classes he no longer collapsed <br />
                        immediately into bed</h6>
                        <p style={{ lineHeight: '1.5' }}></p>
                        <button className="button2 p-1"style={{ width: '110px', }}> shedule</button>
                        
                    </div>
                </div>
                <div className='h100px'></div>
                
            </div>
            
        </div></div>
    )
}

export default Page6;