function uuid(){
    return 'xxxx-xxxx-4xx-yxxx-xxxx'.replace(/[xy]/g, function(c){
        let r = (Math.random()* 16) | 0,
        v = c == "x" ? r : (r & 0x3) | 0x8;
        return v.toString(16)
    })
}
class User {
    static hydrate(data){  
        let userData = data.data.result     
        let address = userData.address
        userData.street = address.street
        userData.city = address.city
        userData.state = address.state
        userData.zip = address.zip
        let hydratedUser = new User(userData)
        return hydratedUser
    }
    constructor(user){
        this.firstName = user.firstName;
        this.middleName = user.middleName;
        this.lastName = user.lastName;
        this.DOB = user.DOB,
        this.role = user.role;
        this.licenseNumber = user.licenseNumber;
        this.email = user.email;
        this.phone = user.phone;
        this.password = user.password;
        this.address = {
            street: user.street,
            city: user.city,
            state: user.state,
            zip: user.zip
        }
        this.schedule = {};
        this.clients = {};
        this.supervisors = {} 
        this.employeeID = uuid()
    }
    addClient(data){
        let newClient = new UserClients(data);
        let id = newClient.id
        this.clients[id] = newClient
    }
    addSupervisor(data){
        let newSupervisor = new Supervisor(data);
        let id = newSupervisor.id
        this.supervisors[id] = newSupervisor
    }
    getFullName(){
        let fullName = this.firstName + " " + this.lastName
        return fullName
    }

}

class UserClients {
    constructor(data){
        this.id = data.id;
        this.firstName = data.firstName;
        this.lastName = data.lastName;
        this.DOB = data.DOB
    }
}
class Supervisor {
    constructor(data){
        this.id = data.id;
        this.firstName = data.firstName;
        this.lastName = data.lastName;
        this.DOB = data.DOB
    }
}

module.exports = {
    User,
    UserClients,
    Supervisor
}
