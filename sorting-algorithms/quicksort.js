let exemple = [20, 8, 2, 11, 13, 3, 7, 18, 14, 4, 16, 10, 15, 1, 9, 17, 19, 12, 5, 6];

/*
    Implementação baseada no que aprendi nas disciplinas de Programação Funcional e Algoritmos e Estruturas de Dados 1 e 2.
*/

let findAndPositionPivo = (arr, start, end) => {
    let pivo, esq, dir, aux;

    esq = start;
    dir = end;
    pivo = arr[start];

    while(esq < dir) {
        while(esq <= end && arr[esq] <= pivo) {
            esq++;
        }

        while(dir >= 0 && arr[dir] >= pivo) {
            dir--;
        }

        if(esq < dir) {
            aux = arr[esq];
            arr[esq] = arr[dir];
            arr[dir] = aux;
        }
    }

    arr[start] = arr[dir];
    arr[dir] = pivo;

    return dir;
}

let quicksortAux = (arr, start, end) => {
    if(end > start){
        let pivoPosition = findAndPositionPivo(arr, start, end);
    
        quicksortAux(arr, start, pivoPosition - 1);
        quicksortAux(arr, pivoPosition + 1, end);

    }
    
    return arr;

}

let quicksort = (arr) => {
    return quicksortAux(arr, 0, arr.length - 1)
}

console.log(quicksort(exemple));