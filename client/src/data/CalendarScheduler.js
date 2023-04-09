

class CalendarEvent {
    constructor(data) {
        this.date = data.date;
        this.startTime = data.startTime;
        this.endTime = data.endTime;
        this.event = data.event;
        this.createdBy = data.createdBy
        this.attendee = {}
    }
    addAttendee(attendee){
        for(let attendent in attendee){
            this.attendee[attendent] = attendee
        }
    }
}

class FilteredAttendeeData {
    static combineAttendeeData(client){

    }

}
// ::TODO:: create class for filtered clients, patients, therapists


module.exports ={
    FilteredAttendeeData,
    CalendarEvent
}
