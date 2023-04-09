import axios from "axios";

export async function saveNewLessonPlan(data = null) {
	console.log('sent',data);
	let jsonData = JSON.stringify(data);
	let headersList = {
		Accept: "*/*",
		"Content-Type": "application/json",
	};
	let reqOptions = {
		url: "http://localhost:8080/lessonPlan/save",
		method: "POST",
		headers: headersList,
		data: jsonData,
	};
	let responseData = await axios.request(reqOptions).then(function (response) {
		return response;
	});
	return responseData;
}
export async function getLessonPlan(data = null) {
	
	console.log('id mid', data);
	let headersList = {
		Accept: "*/*",
		"Content-Type": "application/json",
	};
	let reqOptions = {
		url: `http://localhost:8080/lessonPlan/activeLessonPlan?id=${data}`,
		method: "GET",
		headers: headersList,
	};
	let responseData = await axios.request(reqOptions).then(function (response) {
		return response;
	});
	return responseData;
}
