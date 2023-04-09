<template>
    <div v-if="showDropDown" class="dropDown">
     <template v-for="(key, item) in dropDownData" :key="item">  
         <div class="item" @click="choosenUser(key)">{{key.id}}: {{key.lastName}}, {{key.firstName}}, {{key.DOB}}</div>
     </template>
    </div>
  </template>
  
  <script> 
  export default {
     props:['dropDownData', "showDropDown"],
     data(){
         return{ 
         }
     }, 
     methods:{
        choosenUser(selected){
            let patientData = {
                id: selected.id,
                firstName: selected.firstName,
                lastName: selected.lastName,
                DOB: selected.DOB
            }
            this.$emit("choosenUser", patientData);
             },
     } 
  }
  </script>
  
  <style scoped>
  .dropDown{
     z-index: 100;
     background: red;
     width: 400px;
     height: auto;
     color: white;
     padding: 5px;
 }
 .item:hover{
     background: blue;
     cursor: pointer;
 }
  
  </style>
 