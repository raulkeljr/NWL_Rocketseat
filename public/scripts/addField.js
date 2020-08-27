// Procurar o botão
document.querySelector("#add-time") //vai localizar o botão
.addEventListener('click', cloneField) // vai auditar um evento e irá criar uma rotina
//Quando clicar no botão

// Executar uma ação
function cloneField() { //criamos uma função chamada cloneField
    const newFieldContainer = document.querySelector('.schedule-item').cloneNode(true) //"Node" se refere a tag HTML, está localizando e duplicando a tag.

    //limpar os campos
    const fields = newFieldContainer.querySelectorAll('input')

    //fields[0].value = "", limpa a variavel
    fields.forEach(function(field) {
        //pegar cada variavel fields e armazena em field  e despois limpa
        field.value = ""
    })
    

    document.querySelector('#schedule-items').appendChild(newFieldContainer)

}
    //duplicar o campos

    //colocar na pagina