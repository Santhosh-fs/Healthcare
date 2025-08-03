import { useNavigate } from "react-router-dom"
import errorimg from "../assets/error.jpg"
function err() {
    const Navigate=useNavigate();
  return (
    <div className="container-fluid">
     <img src={errorimg} alt="errorr image" className="img-fluid" />
   <div className='text-center h1'>YOUR LOST:(</div>
   <button className="btn btn-outline-danger align-item-center" onClick={()=>Navigate("/")}>GO BACK</button>
    </div>
  )
}

export default err