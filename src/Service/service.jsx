import "../Service/ser.css";
import lab from "../assets/microscope.png";
import face from "../assets/human-mind.png";
import health from "../assets/hospital.png";

function Service() {
  return (
  <div className="container-xl" id="Service">
  <div className="row text-start">
    <div className="col-12 col-md-10 col-lg-8 mt-5">
      <h2 className="service-title mt-5">Our Special Service</h2>
      <p className="service-subtitle mt-3 mb-5">
        Beyond simply providing medical care, our commitment lies in delivering unparalleled service tailored to your unique needs.
      </p>
    </div>
  </div>

      <div className="row justify-content-center">
        
        <div className="col-12 col-sm-6 col-md-4 mb-4" >
          <div className="card shadow border-0 h-100 text-center" id="card-ser">
            <div className="card-body">
              <img src={lab} alt="lab icon" className="service-img mb-3" id="img" />
              <h5 className="card-title">Laboratory Test</h5>
              <p className="card-text">Accurate Diagnostics, Swift Results: Experience top-notch Laboratory Testing at our facility.</p>
              <a href="#" className="btn btn-primary">Learn More</a>
            </div>
          </div>
        </div>

        <div className="col-12 col-sm-6 col-md-4 mb-4">
          <div className="card shadow border-0 h-100 text-center" id="card-ser">
            <div className="card-body">
              <img src={face} alt="Health icon" className="service-img mb-3" id="img" />
              <h5 className="card-title">Health Check</h5>
              <p className="card-text">Our thorough assessments and expert evaluations help you stay proactive about your health.</p>
              <a href="#" className="btn btn-primary">Learn More</a>
            </div>
          </div>
        </div>

        <div className="col-12 col-sm-6 col-md-4 mb-4">
          <div className="card shadow border-0 h-100 text-center" id="card-ser">
            <div className="card-body">
              <img src={health} alt="hospital icon" className="service-img mb-3" id="img" />
              <h5 className="card-title">General Dentistry</h5>
              <p className="card-text">Experience comprehensive oral care with Dentistry. Trust us to keep your smile healthy and bright.</p>
              <a href="#" className="btn btn-primary">Learn More</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Service;
