import axios from "axios";

class restClient{
    
    // get request
    static getRequest(url){
        axios.get(url)
        .then(response=>{
            return response.data;
        })
        .catch(error=>{
            return null;
        })
    }

    
}

export default restClient;