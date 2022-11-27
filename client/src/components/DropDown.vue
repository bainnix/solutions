<template>
   <div v-if="showDropDown" class="dropDown">
    <template v-for="(key, item) in dropDownData" :key="item">  
        <div class="item" @click="navigate($event, key)">{{item}}</div>
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
        navigate(event, item){
              this.$router.push(`/${item}`)
            },
    } 
 }
 </script>
 
 <style>
 .dropDown{
    z-index: 100;
    background: red;
    width: 100px;
    height: 100px;
    color: white;
    padding: 5px;
}
.item:hover{
    background: blue;
}
 
 </style>
