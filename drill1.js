function max(numbers){
    let index = numbers.length -1;
    if (numbers.length === 0){
        return null;
    }
    let maxVal = numbers[0];
    while(index !== 0){
        if(numbers[index] > maxVal){
            maxVal = numbers[index];
        }
        index--;
    }
    return maxVal;
}


function min(numbers){
    let index = numbers.length -1;
    if (numbers.length === 0){
        return null;
    }
    let minVal = numbers[0];
    while(index !== 0){
        if(numbers[index] < minVal){
            minVal = numbers[index];
        }
        index--;
    }
    return minVal;
}

let myArr = [0 ,1, 2, 3, 4, 5, -15];
console.log(max(myArr));
console.log(min(myArr));