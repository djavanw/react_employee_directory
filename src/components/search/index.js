import React, { useState } from "react";

function Search(props) {
    const [userQuery, setUserQuery] = useState("");
    const updateUserQuery = event => {
        console.log("userQuery", userQuery);
        setUserQuery(event.target.value);
    }

    const handleKeyPress = event => {
        if(event.key ==="Enter") {
            searchQuery();
        }
    }

    const searchQuery = () => {
        window.open(`https://google.com/search?q=${userQuery}`, "_blank");
    }



    return(
        <div class="input-group">
            <div className = "navbar-toggler">
                <input type="search" placeholder="Enter Name" onChange={props.searchBar}  />
                <button onClick={props.searchBarListing}>Real Employee Search Button</button>
            </div>
            
            <div className = "form">
                <input value={userQuery} onChange={updateUserQuery} onKeyPress={handleKeyPress} />
                <button onClick={searchQuery}>New Search</button>
            </div>
        </div>
    )
}

export default Search;