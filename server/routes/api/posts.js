const express = require('express')
const mongodb = require('mongodb')

const router = express.Router()

//Get posts
router.post('/patientData', async (req, res) => {
    console.log('test');
    let data = req.body
    console.log('request', req.body)
    const agg = [
        {
            '$match': {
                'patientID': data.patientID
            }
        },
   ]
    const posts = await patientCollection();
    posts.aggregate(agg).toArray(function (err, result) {
        res.json({
            patient: result
        })
    })

})

//add posts
router.post('/createNewPatient', async (req, res) => {
    let data = req.body
    let newPatient = {
        patientDemographic: {
            patientName: {
                firstName: data.firstName ,
                lastName: data.lastName,
                middleName: data.middleName
             }, 
             DOB: data.patientDOB 
                , 
            email: data.patientEmail, 
            phone: data.patientPhone, 
            guardians: [
                 { 
                firstName: data.patientGuardianFirstName,
                middleName: data.patientGuardianMiddleName, 
                lastName: data.patientGuardianLastName
             }, 
            ],
            address: {
                 street: data.patientStreet, 
                 city: data.patientCity,
                 state: data.patientState ,
                 zip: data.patientZip
                },                 
                insuredID: data.patientInsuredID, 
                relationshipSubscriber: data.patientRelationshipSubscriber 
            }
                ,
                 profilePicture: data.profilePhoto,
                 activityLog: "",
                 emergencyContacts: { },
                 healthRecords: {
                      allergies: 
                      [data.patientAllergies], 
                      medications: [
                          data.patientMedication
                        ],
                    menstruation: data.patientMenstruation,
                    diet: [
                        data.patientDiet
                    ] 
                }, 
                payors: {
                    insuranceInformation: {
                        payor: data.patientPayorName,
                        payorResponsibility: data.patientPayorResponsibility,
                        patientResponsibility: data.patientResponsibility, 
                        coverageDates: { 
                            startDate: data.patientInsuranceCoverageStartDate, 
                            endDate: data.patientInsuranceCoverageEndDate
                         }, 
                         insuranceContactPerson: {
                              firstName: data.patientInsuranceContactFirstName,
                              lastName: data.patientInsuranceContactLastName
                             },
                             insuranceStatus: data.patientInsuranceStatus
                             },
                            subscriberInformation: {
                                 name: { 
                                     firstName: data.patientSubscriberFirstName,
                                     lastName:  data.patientSubscriberLastName
                                     }, 
                                     DOB: data.patientSubscriberDOB,
                                         
                                        gender: data.patientSubscriberGender, 
                                        policy: data.patientPolicy, 
                                        group: data.patientGroup, 
                                        insuranceID: data.patientSubscriberInsuranceID, 
                                        address: { 
                                            street: data.patientStreetSubscriber,
                                            city: data.patientCitySubscriber,
                                            state: data.patientStateSubscriber, 
                                            zip: data.patientZipSubscriber 
                                        }
                                         } 
                                        }, 
                                        schedule: { 
                                            upcomingAppointment: "04-28-22",
                                            pastAppointment: ["04-22-22"] 
                                        }, 
                                        patientID: data.patientID
                                    }
    const db = await patientCollection();
    db.insertOne(newPatient)

})

router.post('/createNewClient', async (req, res) => {
    let data = req.body
    console.log('new client', data);
    const db = await clientCollection();
    db.insertOne(data)

})

//delete posts

async function clientCollection() {
    const client = await mongodb.MongoClient.connect(
    'mongodb+srv://newUser:AppleSandwhich@cluster0.lm2at.mongodb.net/?retryWrites=true&w=majority'
     , {
        useNewUrlParser: true
    });

    return client.db('ABA').collection('Client')
}

async function patientCollection() {
    const client = await mongodb.MongoClient.connect(
    'mongodb+srv://newUser:AppleSandwhich@cluster0.lm2at.mongodb.net/?retryWrites=true&w=majority'
     , {
        useNewUrlParser: true
    });

    return client.db('ABA').collection('Patient')
}

module.exports = router
