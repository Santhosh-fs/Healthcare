
import Cardio from "../assets/cardio.png";
import plastic from "../assets/plastic.png";
import neuro from "../assets/neuro.png";


function Topdoc() {
  return (
    <section className="service-section py-5 mt-5" id="Doc">
      <div className="container text-start">
        <h2 className="fw-bold mb-3">Our Special Doctor</h2>
        <p className="text-secondary mb-5">"Dedicated to healing with compassion and expertise, our doctor combines years of trusted care with modern technology and personalized treatment."</p>

        <div className="row g-4 justify-content-center">
    
          <div className="col-12 col-sm-6 col-md-4">
            <div className="card h-100 shadow border-0 text-center">
              <div className="card-body">
                <img src={Cardio} alt="Laboratory" className="card-img-top mb-3" />
                <h5 className="card-title">Dr.Aarav Patel</h5>
                <p className="card-text">
                   Cardiologist
                </p>
              </div>
            </div>
          </div>

          <div className="col-12 col-sm-6 col-md-4">
            <div className="card h-100 shadow border-0 text-center">
              <div className="card-body">
                <img src={neuro} alt="Health Check" className="card-img mb-3" />
                <h5 className="card-title">Dr. Sanya Mehra</h5>
                <p className="card-text">
                  Neurologist
                </p>
              
              </div>
            </div>
          </div>

          <div className="col-12 col-sm-6 col-md-4">
            <div className="card h-100 shadow border-0 text-center">
              <div className="card-body">
                <img src={plastic} alt="General Dentistry" className="card-img mb-3" />
                <h5 className="card-title">Dr. Rahul Sharma</h5>
                <p className="card-text">
                Plastic Surgeon
                 </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Topdoc