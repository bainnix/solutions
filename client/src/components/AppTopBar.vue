<template>
  <div class="container">
    <div class="nav-bar-links">
      <div @click="showDropDown=!showDropDown"> 
        <div>Client</div>
        <MenuDropDown class="dropDown" :dropDownData="clientDropDown" :showDropDown="showDropDown"/>
      </div>

    </div>
      <h4 class="nav-bar-links" @click="navigateCreateClient">Client</h4>
      <h4 class="nav-bar-links" @click="navigateCreateDocument">Create Document</h4>
 
  </div>
</template>

<script>
import MenuDropDown from '@/components/DropDown.vue'
export default {
  data(){
    return{
      showDropDown: false,
      clientDropDown:{
        ClientLookUp: "ClientLookUp",
        CreateClient: "CreateClient"
      }

    }
  },  
    methods:{

        navigateClientLookUp(){
              this.$router.push("/ClientLookUp")
            },
            navigateCreateClient(){
              this.$router.push("/CreateClient")
            },
            navigateCreateDocument(){
              this.$router.push("/CreateDocument")
            }

    },
    components:{

      MenuDropDown
      
    }

}
</script>

<style scoped >
    .container{
        width: 100%;
        background-color: black;
        color: whitesmoke;   
        text-align: left;
        padding: 1rem;
        display: flex;
        justify-content: space-around;
    }
    .nav-bar-links:hover{
        cursor: pointer;
    }
    .dropDown{
      position: absolute;
    }
    
</style>
