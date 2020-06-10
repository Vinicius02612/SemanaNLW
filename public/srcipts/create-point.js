//selcionado os estados 


function populationUfs() {
    const ufSelect = document.getElementById("ufs")


    fetch("https://servicodados.ibge.gov.br/api/v1/localidades/estados")
        .then((res) => res.json())
        .then(states => {
            for (const estados of states) {
                ufSelect.innerHTML += `<option value="${estados.id}">${estados.nome}</option>`
            }
        })
}
populationUfs()

//selecionando cidades


function getCidade(event) {
    const citySelect = document.querySelector("[name=city]")
    const stateInput = document.querySelector("[name=state]")

    const Ufvalue = event.target.value;

    console.log(Ufvalue)

    const indexOfSelectedState = event.target.selectedIndex
    stateInput.value = event.target.options[indexOfSelectedState].text

    console.log(stateInput.value)

    //const url = `https://servicodados.ibge.gov.br/api/v1/localidades/estados/${Ufvalue}/distritos`

    const url = `https://servicodados.ibge.gov.br/api/v1/localidades/estados/${Ufvalue}/municipios`

    citySelect.innerHTML = "<option value>Selecione a Cidade</option>"
    fetch(url)
        .then(res => res.json())
        .then(cities => {

            for (const city of cities) {
                console.log(`${city.nome}`)
                citySelect.innerHTML += `<option value="${city.nome}">${city.nome}</option>`
            }


        })

}
document.querySelector("select[nome=uf]")
document.addEventListener("change", getCidade)

// itens de coletas.......
//pegando todos so Li

const intemToCollect = document.querySelectorAll(".item-grid")



for (let item of intemToCollect) {
    item.addEventListener("click", handleSelectedItem)
}

const colectedItems = document.querySelector("input[name=items]")


let selectItem = []

function handleSelectedItem(event) {
    const itemLI = event.target;


    itemLI.classList.toggle("item-grid")

    const itemId = itemLI.dataset.id

    console.log("Este é o  =>", itemId)
        //verifocar se existem item seleconados, se sim 
        //pegar os itens selecionados


    const alreadySeleced = selectItem.findIndex(item => {
            const itemFoun = item == itemId //retorna true ou false
            return itemFoun
        })
        //se ja estier selecionado, tirar da seleção
    if (alreadySeleced >= 0) {
        const filterItems = selectItem.filter(item => {
            const itemDiferente = item != itemId
            return itemDiferente
        })
        selectItem = filterItems
    } else {
        selectItem.push(itemId)
    }


    console.log('selectItem => ', selectItem)

    //se nao estiver ,  adcionar a seleção

    //atualizar o campo  escondido com itens selecionados
    colectedItems.value = selectItem




}