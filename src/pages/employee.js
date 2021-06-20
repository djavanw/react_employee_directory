import Title from "../components/Title"
import Search from "../components/Search";
import Table from "../components/Table";
import {Component} from "react"
class Employee extends Component {

    render(){
        return (
            // parent wrapper
            <>
            
                <Title />
                <Search />
                <Table />
            </>
    
        )
    }
   
}

export default Employee;