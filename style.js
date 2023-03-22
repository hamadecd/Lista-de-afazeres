// Criando a tag style
const styleTag = document.createElement("style");

// Adicionando o conteúdo da tag style
styleTag.innerHTML = `
  body {
    background-color: #222222;
    color: #e7e7e7;
    margin: 2rem;
    width: 50%;
  }

  body > div {
    display: flex;
  }

  input#input {
    font-size: 1rem;
    font-weight: bold;
    height: 28px;
    border-radius: 5px;
    border: none;
    flex: 1;
  }

  .btn {
    font-size: 1rem;
    border: none;
    background-color: rgb(245, 179, 36);
    height: 30px;
    padding: 0 15px;
    border-radius: 5px;
    margin-left: 10px;
    cursor: pointer;
  }

  ul#lista {
    list-style: none;
    padding: 2rem 0;
    margin-top: 0;
  }

  li {
    background-color: gray;
    margin-bottom: 2px;
    padding: 0;
    display: flex;
    gap: 5px;
    align-items: center;
  }

  input[type="checkbox"] {
    height: 1.2rem;
    width: 1.2rem;
  }

  #lista > li > span {
    font-size: 1.2rem;
    font-weight: 500;
    flex: 1;
  }

  #lista > li > .checked {
    text-decoration: line-through;
        opacity: 0.6;
  }

  #lista > li > button {
    font-size: 0.85rem;
    border: none;
    background-color: red;
    color: white;
    padding: 4px 10px 5px;
    border-radius: 5px;
    margin-left: 10px;
    cursor: pointer;
  }

  #contador {
    margin-bottom: 5px;
    font-size: 20px;
  }
`;

// Obtendo a tag head do HTML
const headTag = document.querySelector("head");
// Inserindo a tag style como filha da tag head (ao final)
headTag.appendChild(styleTag);