function Table() {
  return(
    <table class="table table-striped">
      
      <thead>
              
        <tr className=" mb-4">
          <th scope="col">picture</th>
          <th scope="col">first</th>
          <th scope="col">last</th>
          <th scope="col"></th>
          <th scope="col">phone</th>
          <th scope="col">dob</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">1</th>
          <td>Mark</td>
          <td>Otto</td>
          <td>@mdo</td>
        </tr>
        <tr>
          <th scope="row">2</th>
          <td>Jacob</td>
          <td>Thornton</td>
          <td>@fat</td>
        </tr>
        <tr>
          <th scope="row">3</th>
          <td colspan="2">Larry the Bird</td>
          <td>@twitter</td>
        </tr>
      </tbody>

    </table>
  )
}

export default Table; 