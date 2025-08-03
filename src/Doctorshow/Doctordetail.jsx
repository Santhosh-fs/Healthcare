import { useParams } from "react-router-dom"
import "../Doctorshow/Doctord.css";
import doctordata from "../assets/DoctorD";
import { useState } from "react";

function Doctordetail() {

    const {id}=useParams();
   const doctor=doctordata.find(d => d.id == id);

   if (!doctor) {
    <p className="text-center h1">Loading...</p>
   }

  const[active,setActive]=useState(false);

  function handleActive() {
     setActive(pre=>!pre)
  }

  return doctor ? (
    <div>
      
<nav className="navbar navbar-expand-lg bg-primary">
  <div className="container-fluid">
    <a className="navbar-brand text-light ms-5 h1" href="#"><p className="h4 pt-1">Health <span className="text-dark">Care.</span></p></a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse justify-content-end me-5" id="navbarText">
    <ul className="nav me-5">
  <li className="nav-item me-5 lead">
    <a className="nav-link active  text-light" aria-current="page" href="#">Dashboard</a>
  </li>
  <li className="nav-item me-5 lead">
    <a className="nav-link text-light " href="#">Contact</a>
  </li>
  <li className="nav-item me-5 lead">
    <a className="nav-link  text-light" href="#">Help</a>
  </li>
</ul>
    </div>
  </div>
</nav>

  <div className="container-xl">
  <img src={doctor.image} alt="Doctor Image" className="mb-5 mt-3" style={{width:"150px"}} />
  <button type="button" className="btn btn-primary"  id={`act${active?"suc":"sec"}`} style={{position:"absolute",top:"120px"}}>{active?"Active":"In Active"}</button>
  <div class="form-check form-switch" id="switch">
  <input class="form-check-input" type="checkbox" role="switch" onChange={handleActive}/>
</div>

  </div>
<div className="container-xl">
<div class="card mb-3 shadow"  style={{maxwidth:"540px"}}>
  <div class="row g-0">
       <h5 className="card-title text-center h3 text-info">Doctor <span className="text-danger">Detail's</span></h5>
    <div class="col-md-4 ms-4">
          <p className="card-text  mb-4 h5 text-success">Name :<span className="lead text-dark"> {doctor.name}</span></p>
            <p className="card-text mb-4 h5 ">Age :<span className="lead"> {doctor.age}</span></p>
            <p className="card-text mb-4 h5 text-success">Gender :<span className="lead text-dark"> {doctor.gender}</span></p>
            <p className="card-text  mb-4 h5">City :<span className="lead"> {doctor.city}</span></p>
            <p className="card-text  mb-4 h5 ">Experience :<span className="lead text-warning"> {doctor.experience}</span></p>
            <p className="card-text  mb-1 text-success h5">Specialist :<span className="lead text-danger"> {doctor.specialist}</span></p>
    </div>
    <div class="col-md-7">
      <div class="card-body">
        <p className="card-text h5">Education : <span className="lead text-secondary">{doctor.education}</span></p>
        <p className="card-text h5 text-success">Nationality : <span className="lead text-danger">{doctor.Nationality}</span></p>
        <p className="card-text h5 text-info">About : <span className="lead text-secondary">{doctor.about}</span></p> 
      </div>
    </div>
  </div>
</div>
</div> 
    </div>
  ):"loading.....";
  
}

export default Doctordetail
