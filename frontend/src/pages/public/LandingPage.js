import Navbar from "../../components/Navbar";
import { Link } from "react-router-dom";

function LandingPage(){

  return(

    <div>

      <Navbar/>

      <h1>University Marks Verification System</h1>

      <p>Secure academic records using blockchain.</p>

      <Link to="/college/login">
        <button>College Login</button>
      </Link>

      <Link to="/university/login">
        <button>University Login</button>
      </Link>

    </div>

  )

}

export default LandingPage;