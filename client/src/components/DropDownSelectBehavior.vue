<template>
    <div v-if="showDropDown" class="dropDown">
     <template v-for="(key, item) in dropDownData.questions" :key="item">  
         <div class="item" @click="choosenBehavior(key.text)">Select Behavior: {{key.text}}</div>
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
        choosenBehavior(selected){
          
            this.$emit("choosenBehavior", selected );
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
 