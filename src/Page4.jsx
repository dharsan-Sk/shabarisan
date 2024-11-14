import 'bootstrap/dist/css/bootstrap.min.css';
import { TbDental } from "react-icons/tb";
import { FaEye } from "react-icons/fa";
import { FaKhanda } from "react-icons/fa6";
import { GiLoveInjection } from "react-icons/gi";
import { FaHeartbeat } from "react-icons/fa";
import { GiAmbulance } from "react-icons/gi";
import image from './bandage.jpg'
function Page4(){
    return(
 <div className='bgr of'>
<div className='container'>
    <p className=' pt-5 tac cr'> SERVICE</p>
    <p style={{ lineHeight: '1.5' }}></p>
    <h1 className='tac'>Our Medical Center</h1>
    <p style={{ lineHeight: '1.5' }}></p>
    <div className='row'>
        <div className='col-6 bgw'>
          <div className='row tac'>
            <div className='col-4 bgw '>
                <p> <TbDental size={70} /><p className='cr p-5'> dental </p></p>
                <p><FaEye size={70} /> <p className='cr p-5'> eye care </p></p>
            </div>
            <div className='col-4 '>
                <p><FaKhanda size={70} /> <p className='cr  p-5'>Medicine  </p></p>
                <p> <GiLoveInjection size={70} /><p className='cr p-5'> Primery Care </p></p>
            </div>
            <div className='col-4 '>
                <p> <FaHeartbeat size={70} /><p className='cr p-5'> cardeology </p></p>
                <p> <GiAmbulance size={70} /><p className='cr p-5'>Orthopedic  </p></p>
            </div>
          </div>
        </div>
        <div className='col-6'>
            <div>            <p><img src={image} alt="" height={220} width={700} /> </p>
            <p className='p-5 bgw '> 
                <h4>Dental Care Services</h4>
                <p className='cg'>As I went on,still gaining velocity,palpitation of night and day <br />
                merged into two continuous greyness sky took on a wounderfull.</p>
                <button className='cr brs p-1 bgr'><h6  style={{ width: '150px', }}> learn more</h6></button>
            </p></div>

        </div>
      
    </div>
</div>
  <div style={{ width: '180px', height: '50px' }}></div>
 </div>       
    )
}

export default Page4;