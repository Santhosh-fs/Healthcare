import aboutImg from "../assets/about.jpg";
import "../About/about.css";

function About() {
  return (
    <section className="about-section py-5" id="About">
      <div className="container">
        <div className="row align-items-center py-4">

          <div className="col-12 col-md-6">
            <h2 className="fw-bold mb-3">About Us</h2>
            <p className="text-secondary">
              Welcome to our healthcare website, your one-stop destination for reliable and comprehensive health care information. We are committed to promoting wellness and providing valuable resources to empower you on your health journey.
            </p>
            <p className="text-secondary">
              Explore our extensive collection of expertly written articles and guides covering a wide range of health topics. From understanding common medical conditions to tips for maintaining a healthy lifestyle, our content is designed to educate, inspire, and support you in making informed choices for your health.
            </p>
            <p className="text-secondary">
              Discover practical health tips and lifestyle advice to optimize your physical and mental well-being. We believe that small changes can lead to significant improvements in your quality of life, and we're here to guide you on your path to a healthier and happier you.
            </p>
          </div>

          <div className="col-10 col-md-4">
            <img src={aboutImg}  alt="Doctor"className="about-img rounded shadow"/>
          </div>

        </div>
      </div>
    </section>
  );
}

export default About;
