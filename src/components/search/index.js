import React, { useState } from "react";

function Search(props) {
    //const [userQuery, setUserQuery] = useState("");
    const updateUserQuery = event => {
        //console.log("userQuery", userQuery);
       // setUserQuery(event.target.value);
        props.searchBar(event);
    }

    // Practice code const handleKeyPress = event => {
    //     if(event.key ==="Enter") {
    //         searchQuery();
    //     }
    // }

    // Practice code const searchQuery = () => {
    //     window.open(`https://google.com/search?q=${userQuery}`, "_blank");
    // }



    return(
        <div class="input-group">
            <div className = "navbar-toggler">
                <input type="search" placeholder="Enter Name" onChange={updateUserQuery}  />
                
            </div>
            

            {/* Practice code <div className = "form">
                <input value={userQuery} onChange={updateUserQuery} onKeyPress={handleKeyPress} />
                <button onClick={searchQuery}>New Search</button>
            </div> */}
        </div>
    )
}
//<button onClick={props.searchBarListing}>Real Employee Search Button</button>
export default Search;