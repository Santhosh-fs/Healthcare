import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "../supabse";

function Docpage() {
  const nav = useNavigate();

  const [otp, setOtp] = useState("");
  const [display, setDisplay] = useState(false);
  const [phone, setPhone] = useState("");
  const [docdata, setDocdata] = useState("");
  const [loading, setLoading] = useState(false);

  const [inputdata, setInputdata] = useState({
    name: "",
    password: "",
  });

  const handleD = (e) => {
    const { id, value } = e.target;
    setInputdata((prev) => ({ ...prev, [id]: value }));
  };

  const handlePhoneChange = (e) => {
    const raw = e.target.value.trim();
    const formatted = raw.startsWith("+91") ? raw : "+91" + raw.replace(/^\+?/, "");
    setPhone(formatted);
  };

  const sendotp = async (e) => {
    e.preventDefault();
    const { name, password } = inputdata;

    if (!name || !password || !phone || !docdata) {
      alert("Please fill out all fields.");
      return;
    }

    try {
      setLoading(true);
      const { error } = await supabase.auth.signInWithOtp({ phone });
      if (error) throw error;

      setDisplay(true);
      alert("OTP sent to your mobile. Please check and enter below.");
    } catch (error) {
      alert(`Error sending OTP: ${error.message}`);
    } finally {
      setLoading(false);
    }
  };

  const verifyOtp = async () => {
    try {
      setLoading(true);
      const { data, error } = await supabase.auth.verifyOtp({
        phone,
        token: otp,
        type: "sms",
      });

      if (error) throw error;

      alert("OTP verified successfully!");
      nav(`/Doctorshow/${docdata}`);
    } catch (error) {
      alert(`Failed to verify OTP: ${error.message}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container justify-content-center">
      <h2 className="my-4 text-success text-center">
        <i className="bi bi-h-square text-success"></i>
        <span className="text-danger"> Doctor Login</span>
      </h2>

      <form
        className="needs-validation bg-success rounded p-4"
        onSubmit={sendotp}
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        {/* Doctor ID */}
        <div className="col-md-2 mt-4">
          <label className="form-label text-light" htmlFor="id">
            Doctor Id
          </label>
          <select
            className="form-select mb-3"
            onChange={(e) => setDocdata(e.target.value)}
            defaultValue=""
            id="id"
            required
          >
            <option disabled value="">
              Choose...
            </option>
            <option>10814</option>
            <option>10275</option>
            <option>10538</option>
            <option>10417</option>
          </select>
        </div>

        {/* Name */}
        <div className="col-md-4 mb-3 form-floating">
          <input
            type="text"
            className="form-control text-dark"
            id="name"
            onChange={handleD}
            required
            placeholder="Name"
          />
          <label htmlFor="name">Name</label>
        </div>

        {/* Phone */}
        <div className="col-md-4 form-floating mb-3">
          <input
            type="text"
            className="form-control text-dark"
            id="phone"
            value={phone}
            onChange={handlePhoneChange}
            placeholder="+91xxxxxxxxxx"
            required
          />
          <label htmlFor="phone">Phone Number</label>
        </div>

        {/* Password */}
        <div className="col-md-4 form-floating mb-3">
          <input
            type="password"
            className="form-control text-dark"
            id="password"
            onChange={handleD}
            placeholder="Password"
            required
          />
          <label htmlFor="password">Password</label>
        </div>

        {/* Send OTP Button */}
        {!display && (
          <div className="col mt-3 mb-2">
            <button className="btn btn-primary" type="submit" disabled={loading}>
              {loading?"Loading...":"Send OTP"}
            </button>
          </div>
        )}

        {/* OTP Verification */}
        {display && (
          <div className="container d-flex flex-column align-items-center">
            <div className="col-md-4 mt-2 mb-3 form-floating">
              <input
                type="number"
                name="otp"
                className="form-control text-dark"
                value={otp}
                onChange={(e) => setOtp(e.target.value)}
                autoFocus
                id="Otp"
                placeholder="Enter the OTP"
                required
              />
              <label htmlFor="Otp">Enter OTP</label>
            </div>
            <div className="col mt-3 mb-2">
              <button
                className="btn btn-danger"
                onClick={verifyOtp}
                disabled={loading}
              >
               {loading?"Loading..":"Verify OTP"}
              </button>
            </div>
          </div>
        )}
      </form>
    </div>
  );
}

export default Docpage;
