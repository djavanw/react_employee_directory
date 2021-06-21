//import React, {Component} from "react";
import React, { useState, useEffect } from "react";
import Title from "../components/Title"
import Search from "../components/Search";
import Table from "../components/Table";

import API from "../utils/API";

const Employee = () => {
    const [employee, setEmployee] = useState([]);
    //const [employeeFiltered, setEmployeeFiltered] = useState([]);
    //const [employeeSorted, setEmployeeSorted] = useState("ascend");

    useEffect(() => {
        API.getRandomPeople().then((pull) => {
            setEmployee(pull.data.results)
            console.log(pull.data.results[0].name.first)
            console.log(pull.data.results[1].picture.thumbnail)
            console.log(employee)
            
            //setEmployeeFiltered(pull.data.results)
        })
    }, [setEmployee]);

    return (
            // parent wrapper
            <>
            
                <Title />
                <Search />
                <Table setEmployee={employee}  />
            </>
    
        )
};

export default Employee;