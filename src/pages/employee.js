//import React, {Component} from "react";
import React, { useState, useEffect } from "react";
import Title from "../components/Title"
import Search from "../components/Search";
import Table from "../components/Table";

import API from "../utils/API";

const Employee = () => {
    const [employee, setEmployee] = useState([]);
    const [employeeSearch, setEmployeeSearch] = useState([]);
    //const [employeeFiltered, setEmployeeFiltered] = useState([]);
    //const [employeeSorted, setEmployeeSorted] = useState("ascend");

    useEffect(() => {
        API.getRandomPeople().then((pull) => {
            setEmployee(pull.data.results)
            setEmployeeSearch(pull.data.results)
            console.log(pull.data.results[0].name.first)
            console.log(pull.data.results[1].picture.thumbnail)
            console.log(employee)
            
            //setEmployeeFiltered(pull.data.results)
        })
    }, [setEmployee]);

    const searchBar = (event) => {
        const searching = event.target.value;
        console.log(searching, employee);
        const searchBarListing = employee.filter(results => {
            let deList = Object.values(results).join("").toLowerCase();
            return deList.indexOf(searching.toLowerCase()) !== -1;
            //return results.name.first.toLowerCase().indexOf(searching.toLowerCase()) !== -1;
       });
       console.log(searchBarListing);
        setEmployeeSearch(searchBarListing);
    }
    const sort = (columnName) => {
        
        let sortedEmployee = employeeSearch.sort((a, b )=> {
            return a.name[columnName].localeCompare(b.name[columnName])

        }) 
        //serialization reformatting array a
        sortedEmployee = sortedEmployee.map(employee => employee)
        setEmployeeSearch(sortedEmployee)
    }

    return (
            // parent wrapper
            <>
            
                <Title />
                <Search searchBar={searchBar} />
                <Table employee={employeeSearch}  sort={sort} />
            </>
    
        )
};

export default Employee;