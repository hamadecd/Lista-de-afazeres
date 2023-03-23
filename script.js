const input = document.querySelector("#input")
const btnAdd = document.querySelector("#add")
const btnLimpaLista = document.querySelector("#limpar")
const btnLimpa = document.querySelector("#remove")
const lista = document.querySelector("#lista")
const divPrincipal = document.getElementById("principal")
const contador = document.createElement("div");
contador.id = "contador";
document.body.insertBefore(contador, divPrincipal);

let cont = 0

// Executa a função quando o usuário pressionar uma tecla no teclado
input.addEventListener("keypress", function(event) {
  // Se a tecla pressionada for "Enter"
  if(event.key === "Enter") {
    // Então dispara o click do elemento botão adicionar
    document.getElementById("add").click()
  }
})

// Executa a função quando o usuário clicar no elemento
btnLimpaLista.addEventListener("click", () => {
  contador.innerText = "";
  cont = 0
  input.value = ""
  // Caso a lista esteja diferente de vazia, lista recebe vazia
  if(lista.innerHTML != "") {
    lista.innerHTML = ""
  } else {
    // Caso já esteja vazia, uma mensagem do tipo window é exibida informando o usuário
    window.alert("Lista já está vazia!")
  }
})

// // Executa a função quando o usuário clicar no elemento
btnLimpa.addEventListener("click", () => {
  // Variável que recebe uma lista com todos os elementos conforme especificado no parâmetro
  const itemsMarcados = lista.querySelectorAll("input[type='checkbox']:checked")
  // Se a lista estiver zerada exibe mensagem do tipo window informando o usuário
  if(itemsMarcados.length == 0) {
    window.alert("Não há tarefas realizadas")
  } else {
    contador.innerText = "Total de itens: " + (cont - itemsMarcados.length);
    // Percorre cada item da lista (no caso é um input), e remove o elemento li ao qual ele pertence
    itemsMarcados.forEach(item => {
      lista.removeChild(item.parentElement)
    })
  }
})

btnAdd.addEventListener("click", (event) => {
  if (input.value.length <= 2) {
    // Lançar um alerta, caso a tarefa tenha menos que 3 letras
    window.alert("O item deve ter, pelo menos, 3 letras.")
  } else {

    // Busca todos as tarefas da lista
    const listaItens = lista.querySelectorAll("li");

    // Verifica se a tarefa que está sendo adicionado já existe na lista
    for (let i = 0; i < listaItens.length; i++) {
      if (listaItens[i].querySelector("span").textContent === input.value) {
        // Caso já esteja na lista exibe mensagem e sai da função
        window.alert("Este item já foi adicionado à lista!");
        return;
      }
    }

    // Criando uma nova li para incluir uma nova tarefa
    const novoItem = document.createElement("li")
    // Criando um input (que será do tipo checkbox) para marcar se a tarefa já foi feita ou não
    const checkboxItem = document.createElement("input")
    // Criando uma span para inserir o texto da tarefa
    const textItem = document.createElement("span")
    // Criando um botão para remover a tarefa da lista
    const removeButtonItem = document.createElement("button")

    // Adicionando o texto que o usuário digitou no texto da tarefa
    textItem.textContent = input.value
    // Adicionando um novo atributo ao checkbox
    checkboxItem.setAttribute("type", "checkbox")
    // Adicionando texto "Remover" no botão
    removeButtonItem.textContent = "Remover"

    /* Adicionando event listener: Ao clicar no
    input[type="checkbox"] a tarefa será marcada (riscada)
    ou desmarcada (não riscada)
    */
    checkboxItem.addEventListener("click", (event) => {
      if (event.target.checked) {
        textItem.style.textDecoration = "line-through";
        textItem.style.opacity = 0.6
        checkboxItem.style.opacity = 0.6
      } else {
        textItem.style.textDecoration = "none"
        textItem.style.opacity = 1
        checkboxItem.style.opacity = 1
      }
    })

    // Inserindo o checkbox, o texto e o botão de remover na li (novoItem)
    novoItem.insertAdjacentElement("beforeend", checkboxItem)
    novoItem.insertAdjacentElement("beforeend", textItem)
    novoItem.insertAdjacentElement("beforeend", removeButtonItem)

    // Adicionando a li (novoItem) na ul (lista)
    lista.appendChild(novoItem)

    // Adicionando o event listener para remover a nova
    // tarefa, caso haja um clique sobre ele
    // (veja a função removerItem abaixo)
    removeButtonItem.addEventListener("click", removerItem)

    cont++
    contador.innerText = "Total de itens: " + cont;

    // Limpando o conteúdo do input quando a tarefa é adicionada
    input.value = ""
  }
})

// Função chamada quando o ocorre o evento de clique sobre o botão remover
function removerItem(event) {
  lista.removeChild(event.target.parentElement)
  contador.innerText = "Total de itens: " + (--cont)
  if(cont == 0) {
    contador.innerText = ""
  }
}