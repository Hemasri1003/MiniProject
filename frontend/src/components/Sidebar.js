import { Link } from "react-router-dom";

function Sidebar(){

  return(

    <div>

      <h3>Menu</h3>

      <Link to="/college/dashboard">Dashboard</Link>
      <Link to="/college/students">Students</Link>
      <Link to="/college/marks">Marks</Link>
      <Link to="/college/submit">Submit</Link>
      <Link to="/college/status">Status</Link>

    </div>

  )

}

export default Sidebar;