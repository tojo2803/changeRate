import {ref} from 'vue'
import { defineStore } from 'pinia'

export const booleanStore = defineStore("bool", () => {
    const bool = ref(false)
    const getBool = () => bool.value
    const changeBool = (newVal) => {
        bool.value = newVal
    } 

    return {
        getBool,
        changeBool
    }

})