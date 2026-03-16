import {useState} from "react";
import API from "../../api/api";

function MarksEntryPage(){

  const[studentId,setStudentId] = useState("");
  const[subject,setSubject] = useState("");
  const[marks,setMarks] = useState("");

  const submitMarks = async () => {

    const res = await API.post("/college/marks",{
      studentId,
      subject,
      marks
    });

    alert("Marks saved");

    console.log(res.data);

  };

  return(

    <div>

      <h2>Enter Marks</h2>

      <input placeholder="Student ID"
      onChange={(e)=>setStudentId(e.target.value)}
      />

      <input placeholder="Subject"
      onChange={(e)=>setSubject(e.target.value)}
      />

      <input placeholder="Marks"
      onChange={(e)=>setMarks(e.target.value)}
      />

      <button onClick={submitMarks}>
        Save
      </button>

    </div>

  )

}

export default MarksEntryPage;