import choose from "../assets/choose.jpg";
import inten from "../assets/healthcare.png";
import ambu from "../assets/ambulance.png";
import health from "../assets/hospital.png";
import "../Choose/choose.css";

import { HashLink as Link } from 'react-router-hash-link';

function Choose() {

  return (
    <section className="choose-section py-5" id="Choose">
      <div className="container">
        <div className="row align-items-center gy-4">
          
          <div className="col-12 col-md-6 text-center mt-5">
            <img
              src={choose}
              alt="Doctor"
              className="choose-img rounded shadow"
            />

            <Link to="#Appoint" className="btn btn-primary mt-4">
              Book Appointment
            </Link>

          </div>

          <div className="col-12 col-md-6">
            <h1 className="mb-3">Why Choose Us</h1>
            <p className="text-secondary mb-5">
              With a steadfast commitment to your well-being, our team of highly trained healthcare professionals ensures that you receive nothing short of exceptional patient experiences.
            </p>

            <div className="row gy-3">

              <div className="col-12 d-flex align-items-center">
                <div className="feature-icon shadow rounded bg-white p-3 me-3 flex-shrink-0">
                  <img src={inten} alt="Intensive Care Icon" width={64} height={64} />
                </div>
                <div>
                  <h5 className="fw-bold mb-1">Intensive Care</h5>
                  <p className="text-secondary mb-1">
                    This is a wider card with supporting text below as a natural lead. This content is a little bit longer.
                  </p>
                </div>
              </div>

              <div className="col-12 d-flex align-items-center">
                <div className="feature-icon shadow rounded bg-white p-3 me-3 flex-shrink-0">
                  <img src={ambu} alt="Ambulance Icon" width={64} height={64} />
                </div>
                <div>
                  <h5 className="fw-bold mb-1">Free Ambulance Car</h5>
                  <p className="text-secondary mb-1">
                    A compassionate initiative to prioritize your health and well-being without any financial burden.
                  </p>
                </div>
              </div>

              <div className="col-12 d-flex align-items-center">
                <div className="feature-icon shadow rounded bg-white p-3 me-3 flex-shrink-0">
                  <img src={health} alt="Medical and Surgical Icon" width={64} height={64} />
                </div>
                <div>
                  <h5 className="fw-bold mb-1">Medical and Surgical</h5>
                  <p className="text-secondary mb-1">
                    Our Medical and Surgical services offer advanced healthcare solutions to address medical needs.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Choose;
