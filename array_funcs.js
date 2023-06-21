function checkArr (arr) {
    if (arr.length != 0) {
        return true;
     } else
       return false;
    }

function arrayMax(arr) {
if (checkArr(arr)) {
    let max = arr[0];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    return max;
} else 
    return (`пустой массив`);
}

function arraySum(arr) {
if (checkArr(arr)) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum;
} else 
    return (`пустой массив`);
}

function arraysOut(arr) {
    console.log(`max в массиве [${arr}]: `, arrayMax(arr));
    console.log(`сумма элементов массива [${arr}]: `, arraySum(arr));
}

function printArr(arr) {
    for (let i = 0; i < arr.length; i++) {
        arraysOut(arr[i]);
    }
}

const arr1 = [1,2,3,4,5,6];
const arr2 = [];
const arrays = [arr1,arr2];

printArr(arrays);


