function Table({data}){

  return(

    <table border="1">

      <thead>
        <tr>
          {data.length>0 &&
            Object.keys(data[0]).map(key => (
              <th key={key}>{key}</th>
            ))
          }
        </tr>
      </thead>

      <tbody>
        {data.map((row,index)=>(
          <tr key={index}>
            {Object.values(row).map((val,i)=>(
              <td key={i}>{val}</td>
            ))}
          </tr>
        ))}
      </tbody>

    </table>

  )

}

export default Table;