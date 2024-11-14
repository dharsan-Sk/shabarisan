import { GiByzantinTemple } from "react-icons/gi";
import Docter from "./docter.jpg"
function Page5(){
    return(<div className="of">
        <div className=" container">
            <div className='h100px'></div>
            <div className="row">
                <div className="col-12 col-sm-6">
                    <p className="cr">FEATURES</p>
                    <p style={{ lineHeight: '1.5' }}></p>
                    <h2>our  speciality</h2>
                    <p style={{ lineHeight: '1.5' }}></p>
                    <p>Though the gravity still dragged at him, his muscels <br />
                    were making grate efforts to adjust </p>
                    <p style={{ lineHeight: '1.5' }}></p>
                    
                    
                    
                </div>
                <div className="col-12 col-sm-6 absolute pa"><img src={Docter} alt=""  height={390} width={500}/></div>
            </div>
            <div className="relative bgy row"style={{ width: '1250px', }}><p style={{ lineHeight: '1.5' }}></p>
                        <div className="col-1 mt-4"><GiByzantinTemple size={50}/></div>
                        <div className="col-10 mt-5">
                            <h5>online appoinment</h5>
                            <p className="cg">What looked like a small patch of purpul <br />
                            grass, above five feet square, was moving</p>
                             <button className="button1  mb-5">Read more</button>
                        </div>
                    </div>
        </div></div>
    )
}

export default Page5;