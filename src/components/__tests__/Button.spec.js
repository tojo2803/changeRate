import { mount } from '@vue/test-utils'
import Button from '@/components/Button.vue'
import { createPinia, setActivePinia } from 'pinia'
import { dataStore } from '@/stores/data'
import axios from 'axios'
import { vi, describe, it, beforeEach, expect } from 'vitest'


vi.mock('axios') // Mock de axios pour simuler l'API

describe('Button.vue', () => {
    beforeEach(() => {
        // Création d'une nouvelle instance de Pinia pour chaque test
        setActivePinia(createPinia())
    })

    it("appelle de l' API et  mise à jours des donner dans datastore et booleanStore", async () => {
        // Définition de la réponse simulée de l'API
        const mockResponse = {
            data: { conversion_result: 120, conversion_rate: 0.85 }
        }
        axios.get.mockResolvedValue(mockResponse) // Configuration pour retourner la réponse simulée

        // Création des instances de stores pour vérifier les valeurs mises à jour
        const datastore = dataStore()
 

        // Montée du composant
        const wrapper = mount(Button)

        // Simulation du clic sur le bouton
        await wrapper.find('button').trigger('click')

        // Assertions pour vérifier si les données ont bien été mises à jour
        expect(datastore.getResult_conversion()).toBe(120)       // Résultat de conversion
        expect(datastore.getConversion_rate()).toBe(0.85)        // Taux de conversion                    // Vérification que le booléen a été mis à jour
        expect(axios.get).toHaveBeenCalledOnce()                 // Vérification que l'API a été appelée une seule fois
        expect(axios.get).toHaveBeenCalledWith(
            `https://v6.exchangerate-api.com/v6/90bb15c95d856edac661b43e/pair/${datastore.getDevise_depart()}/${datastore.getDevise_arriver()}/${datastore.getMontant()}`
        )
    })
})
