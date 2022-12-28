import axios from "axios";
export async function createNewInternalUser(data = null) {
	console.log(data);
	let jsonData = JSON.stringify(data);
	let headersList = {
		Accept: "*/*",
		"Content-Type": "application/json",
	};
	let reqOptions = {
		url: "http://localhost:8080/users/createNewInternalUser",
		method: "POST",
		headers: headersList,
		data: jsonData,
	};
	let responseData = await axios.request(reqOptions).then(function (response) {
		return response;
	});
	return responseData;
}
export async function scheduleAppointment(data = null) {
	console.log(data);
	let jsonData = JSON.stringify(data);
	let headersList = {
		Accept: "*/*",
		"Content-Type": "application/json",
	};
	let reqOptions = {
		url: "http://localhost:8080/users/scheduleAppointment",
		method: "POST",
		headers: headersList,
		data: jsonData,
	};
	let responseData = await axios.request(reqOptions).then(function (response) {
		return response;
	});
	return responseData;
}

export async function appointmentAttendee(data = null) {
	let headersList = {
		Accept: "*/*",
		"Content-Type": "application/json",
	};
	let reqOptions = {
		url: `http://localhost:8080/users/appointmentAttendee?data=${data}`,
		method: "GET",
		headers: headersList,
	};
	let responseData = await axios.request(reqOptions).then(function (response) {
		return response;
	});
	return responseData;
}
