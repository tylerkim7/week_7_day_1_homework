//==================Exercise #1 ==========//
/*Write a function that takes in the string and the list of dog names, loops through 
the list and checks that the current name is in the string passed in. The output should be:
"Matched dog_name" if name is in the string, if no matches are present console.log "No Matches"
*/
let dog_string = "Hello Max, my name is Dog, and I have purple eyes!"
let dog_names = ["Max","HAS","PuRple","dog"]

function findWords(dog_string, dog_names){
    for (i = 0; i < dog_names.length; i++){
        if (dog_string.includes(dog_names[i])){
            return "Matched dog_name"
        } else{
            return "No Matches"
        }
    }
}

console.log(findWords(dog_string, dog_names))

//============Exercise #2 ============//
/*Write a fucntion that takes in an array and removes every even index with a splice,
and replaces it with the string "even index" */

Given_arr = ["Max","Baseball","Reboot","Goku","Trucks","Rodger"]

function replaceEvens(arr){
    for (let i = 0; i < arr.length; i++){
        if (i % 2 == 0){
            arr.splice(i, 1, 'even index')
        }
    }
    return arr
}

console.log(replaceEvens(Given_arr))

//Expected output
//Given arr == ["Max","Baseball","Reboot","Goku","Trucks","Rodger"]
//Output arr == ["even index","Baseball","even index","Goku","even index","Rodger"]

// CODEWARS PROBLEMS
// Calculate Average: Write a function which calculates the average of the numbers in a given list.
// Note: Empty arrays should return 0.

function find_average(array) {
    if (array.length > 0) {
        let average = array.reduce((a, b) => a + b) / array.length
        return average
    } else {
        return 0;
    }
}

// Sum of positive: You get an array of numbers, return the sum of all of the positives ones.
// Example [1,-4,7,12] => 1 + 7 + 12 = 20
// Note: if there is nothing to sum, the sum is default to 0.

function positiveSum(arr) {
    let sum = 0;
    for(let i = 0; i < arr.length; i++) {
        if(arr[i] > 0) sum += arr[i]
    }
    return sum
}