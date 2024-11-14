import a from "./1.jpeg"
import b from "./2.webp"
import c from "./3.jpeg"
import { FaFacebook } from "react-icons/fa";
import { AiFillTwitterCircle } from "react-icons/ai";
import { FaSquareInstagram } from "react-icons/fa6";
function Page7(){
    return(<div className="of">
        <div className="container">
             <p style={{ lineHeight: '1.5' }}></p>
            <h6 className="tac cr">TEAM</h6>
            <p style={{ lineHeight: '1.5' }}></p>
            <h2 className="tac">Our Doctors</h2>
            <div className="row ">
                <div className="col-3 m-5 brs es bgr">
                <p style={{ lineHeight: '1.5' }}></p>
                <p className=" ric "> <img src={a} height={200} width={200} alt="" /></p>
                <h5 className="tac">Florieke Krebber</h5>
                <p className="tac cg"> Cardiology</p>
                <p className=" tac"><FaFacebook size={30}className="m-2" /><AiFillTwitterCircle size={30} className="m-2"/>
                <FaSquareInstagram size={30}className="m-2"/></p>
                </div>
                <div className="col-3 m-5 brs es bgr">
                <p style={{ lineHeight: '1.5' }}></p>
                <p className=" ric"> <img src={b} height={200} width={200}alt="" /></p>
                <h5 className="tac">Riley Cooper</h5>
                <p className="tac cg"> Cardiology</p>
                <p className=" tac"><FaFacebook size={30} className="m-2" /><AiFillTwitterCircle size={30} className="m-2" />
                <FaSquareInstagram className="m-2" size={30}/></p>
                </div>
                <div className="col-3 m-5 brs es bgr">
                <p style={{ lineHeight: '1.5' }}></p>
                <p className=" ric "> <img src={c} height={200} width={200} alt="" /></p>
                <h5 className="tac">Sampson Totton</h5>
                <p className="tac cg"> Cardiology</p>
                <p className=" tac"><FaFacebook size={30} className="m-2" /><AiFillTwitterCircle size={30} className="m-2"/>
                <FaSquareInstagram size={30} className="m-2"/></p>
                </div>
            </div>
            <div className="tac">
            <button className="button2"> See all</button></div>
            <div style={{ height: '50px', }}></div>
            
        </div>
        <hr style={{ border: 'none', height: '3px', backgroundColor: 'rgb(255, 0, 0)' }}/>
        </div>
    )
}

export default Page7;
  

