import Title from "../components/Title"
import Search from "../components/Search";
import Table from "../components/Table";
import {Component} from "react";
import API from "../utils/API";

class Employee extends Component {
    state = {
        employee: "",
        arrayEmployees: []
    };

    componentDidMount() {
        this.mountEmployees()
    };

    mountEmployees = () => {
        API.getRandomPeople()
            .then(res => {
                this.setState({ results: res.data.results });
            console.log(this.state.results);
        })
        .catch(error => console.log(error));
    }

    render(){
        return (
            // parent wrapper
            <>
            
                <Title />
                <Search />
                <Table results={this.state.results} />
            </>
    
        )
    }
};

export default Employee;