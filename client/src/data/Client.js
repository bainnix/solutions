class Client {
        constructor(client){
            this.firstName = client.firstName,
            this.lastName = client.lastName,
            this.email = client.email,
            this.password = client.password,
            this.patientRelation = client.patientRelation,
            this.middleName = client.middleName,
            this.gender = client.gender,
            this.policy = client.policy,
            this.address = {
                street: client.street,
                city: client.city,
                state: client.state,
                zip: client.zip,
            }
            this.patient = {
                firstName: client.patient.firstName,
                lastName: client.patient.lastName,
                middleName: client.patient.firstName,
                DOB: client.patient.DOB,
                ID: client.patient.ID
            }
    }
}

module.exports = {
    Client
}
