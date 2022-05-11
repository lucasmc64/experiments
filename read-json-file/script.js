"use strict";

// PT: Selecionando o input na árvore do DOM
// EN: Selecting the input in the DOM tree

const input = window.document.querySelector('input[type="file"]');

// PT: Solução 1a - Assíncrona
// EN: Solution 1a - Asynchronous

let json1a;

function handleJsonChange1a(event) {
  // PT: Criando uma instância do `FileReader`
  // EN: Creating an instance of `FileReader`
  const reader = new FileReader();

  // PT: Adicionando a função que executará assim que o arquivo for carregado/lido
  // EN: Adding the function that will run once the file is loaded/read
  reader.onload = function ({ target: { result } }) {
    // PT: Convertendo o resultado da leitura (uma string) para JSON e armazenando-o
    // EN: Converting the reading result (a string) to JSON and storing it
    json1a = JSON.parse(result);
  };

  // PT: Lendo o arquivo
  // EN: Reading the file
  reader.readAsText(event.target.files[0]);
}

input.addEventListener("change", handleJsonChange1a);

// PT: Solução 1b - Síncrona
// EN: Solution 1b - Synchronous

let json1b;

async function handleJsonChange1b(event) {
  json1b = await new Promise((resolve) => {
    // PT: Criando uma instância do `FileReader`
    // EN: Creating an instance of `FileReader`
    const reader = new FileReader();

    // PT: Adicionando a função que executará assim que o arquivo for carregado/lido
    // EN: Adding the function that will run once the file is loaded/read
    reader.onload = function ({ target: { result } }) {
      // PT: Convertendo o resultado da leitura (uma string) para JSON e retornando-o como resultado da promise
      // EN: Converting the reading result (a string) to JSON and returning it as a result of the promise
      resolve(JSON.parse(result));
    };

    // PT: Lendo o arquivo
    // EN: Reading the file
    reader.readAsText(event.target.files[0]);
  });
}

input.addEventListener("change", handleJsonChange1b);

// PT: Solução 2
// EN: Solution 2

let json2;

async function handleJsonChange2(event) {
  // PT:
  // EN:

  const response = await fetch(URL.createObjectURL(event.target.files[0]));

  // PT:
  // EN:

  json2 = await response.json();
}

input.addEventListener("change", handleJsonChange2);

// PT: Solução 3
// EN: Solution 3

let json3;

async function handleJsonChange3(event) {
  // PT:
  // EN:

  const fakeResponse = new Response(event.target.files[0]);

  // PT:
  // EN:

  json3 = await fakeResponse.json();
}

input.addEventListener("change", handleJsonChange3);
