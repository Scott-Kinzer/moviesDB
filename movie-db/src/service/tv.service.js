import { apiKey } from "./apiKeys";
import axiosService from "./axios.service";

function ApiTV() {

    this.fetchTVByYearAndSort = (sortBy, year, page) => {
        return axiosService.get(`discover/tv?api_key=${apiKey}&language=en-US&sort_by=${sortBy}&first_air_date_year=${year}&page=${page}&timezone=America%2FNew_York&include_null_first_air_dates=false&with_watch_monetization_types=flatrate&with_status=0&with_type=0
        `).then((response) => response.data);
    }   

    this.fetchTvById = (tv_id) => {
        // console.log('FEEEETCH', tv_id)
        return axiosService.get(`tv/${tv_id}?api_key=${apiKey}&language=en-US`).then((response) => response.data);
    }

};



const apiIntance = new ApiTV();

export default apiIntance;