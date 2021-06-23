
const Table = (props) => {
  console.log(props.employee)
  return(
    <table className="table table-striped">
      <thead>
        <tr className=" mb-4">
          <th scope="col">picture</th>
          <th scope="col">ref id</th>
          <th scope="col"  onClick={() => props.sort("first")}>first <i class="fas fa-sort-alpha-up"></i></th>
          <th scope="col" onClick={() => props.sort("last")}>last <i class="fas fa-sort-alpha-up"></i></th>
          <th scope="col">email</th>
          <th scope="col">phone</th>
          <th scope="col">age</th>
        </tr>
      </thead>
      <tbody>
          
            {props.employee.map((bigData, index) => (
          
          <tr key={index}>
            
            <td><img src={bigData.picture.thumbnail} alt={`employee profile of ${bigData.name.last}`}/> </td>
            <td>{index + 100}</td>
            <td>{bigData.name.first}</td>
            <td>{bigData.name.last}</td>
            <td>{bigData.email}</td>
            <td>{bigData.phone}</td>
            <td>{bigData.dob.age}</td>
            <td></td>
          </tr>
        ))}
      </tbody>
    </table>
  )
  

}

export default Table; 