import {useEffect,useState} from "react";
import API from "../../api/api";
import Table from "../../components/Table";

function BlockchainViewer(){

  const[data,setData] = useState([]);

  useEffect(()=>{
    loadBlocks();
  },[])

  const loadBlocks = async ()=>{

    const res = await API.get("/university/blockchain");

    setData(res.data);

  }

  return(

    <div>

      <h2>Blockchain Records</h2>

      <Table data={data}/>

    </div>

  )

}

export default BlockchainViewer;