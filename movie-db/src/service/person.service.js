import { apiKey } from "./apiKeys";
import axiosService from "./axios.service";

function PersonsTV() {

    this.fetchPersonsByName = (name) => {
        console.log('PERSON NAME', name);
        return axiosService.get(`search/person?api_key=${apiKey}&language=en-US&query=${name}&page=1&include_adult=false
        `).then((response) => response.data.results);
    }    

};



const apiIntance = new PersonsTV();

export default apiIntance;