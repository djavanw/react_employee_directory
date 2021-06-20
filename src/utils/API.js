import axios from "axios";

const randUrl = "https://randomuser.me/api/?results=50&nat=us";

//eslint-disable-next-line
export default {
    getRandomPeople: function(){
        return axios.get(randUrl);
    }
};