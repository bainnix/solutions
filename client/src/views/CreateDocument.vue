<template>
<div>   
<AppTopBar />
  <QuillEditor  />
</div>
</template>

<script>
import { QuillEditor } from '@vueup/vue-quill'
import AppTopBar from "@/components/AppTopBar.vue";
import '@vueup/vue-quill/dist/vue-quill.snow.css';
export default {
 components: {
    QuillEditor,
    AppTopBar
  }
}
</script>

<style>
  .ql-container .ql-editor  {   
    min-height: 11in !important;
    padding: 1in !important ;
    width: 8.5in;
    box-shadow: 0 0 5px rgba(0, 0, 0, .5);
    background-color: white !important;
    margin: 3rem 0 !important;
 }
  .ql-container{
    display: flex;
    justify-content: center;
   
  }
  .ql-container {
    background-color: slategrey;
  }
 
  
</style>
