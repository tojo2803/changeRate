
export const display_select = (display) => {
    display.value = !display.value
}
export const selectItem = (item) => {
    inputValue.value = item
    display_select()
}

