function Search(props) {
    const updateUserQuery = event => {
       props.searchBar(event);
    }

      return(
        <div class="input-group">
            <div className = "navbar-toggler">
                <input type="search" placeholder="Enter Employee Name" onChange={updateUserQuery}  />
                
            </div>
      
        </div>
    )
}

export default Search;