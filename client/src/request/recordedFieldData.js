import axios from "axios";

export async function saveRecordedData(data = null) {
	console.log('sent',data);
	let jsonData = JSON.stringify(data);
	let headersList = {
		Accept: "*/*",
		"Content-Type": "application/json",
	};
	let reqOptions = {
		url: "http://localhost:8080/recordedFieldData/save",
		method: "POST",
		headers: headersList,
		data: jsonData,
	};
	let responseData = await axios.request(reqOptions).then(function (response) {
		return response;
	});
	return responseData;
}
export async function chartData1(data = null) {
	
	console.log('id mid', data);
	let headersList = {
		Accept: "*/*",
		"Content-Type": "application/json",
	};
	let reqOptions = {
		url: `http://localhost:8080/recordedFieldData/behaviorGraphDateRange?
		patientID=${data.patientID}&startDate=${data.startDate}&
		endDate=${data.endDate}&behavior=${data.behavior}`,
		method: "GET",
		headers: headersList,
	};
	let responseData = await axios.request(reqOptions).then(function (response) {
		return response;
	});
	return responseData;
}
