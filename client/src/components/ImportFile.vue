<template>
<div>
  <input
  type="file"
  style="display: none"
  ref="fileInput"
  @change="onFilePicked"
  
  />
  <Button
    v-if="imageData == null"
   @click="$refs.fileInput.click()" 
   style="cursor: pinter"
   class="p-button-rounded p-button-outlined"
   icon="pi pi-paperclip p-button-icon"

  />
 
    
</div>
</template>

<script>
import Button from 'primevue/button';

export default {
    
        data(){
        return{
            imageData: null
        }
    },
    methods: {
        onFilePicked: async function(event){
            
            const image = event.target.files[0];
            const fileReader = new FileReader();
            fileReader.readAsDataURL(image);
            let self = this
            fileReader.onload = async function(e) {
                self.imageData = e.target.result
                self.$emit('photo', self.imageData)
            }            
        },
      
    },
    components:{
        Button,
    }
    
}
</script>

<style scoped>

</style>
