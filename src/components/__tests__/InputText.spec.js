// import { mount } from '@vue/test-utils';
// import { describe, it, expect, vi } from 'vitest'; // Utilisez Jest si c'est votre outil de test
// import { dataStore } from '@/stores/data';
// import { booleanStore } from '@/stores/booleanStore';
// import inputText from '@/components/InputText.vue'; // Remplacez par le chemin réel

// vi.mock('@/stores/data', () => ({
//   dataStore: vi.fn(() => ({
//     setMontant: vi.fn(),
//     getDevise_depart: vi.fn(() => 'USD'),
//   })),
// }));

// vi.mock('@/stores/booleanStore', () => ({
//   booleanStore: vi.fn(() => ({
//     changeBool: vi.fn(),
//   })),
// }));

// describe('inputText.vue', () => {
//   it('met à jour les données dans les stores lorsque montant change', async () => {
//     const datastoreMock = dataStore();
//     const booleanstoreMock = booleanStore();

//     const wrapper = mount(inputText);

//     const input = wrapper.find('input');
//     await input.setValue(1);

//     // Vérifie que les méthodes des stores sont appelées
//    expect(dataStore.setMontant).toHaveBeenCalledWith(1);
//    // expect(booleanstoreMock.changeBool).toHaveBeenCalledWith(false);
//   });

//   it('affiche correctement la devise de départ', () => {
//     const datastoreMock = dataStore();
//     datastoreMock.getDevise_depart.mockReturnValue('USD');

//     const wrapper = mount(inputText);

//     const p = wrapper.find('p');
//     expect(p.text()).toBe('USD-');
//   });
// });
