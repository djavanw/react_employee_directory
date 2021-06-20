function Table(props) {
  return(
    <table class="table table-striped">
      <thead>
        <tr className=" mb-4">
          <th scope="col">picture</th>
          <th scope="col">first</th>
          <th scope="col">last</th>
          <th scope="col">email</th>
          <th scope="col">phone</th>
          <th scope="col">age</th>
        </tr>
      </thead>
      <tbody>
        {props.results.map((empData, index) => (
        <tr key={index +1}>
          <th scope="row">{index +1}</th>
          <td>{empData.name.first}</td>
          <td>{empData.name.last}</td>
          <td>{empData.email}</td>
          <td>{empData.phone}</td>
          <td>{empData.dob.age}</td>
        </tr>
        ))}
      </tbody>
    </table>
  )
}

export default Table; 