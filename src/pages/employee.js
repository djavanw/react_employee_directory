import Title from "../components/title"
import Search from "../components/search";
import Table from "../components/table";
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