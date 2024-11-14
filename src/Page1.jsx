import 'bootstrap/dist/css/bootstrap.min.css';
import "../src/page.css"
function Page1(){
    return(
       
        <div className='of'>
            <div className='h100px'></div>
            <div className='bgr'>
            <div className='container '>
            <div className='row h200px'>
                <div className='col-sm-2 m-5  button1'>
                    <div className='p-3'>
                    <h3>opening <br /> hours</h3>
                    <h6>Monday - Friday</h6>
                    <h5> 9.00am-11.00pm</h5>
                    <h6 className='mt-3'>Address</h6>
                    <h5>7563 St vegas place</h5>
                    </div>
                     </div>
                <div className='col-sm-2 brs bgw m-5'>
                    <div className='p-3'>
                    <h3>appoint <br />ment</h3>
                    <p>peep at some distance <br />power to raise purify</p>
                    <button className='mt-4 p-1 button2'><h6>Request</h6></button>
                    </div>
                    </div>
                <div className='col-sm-2 bgw brs m-5'>
                    <div className='p-3'><h3>Find <br /> Docters</h3>
                    <p>peep at some distance <br />power to raise purify</p>
                    <button className='mt-4 p-1 button2'>Doctors</button>
                    </div></div>
                <div className='col-sm-2 m-5 bgw brs'>
                    <div className='p-3'>
                    <h3>Find <br /> Location</h3>
                    <p>peep at some distance <br />power to raise purify</p>
                    <button className='mt-4 p-1 button2'>Location</button>
                    </div>
                    </div>
                    </div>
            </div></div>
            <div className='h100px'></div>
        </div>
    )
}
export default Page1;