import axios from 'axios';

export async function createNewPatient(data = {}){
    let jsonData = JSON.stringify(data)
    console.log(jsonData)
    let headersList = {
        Accept: "*/*",
        "Content-Type": "application/json"
    };
    let reqOptions = {
        url: 'http://localhost:8080/patient/createNewPatient',
        method: "POST",
        headers: headersList,
        data: jsonData
    };
    let responseData = await axios.request(reqOptions).then(function(response){
        return response;
    })
    return responseData;
}
