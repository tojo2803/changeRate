<script setup>
//import HelloWorld from './components/HelloWorld.vue'
import Button from "./components/Button.vue";
import InputSelect from "./components/InputSelect.vue";
import InputText from "./components/InputText.vue";
import { dataStore } from "./stores/data";
import { booleanStore } from "./stores/booleanStore"
const datastore = dataStore()
const booleanstore = booleanStore()
</script>

<template>
  <div class="container-toto rounded">
    <div class="row mt-5">
      <div class="col-lg-3 "><p class="fw-normal fs-5 ms-5">Montant :</p></div>
      <div class="col-lg-3 "><p class="fw-normal fs-5 ms-5" >Devise de depart :</p></div>
      <div class="col-lg-3 "><p class="fw-normal fs-5 ms-5" >Devise d'arriver :</p></div>
    </div>
    <div class="row ps-5">
      <div class="col-lg-3 text-center ">
        <InputText></InputText>
      </div>
      <div class="col-lg-3 text-center "><InputSelect devise="devise_depart" default_devise="USD - United States Dollar"></InputSelect></div>
      <div class="col-lg-3 text-center "><InputSelect devise="devise" default_devise="EUR - Euro"></InputSelect></div>
      <div class="col-lg-3 text-center"><Button /></div>
    </div>
    <div class="container-fluid mt-5 p-0" v-if="booleanstore.getBool()">
      <p class="ms-5 fw-lighter fs-4"> {{datastore.getMontant()}} {{ datastore.getDevise_depart() }} =</p>
      <p class="ms-5 fw-semibold fs-1">{{ datastore.getResult_conversion() }} {{ datastore.getDevise_arriver() }}</p>
      <p class="ms-5 fw-lighter fs-4"> 1,00 {{ datastore.getDevise_depart() }} = {{ datastore.getConversion_rate() }} {{ datastore.getDevise_arriver() }}</p>
    </div>
  </div>
</template>

<style scoped>
.container-toto {

  position:absolute;
  width: 1500px;
  height: 400px;
  padding: 0;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
 
}

header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
