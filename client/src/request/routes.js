import axios from 'axios';


export async function getClientData(data={}){
    let jsonData = JSON.stringify(data)
    console.log(jsonData)
    let headersList = {
        Accept: "*/*",
        "Content-Type": "application/json"
    };
    let reqOptions ={
        url: 'http://localhost:8080/api/posts/clientData',
        method: "POST",
        headers: headersList,
        data: jsonData
    };
    let responseData = await axios.request(reqOptions).then(function(response){
        return response;
    })
    return responseData;
}   

export async function createNewClient(data = {}){
    console.log(data)
    let jsonData = JSON.stringify(data)
    let headersList = {
        Accept: "*/*",
        "Content-Type": "application/json"
    };
    let reqOptions ={
        url: 'http://localhost:8080/api/posts/createNewClient',
        method: "POST",
        headers: headersList,
        data: jsonData
    };
    let responseData = await axios.request(reqOptions).then(function(response){
        return response;
    })
    return responseData;
}


export async function getTotalNumberOfClients(data = {}){
    let jsonData = JSON.stringify(data)
    let headersList = {
        Accept: "*/*",
        "Content-Type": "application/json"
    };
    let reqOptions ={
        url: 'http://localhost:8080/api/posts/totalNumberOfClients',
        method: "POST",
        headers: headersList,
        data: jsonData
    };
    let responseData = await axios.request(reqOptions).then(function(response){
        return response;
    })
    return responseData;
}
