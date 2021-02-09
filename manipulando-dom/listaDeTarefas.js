//utilizando data atributes para caso o nome do id ou classe mudar, não ser necessário alterar o no script JS
const novaTarefa = document.querySelector('[data-form-button]')

const input = document.querySelector('[data-form-input]').value

novaTarefa.addEventListener('click', () => {
    const input = document.querySelector('[data-form-input]').value
    console.log('Fui clicado')
    console.log(input);
})

