import { useState } from "react";

function Appoint() {
  
const [appoint,setAppoint] = useState(
 {
  fName:"",
  lName:"",
  phoneNo:"",
  doctorSelect:"",
  appointmentDate:"",
  termsCheck:false
}
);

function handleChange(e) {
    const {id, type,checked,value}=e.target;
    setAppoint(pre=>({
      ...pre,
      [id]: type ==="checkbox"? checked:value,
    }))
}

  function handleSubmit(e) {
    e.preventDefault();
      const {fName,lName,phoneNo,doctorSelect,appointmentDate,termsCheck}=appoint;

    if(fName && lName  && phoneNo.length==10 && doctorSelect && appointmentDate && termsCheck)
      { 
     alert(`Hello ${fName} Your Appointment Is Successfully Schdule On ${appointmentDate}`); 
     setAppoint({
        fName:"",
        lName:"",
        phoneNo:"",
        doctorSelect:"",
        appointmentDate:"",
        termsCheck:false
  })
    } 
    else{
    alert("Please Fill The Form Correctly And Agree The Terms");
  }
}
  return (
    <div className="container-xl mt-5 bg-light rounded p-4 mx-auto" id="Appoint" style={{ maxWidth: "600px" }}>
      <h2 className="mt-3 text-center">
        Booking <span className="text-success">Appointment</span>
      </h2>

      <form className="needs-validation mt-4" noValidate onSubmit={handleSubmit}>
        <div className="row g-3">
          <div className="col-12 col-md-6">
            <label htmlFor="firstName" className="form-label">
              First name
            </label>
            <input type="text" value={appoint.fName} className="form-control" id="fName" required onChange={handleChange} />
            <div className="valid-feedback">Looks good!</div>
          </div>

          <div className="col-12 col-md-6">
            <label htmlFor="lastName" className="form-label">
              Last name
            </label>
            <input type="text" value={appoint.lName} className="form-control" id="lName" required onChange={handleChange}/>
            <div className="valid-feedback">Looks good!</div>
          </div>

          <div className="col-12">
            <label htmlFor="phoneNumber" className="form-label">
              Phone No
            </label>
            <input type="number" value={appoint.phoneNo} className="form-control" id="phoneNo" required onChange={handleChange}/>
            <div className="valid-feedback">Looks good!</div>
          </div>

          <div className="col-12">
            <label htmlFor="doctorSelect" className="form-label">
              Doctors
            </label>
           <select className="form-select" id="doctorSelect"  required  value={appoint.doctorSelect} onChange={handleChange}>
              <option value="" disabled>Choose...</option>
              <option value="Cardiologist">Cardiologist</option>
              <option value="Neurologist">Neurologist</option>
              <option value="Plastic Surgeons">Plastic Surgeons</option>
              <option value="Urology">Urology</option>
            </select>

            <div className="invalid-feedback">Please select a doctor.</div>
          </div>

          <div className="col-12">
            <label htmlFor="appointmentDate" className="form-label">
              Date
            </label>
            <input type="date" className="form-control" value={appoint.appointmentDate} id="appointmentDate" required onChange={handleChange}/>
            <div className="invalid-feedback">Please select a date.</div>
          </div>

          <div className="col-12">
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                id="termsCheck"
                value={appoint.termsCheck}
                required 
                onChange={handleChange}
              />
              <label className="form-check-label" htmlFor="termsCheck">
                Agree to terms and conditions
              </label>

              <div className="invalid-feedback">You must agree before submitting.</div>
            </div>
          </div>

          <div className="col-12 text-center mt-3">
            <button className="btn btn-success px-5" type="submit">
              Submit
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Appoint;
