
const Table = (props) => {
  console.log(props.employee)
  return(
    <table className="table table-striped">
      <thead>
        <tr className=" mb-4">
          <th scope="col">Photo</th>
          <th scope="col">Ref ID</th>
          <th scope="col" onClick={() => props.sort("first")}><button class="btn btn-primary btn-sm">First Name <i class="fas fa-sort-alpha-up"></i></button>   </th>
          <th scope="col" onClick={() => props.sort("last")}><button class="btn btn-primary btn-sm">Last Name <i class="fas fa-sort-alpha-up"></i></button>  </th>
          <th scope="col">Email</th>
          <th scope="col">Phone</th>
          <th scope="col">Age</th>
        </tr>
      </thead>
      <tbody>
          
            {props.employee.map((bigData, index) => (
          
          <tr key={index}>
            
            <td><img src={bigData.picture.large} alt={`employee profile of ${bigData.name.last}`}/> </td>
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