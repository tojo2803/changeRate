<script setup>
import {ref, watch} from "vue"
import { dataStore } from "@/stores/data";
import { booleanStore } from "@/stores/booleanStore";
const montant = ref(1)
const datastore = dataStore()
const booleanstore = booleanStore()
watch(montant, () => {
  datastore.setMontant(montant.value)
  booleanstore.changeBool(false)
})
</script>
<template>

  <div class="d-flex align-items-center inputIn">
    <p class="mb-0 ms-1">{{ datastore.getDevise_depart() }}- </p>
    <input
      class="input_value"
      type="number"
      placeholder="1"
      v-model.number="montant"
    />
  </div>
</template>
<style scoped>

.input_value:focus {
  outline: none;
}
.input_value {
  width: 300px;
  height: 35px;
  border: none;
}
.inputIn {
  border: 0.5px solid black;
  border-radius: 5px;
  width: 300px;
 
}
</style>