const express = require('express')
const mongodb = require('mongodb')

const router = express.Router()

//Get posts
router.post('/clientData', async (req, res) => {
    let data = req.body
    console.log('request', req.body)
    const agg = [
        {
            '$match': {
                'clientID': data.clientID
            }
        },
   ]
    const posts = await loadPostsCollection();
    posts.aggregate(agg).toArray(function (err, result) {
        res.json({
            client: result
        })
    })

})

router.post('/totalNumberOfClients', async (req, res) => {
    
  
    const agg = [
        {
            '$match': {
                
            }
        },
   ]
    const posts = await loadPostsCollection();
    posts.aggregate(agg).toArray(function (err, result) {
        res.json({
            client: result
        })
    })

})




//add posts
router.post('/createNewClient', async (req, res) => {
    let data = req.body
    let newClient = {
        clientDemographic: {
            clientName: {
                firstName: data.firstName ,
                lastName: data.lastName,
                middleName: data.middleName
             }, 
             DOB: data.clientDOB 
                , 
            email: data.clientEmail, 
            phone: data.clientPhone, 
            guardians: [
                 { 
                firstName: data.clientGuardianFirstName,
                middleName: data.clientGuardianMiddleName, 
                lastName: data.clientGuardianLastName
             }, 
            ],
            address: {
                 street: data.clientStreet, 
                 city: data.clientCity,
                 state: data.clientState ,
                 zip: data.clientZip
                },                 
                insuredID: data.clientInsuredID, 
                relationshipSubscriber: data.clientRelationshipSubscriber 
            }
                ,
                 profilePicture: data.profilePhoto,
                 activityLog: "",
                 emergencyContacts: { },
                 healthRecords: {
                      allergies: 
                      [data.clientAllergies], 
                      medications: [
                          data.clientMedication
                        ],
                    menstruation: data.clientMenstruation,
                    diet: [
                        data.clientDiet
                    ] 
                }, 
                payors: {
                    insuranceInformation: {
                        payor: data.clientPayorName,
                        payorResponsibility: data.clientPayorResponsibility,
                        clientResponsibility: data.clientResponsibility, 
                        coverageDates: { 
                            startDate: data.clientInsuranceCoverageStartDate, 
                            endDate: data.clientInsuranceCoverageEndDate
                         }, 
                         insuranceContactPerson: {
                              firstName: data.clientInsuranceContactFirstName,
                              lastName: data.clientInsuranceContactLastName
                             },
                             insuranceStatus: data.clientInsuranceStatus
                             },
                            subscriberInformation: {
                                 name: { 
                                     firstName: data.clientSubscriberFirstName,
                                     lastName:  data.clientSubscriberLastName
                                     }, 
                                     DOB: data.clientSubscriberDOB,
                                         
                                        gender: data.clientSubscriberGender, 
                                        policy: data.clientPolicy, 
                                        group: data.clientGroup, 
                                        insuranceID: data.clientSubscriberInsuranceID, 
                                        address: { 
                                            street: data.clientStreetSubscriber,
                                            city: data.clientCitySubscriber,
                                            state: data.clientStateSubscriber, 
                                            zip: data.clientZipSubscriber 
                                        }
                                         } 
                                        }, 
                                        schedule: { 
                                            upcomingAppointment: "04-28-22",
                                            pastAppointment: ["04-22-22"] 
                                        }, 
                                        clientID: data.clientID
                                    }
    const db = await loadPostsCollection();
    db.insertOne(newClient)

})



//delete posts

async function loadPostsCollection() {
    const client = await mongodb.MongoClient.connect(
        'mongodb+srv://jmm2389:Machines1!@cluster0.lm2at.mongodb.net', {
        useNewUrlParser: true
    });

    return client.db('ABA').collection('Client')
}

module.exports = router
