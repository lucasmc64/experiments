let exemple = [20, 8, 2, 11, 13, 3, 7, 18, 14, 4, 16, 10, 15, 1, 9, 17, 19, 12, 5, 6];

/*
    Implementação baseada no que aprendi nas disciplinas de Programação Funcional e Algoritmos e Estruturas de Dados 1 e 2.
*/

// Versão sem recursão

let bubblesortAuxL = (arr, n) => {
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

let bubblesortL = (arr) => {
    return bubblesortAuxL(arr, arr.length);
}

// Versão com recursão

let bubblesortAuxF = (arr, n) => {
    if(n == 0) {
        return arr;
    } else {
        let aux, count_changes = 0;

        for(let i = 0; i < n; i++) {
            if(arr[i] > arr[i + 1]) {
                aux = arr[i + 1];
                arr[i + 1] = arr[i];
                arr[i] = aux;
                count_changes++;
            }
        }

        return !count_changes ? arr : bubblesortAuxF(arr, n - 1);
    }
}

let bubblesortF = (arr) => {
    return bubblesortAuxF(arr, arr.length);
}

console.log(bubblesortL(exemple));