import profile from "../assets/pro.png";
import { database } from "../assets/data/data";
import { Link } from "react-router-dom";
import { useState,useEffect } from "react";
import { addDoc, collection, getDocs } from "firebase/firestore";

function Admin() {


const Userref=collection(database,"patient");

 const [fdata,setFdata]=useState([]);

  useEffect(() => {
  const getusers=async ()=> {
  const data= await getDocs(Userref);
  setFdata(data.docs.map((doc)=>({
    ...doc.data(),
    [id]:doc.id
  })));
  } 
    getusers();
  },[])


  const [patient,setPatient]=useState({
     id:"",
     name:"",
     age:"",
     city:"",
     disease:"",
     status:"",
     gender:"",
})

function handlepinput(e){
   e.preventDefault();
   const {id,value}=e.target;

   setPatient(pre=>({
    ...pre,
    [id]: value,
   }))
 }


async function handlepSubmit(e) {
  e.preventDefault();
  const {id,name,age,city,disease,status,gender}=patient;
  if (id && name && age && city && disease && status && gender) {
    await addDoc(Userref,{...patient});
    console.log("hello");
    setPatient({
        id: "",
        name: "",
        age: "",
        city: "",
        disease: "",
        status: "",
        gender: "",
});
 //refresh Table
   const data=await getDocs(Userref);
   setFdata(data.docs.map((doc)=>({
     ...doc.data(),
     [id]:doc.id,
  })));
  }
  else{
    alert("Please Fill The All Details")
  }
 }

  return (
    <>
      <nav className="navbar navbar-expand-lg w- bg-success">
        <div className="container-fluid">
          <a className="navbar-brand ms-5 text-info" href="#"><p className="h3">Health Care</p></a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#NavAltMarkup"
            aria-controls="NavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <button className="btn btn-outline-none" id="adminbtn">
             <img src={profile} alt="profile Icon ms-5" style={{width:"70px",cursor:"pointer"}}/>
          </button>
          <Link to="#" className="text-dark nav-link" id="admina"><p className="h4 pt-1 text-danger">Admin</p></Link>
          <div className="collapse navbar-collapse me-5" id="NavAltMarkup">
            <div className="navbar-nav ms-auto lead mx-5">
              <Link className="nav-link active me-5 text-light" aria-current="page" to="#">Dashboard</Link>
              <Link className="nav-link me-5 text-light" to="#">Hospital</Link>
              <Link className="nav-link me-5 text-light" to="#">Contact</Link>
              <Link className="nav-link me-5 text-light" to="#">Help</Link>
            </div>
          </div>
        </div>
      </nav>

 <div className="container-xl mt-5 justify-content-end" style={{display:"flex"}}> 
<button type="button" className="btn btn-primary"  data-bs-toggle="modal" data-bs-target="#exampleModal" ><i className="bi bi-plus-circle"></i> Add Patient</button>
</div>

<div className="modal fade" id="exampleModal" tabIndex="-" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header">
        <h1 className="modal-title fs-5" id="exampleModalLabel">Patient Detail's</h1>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body">
       
<form className="row g-3" onSubmit={handlepSubmit}>
  <div className="col-md-2">
    <label htmlFor="id" className="form-label">ID</label>
    <input name="id" type="number" autoComplete="id" className="form-control" id="id" value={patient.id}required onChange={handlepinput}/>
  </div>
  <div className="col-md-6">
    <label htmlFor="name" className="form-label">Name</label>
    <input name="name" type="text" autoComplete="id" className="form-control" id="name" required value={patient.name} onChange={handlepinput}/>
  </div>

  <div className="col-md-4">
    <label htmlFor="age" className="form-label">Age</label>
    <input name="age" type="number" autoComplete="age" className="form-control" id="age" required value={patient.age} onChange={handlepinput}/>
  </div>

  <div className="col-md-6">
    <label htmlFor="city" className="form-label">City</label>
    <input name="city" type="text" className="form-control" id="city" autoComplete="city"  required value={patient.city} onChange={handlepinput}/>
  </div>

  <div className="col-md-6">
    <label htmlFor="disease" className="form-label">Disease</label>
    <input name="disease" type="text" autoComplete="disease" className="form-control" id="disease" required value={patient.disease} onChange={handlepinput}/>
  </div>

  <div className="col-md-6">
    <label htmlFor="status" className="form-label">Status</label>
    <input name="status" type="text" autoComplete="status" className="form-control" id="status" required value={patient.status} onChange={handlepinput} />
  </div>
 
  <div className="col-md-6">
    <label htmlFor="gender" className="form-label">Gender</label>
    <input name="gender" type="text"  autoComplete="gender" className="form-control" id="gender" required value={patient.gender} onChange={handlepinput} />
  </div>
  
  <div className="modal-footer">
    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
    <button type="submit" className="btn btn-primary">Send</button>
  </div>
</form>
 </div>

    </div>
  </div>
</div>

 <div className="container-fluid mt-5 px-2">
        <div className="table-responsive">
          <table className="table table-bordered table-hover align-middle text-center">
            <thead className="table-dark">
              <tr>
                <th>No</th>
                <th>Name</th>
                <th>Age</th>
                <th>City</th>
                <th>Disease</th>
                <th>Status</th>
                <th>Gender</th>
              </tr>
            </thead>
              <tbody>
            {fdata.map((val,index)=>{
              return(
                  <tr key={index}>
                  <td>{val.id}</td>
                  <td>{val.name}</td>
                  <td>{val.age}</td>
                  <td>{val.city}</td>
                  <td>{val.disease}</td>
                  <td>{val.status}</td>
                  <td>{val.gender}</td>
                  </tr>
              )
            })}
             </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

export default Admin;
