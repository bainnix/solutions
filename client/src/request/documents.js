import axios from 'axios';


export async function createDocument(data={}){
    let jsonData = JSON.stringify(data)
    console.log(jsonData)
    let headersList = {
        Accept: "*/*",
        "Content-Type": "application/json"
    };
    let reqOptions ={
        url: 'http://localhost:8080/documents/createNewDocument',
        method: "POST",
        headers: headersList,
        data: jsonData
    };
    let responseData = await axios.request(reqOptions).then(function(response){
        return response;
    })
    return responseData;
}  
