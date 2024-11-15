<script setup>
import {ref, watch, defineProps, onMounted} from "vue"
import { dataStore } from "@/stores/data";
import axios from 'axios'
import { booleanStore } from "@/stores/booleanStore";
const props = defineProps(['devise','default_devise'])
const listeDevisesinit = ref([]);
const listeDevises = ref([]);
const display = ref(false)
const txt  = ref("")
const inputValue = ref("")  
const datastore = dataStore()
const booleanstore = booleanStore()
const getDevise = async ()=>{
    await axios.get("https://v6.exchangerate-api.com/v6/90bb15c95d856edac661b43e/codes").then(res => { 
        res.data.supported_codes.map((value) => {
              listeDevises.value.push(value.join(" - "))
              listeDevisesinit.value.push(value.join(" - "))
              
        })
    })
}

onMounted(() => {
    getDevise()
})

const display_select = () => {
  
    display.value = !display.value
}
const selectItem = (item) => {
  if(inputValue.value != item){
    inputValue.value = item
    if(props.devise == "devise_depart"){
      datastore.setDevise_depart(item.substr(0, 3))
    }else{
      datastore.setDevise_arriver(item.substr(0, 3))
    }
    booleanstore.changeBool(false)
  }else {
    inputValue.value = item
    if(props.devise == "devise_depart"){
      datastore.setDevise_depart(item.substr(0, 3))
    }else{
      datastore.setDevise_arriver(item.substr(0, 3))
    }
  }
    display_select() 
}
watch(txt, () => {
    if(txt.value != '' ){
        listeDevises.value = listeDevisesinit.value.filter((objet) => {
            return objet.includes(txt.value.toUpperCase())
        })
    }else{
        listeDevises.value  = listeDevisesinit.value
    }
})

</script>
<template>

  <div>
    <div class="search" v-if = "!display">
      <input class="ipt ms-1" type="text" :value="[inputValue == '' ? default_devise: inputValue ]" /><img
        class="me-1"
        src="./icons/arrow.svg"
      
        @click="display_select()"
      />
    </div>
    <div v-if = "display">
      <div class="search">
        <input
          class="ipt"
          type="text"
          placeholder="chercher le nom du Devise"
          v-model="txt"

        /><img src="./icons/close.svg" @click="display_select()" />
      </div>
      <div class="liste mt-2">
        <p
          class="list d-flex align-items-center"
          v-for="(item, key) in listeDevises"
          v-bind:key="key"
          @click="selectItem(item)"
        >
          <img alt="drp" width="20px" height="20px" class="me-1" />
          {{ item}}
        </p>
      </div>
    </div>
  </div>
</template>
<style scoped src=".assets/inputSelect.css">

</style>