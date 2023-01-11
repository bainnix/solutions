<template>
   <div v-if="showDropDown" class="dropDown">
    <template v-for="(key, item) in dropDownData" :key="item">  
        <div class="item" @click="navigate($event, key)">{{key}}</div>
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
 
 <style scoped>
 .dropDown{
    z-index: 100;
    background: red;
    width: 100px;
    height: auto;
    color: white;
    padding: 5px;
}
.item:hover{
    background: blue;
}
 
 </style>
