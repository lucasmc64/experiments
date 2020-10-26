let exemple = [20, 8, 2, 11, 13, 3, 7, 18, 14, 4, 16, 10, 15, 1, 9, 17, 19, 12, 5, 6];

/*
    Implementação baseada no que aprendi nas disciplinas de Programação Funcional e Algoritmos e Estruturas de Dados 1 e 2.
*/

let bubblesortAux = (arr, n) => {

    let aux, proceed, end = n;

    do {
        proceed = 0;

        for(let i = 0; i < end - 1; i++) {
            if(arr[i] > arr[i + 1]) {
                aux = arr[i + 1];
                arr[i + 1] = arr[i];
                arr[i] = aux;
                proceed = i;
            }
        }

        end--;
    } while(proceed != 0);

    return arr; 
}

let bubblesort = (arr) => {
    return bubblesortAux(arr, arr.length);
}

console.log(bubblesort(exemple));