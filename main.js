console.log(findMax(randomArr()));
console.log(findMin(randomArr()));

function findMin(arr) {
    let min = arr[0];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < min) {
            min = arr[i];
        }
    }
    return min;
}

function findMax(arr) {
    let max = arr[0];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    return max;
}

function randomArr() {
    var nums = [];
    for (var i = 0; i < 100; ++i) {
        nums[i] = Math.floor(Math.random() * 101);
    }
    return nums;
}
