let exemple = [20, 8, 2, 11, 13, 3, 7, 18, 14, 4, 16, 10, 15, 1, 9, 17, 19, 12, 5, 6];

let findAndDeletePivo = (arr) => {
    let pivo = arr.shift();
    return pivo;
}

let quicksort = (arr) => {
    if (arr.length == 1 || arr.length == 0) {
        return arr;
    } else {
        let pivo = findAndDeletePivo(arr);
        let smaller = [];
        let bigger = [];

        for (let i = 0; i < arr.length; i++) {
            if (arr[i] < pivo) {
                smaller.push(arr[i]);
            } else {
                bigger.push(arr[i]);
            }
        }

        return quicksort(smaller).concat(pivo, quicksort(bigger));
    }
}

console.log(quicksort(exemple));