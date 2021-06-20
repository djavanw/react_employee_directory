
const Table = (props) => {
  return(
    <table className="table table-striped">
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
          <tr>
            <th scope="row"></th>
            <td>{props.setEmployee}</td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
      </tbody>
    </table>
  )
}

export default Table; 