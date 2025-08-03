function Foo() {
  return (
    <footer className="container-fluid bg-info mt-5 pt-5">
      <div className="container-lg">
        <div className="row">
          <div className="col-12 col-md-5 mb-4">
            <h4 className="text-success">
              Health <span className="text-danger">Care</span>
            </h4>
            <p className="text-secondary">
              We are honored to be a part of your healthcare journey and committed to delivering compassionate, personalized, and top-notch care every step of the way.
            </p>
            <p className="text-secondary">
              Trust us with your health, and let us work together to achieve the best possible outcomes for you and your loved ones.
            </p>
          </div>

          <div className="col-6 col-md-2 mb-4">
            <h4 className="text-success">About Us</h4>
            <p className="text-secondary">Home</p>
            <p className="text-secondary">About Us</p>
            <p className="text-secondary">Work With Us</p>
            <p className="text-secondary">Our Blog</p>
            <p className="text-secondary">Terms & Conditions</p>
          </div>

          <div className="col-6 col-md-2 mb-4">
            <h4 className="text-success">Services</h4>
            <p className="text-secondary">Search Terms</p>
            <p className="text-secondary">Advance Search</p>
            <p className="text-secondary">Privacy Policy</p>
            <p className="text-secondary">Suppliers</p>
            <p className="text-secondary">Our Stores</p>
          </div>

          <div className="col-12 col-md-3 mb-4">
            <h4 className="text-success">Contact Us</h4>
            <p className="text-secondary">
              <i className="bi bi-geo-alt-fill text-success me-2"></i> Redfort Bridge Street, Delhi
            </p>
            <p className="text-secondary">
              <i className="bi bi-envelope text-success me-2"></i> support@care.com
            </p>
            <p className="text-secondary">
              <i className="bi bi-telephone text-success me-2"></i> (+91) 90258 03121
            </p>
          </div>
        </div>
      </div>

      <div className="bg-secondary text-center py-2 mt-3">
        <div className="container">
          <p className="text-light mb-0">
            Copyright © 2024 Santhosh. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Foo;
