import { ref } from 'vue'
import { defineStore } from 'pinia'

export const dataStore = defineStore("data",() => {
    const data = ref({
        montant : 1,
        devise_depart : "USD",
        devise_arriver: "EUR"
        })
    const result_conversion = ref(0)
    const conversion_rate = ref(0)
    const setResult_conversion = (newVal) => {
        result_conversion.value = newVal
    }
    const setConversion_rate = (newVal) => {
        conversion_rate.value = newVal
    }
    const getConversion_rate = () => conversion_rate.value
    const getResult_conversion = () => result_conversion.value
    const getMontant = () =>  data.value.montant
    const getDevise_depart = () => data.value.devise_depart
    const getDevise_arriver = () => data.value.devise_arriver
    const setDevise_depart = (newVal) => {
        data.value.devise_depart = newVal
    }
    const setDevise_arriver = (newVal) => {
        data.value.devise_arriver = newVal
    } 
    const setMontant = (newVal) => {
        data.value.montant = newVal
    }
    const getData = () => data.value
    return {
        getConversion_rate,
        setConversion_rate,
        setResult_conversion,
        getResult_conversion,
        getMontant,
        getDevise_depart,
        getDevise_arriver,
        setMontant,
        setDevise_depart,
        setDevise_arriver,
        getData
    }
})