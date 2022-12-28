<template>
    <li
      class="calendar-day"
      :class="{
        'calendar-day--not-current': !day.isCurrentMonth,
        'calendar-day--today': isToday
      }"
    >
      <span>{{ label }}</span>
   
      <EventPopUp :day="day.date" />
      
    </li>
  </template>
  
  <script>
  import dayjs from "dayjs";
  import EventPopUp from "@/components/EventPopUp.vue";

  export default {
    name: "CalendarMonthDayItem",
  
    props: ["day", "isCurrentMonth", "isToday",'attendeeData'],
    data() {
		return {
			open: false

		};
	},
    components:{
        EventPopUp
    },  
  
    computed: {
      label() {
        return dayjs(this.day.date).format("D");
      },
    }
  };
  </script>
  
  <style scoped>
  .calendar-day {
    position: relative;
    min-height: 100px;
    font-size: 16px;
    background-color: #fff;
    color: var(--grey-800);
    padding: 5px;
  }
  
  .calendar-day > span {
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    right: 2px;
    width: var(--day-label-size);
    height: var(--day-label-size);
  }
  
  .calendar-day--not-current {
    background-color: var(--grey-100);
    color: var(--grey-300);
  }
  
  .calendar-day--today {
    padding-top: 4px;
  }
  
  .calendar-day--today > span {
    color: #fff;
    border-radius: 9999px;
    background-color: var(--grey-800);
  }
  </style>
  