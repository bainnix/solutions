// class CalendarScheduler{
//     static Days = {
//         SUNDAY: "Sunday",
//         MONDAY: "Monday",
//         TUESDAY: "Tuesday",
//         WEDNESDAY: "Wednesday",
//         THURSDAY: "Thursday",
//         FRIDAY: "Friday",
//         SATURDAY: "Saturday",
//     }
//     static Months = {
//         JANUARY: "January",
//         FEBUARY: "Febuary",
//         MARCH:  "March",
//         APRIL: "April",
//         MAY: "May",
//         JUNE: "June",
//         JULY: "July",
//         AUGUST: "August",
//         SEPTEMBER: "September",
//         OCTOBER: "October",
//         NOVEMBER: "November",
//         DECEMBER: "December" 
//     }
//     constructor(today=Date.now()){
//         this.days = {
//             0 : CalendarScheduler.Days.SUNDAY,
//             1 : CalendarScheduler.Days.MONDAY,
//             2 : CalendarScheduler.Days.TUESDAY,
//             3 : CalendarScheduler.Days.WEDNESDAY,
//             4 : CalendarScheduler.Days.THURSDAY,
//             5 : CalendarScheduler.Days.FRIDAY,
//             6 : CalendarScheduler.Days.SATURDAY,            
//         }
//         this.months = {
//             0 : CalendarScheduler.Months.JANUARY,
//             1 : CalendarScheduler.Months.FEBUARY,
//             2 : CalendarScheduler.Months.MARCH,
//             3 : CalendarScheduler.Months.APRIL,
//             4 : CalendarScheduler.Months.MAY,
//             5 : CalendarScheduler.Months.JUNE,
//             6 : CalendarScheduler.Months.JULY,
//             7 : CalendarScheduler.Months.AUGUST,
//             8 : CalendarScheduler.Months.SEPTEMBER,
//             9 : CalendarScheduler.Months.OCTOBER,
//             10 : CalendarScheduler.Months.NOVEMBER,
//             11: CalendarScheduler.Months.DECEMBER,
//         }
//         this.today = new Date(today)
//         this.grid = new Array(5)
//     }
//     getCurrentMonth(){
//         let today = this.today
//         let month = today.getMonth()
//         return this.months[month]
//     }
//    getDaysInMonth(){
//         return 32 - new Date(this.today.getFullYear(), this.today.getMonth(), 32).getDate() ;
//    }

// }

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


module.exports ={
    // CalendarScheduler,
    CalendarEvent
}
