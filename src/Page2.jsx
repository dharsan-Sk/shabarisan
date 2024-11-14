import 'bootstrap/dist/css/bootstrap.min.css';
import "../src/page.css"
import Doctorimage from './docter.jpg'
function Page2(){
    return(
<div className='of container'>
    <div className='row '>
    <div className="col-12 col-sm-6 mt-2">
    <div className="m1">
        <p className="s"> 
        <nav class="navbar navbar-expand-lg ">
  <div class="container-fluid">
    <a class="navbar-brand" href="#"><h3>MED</h3></a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">About</a>
        </li>
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Service</a>
        </li>
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Doctors</a>
        </li>        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Blog</a>
        </li>
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Contact</a>
        </li>
       
      </ul>
    </div>
  </div>
</nav></p>  
        
        <h5 className="cr tm">MEDICAL</h5>  
        <h1 className="fs2 mt-3">Healthcare</h1><h1 className="fs2">Solution</h1>
        <p className='mt-3'>peep at some distance orb has power to <br />
        raise and purify our thoughts like a strain <br />
        of sacred music, or anobel picture</p>
        <button className="button1 p-1"style={{ width: '110px', }}>Find Doctors</button>
        
        </div>

    </div> 
    <div className="col-12 col-sm-6 bgr">
      <img src={Doctorimage} class="img-fluid" alt="..."></img>

        </div>
        </div>
</div>
    )
}
export default Page2;