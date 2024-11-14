<script setup>
import {dataStore} from "../stores/data"
import axios from "axios"
import { booleanStore } from "@/stores/booleanStore";
const datastore = dataStore()
const booleanstore = booleanStore()
const  convertion = async() => {
    await axios.get(`https://v6.exchangerate-api.com/v6/90bb15c95d856edac661b43/pair/${datastore.getDevise_depart()}/${datastore.getDevise_arriver()}/${datastore.getMontant()}`).then(res => {
        datastore.setResult_conversion(res.data.conversion_result)
        datastore.setConversion_rate(res.data.conversion_rate)
        booleanstore.changeBool(true)
    })
}

</script>

<template>
    <button type="button" class="btn btn-outline-primary" @click="convertion()">convertir</button>
</template>
<style scoped>

</style>