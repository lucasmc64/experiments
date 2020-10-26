let exemple = [20, 8, 2, 11, 13, 3, 7, 18, 14, 4, 16, 10, 15, 1, 9, 17, 19, 12, 5, 6];

/*
    Essa implementação é apenas um teste. 
    Ela não está otimizada pois:
        * não para quando está ordenado, ou seja, vai se chamar recursivamente as `n` vezes;
*/

let bubblesortAux = (arr, n) => {
    if(n == 0) {
        return arr;
    } else {
        let aux;
    
        for(let i = 0; i < n; i++) {
            if(arr[i] > arr[i + 1]) {
                aux = arr[i + 1];
                arr[i + 1] = arr[i];
                arr[i] = aux;
            }
        }

        return bubblesortAux(arr, n - 1);
    }
}

let bubblesort = (arr) => {
    return bubblesortAux(arr, arr.length);
}

console.log(bubblesort(exemple));