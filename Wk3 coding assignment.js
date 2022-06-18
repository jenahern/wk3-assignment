//problem 1
let ages = [3, 9, 23, 64, 2, 8, 28,93];

function firstLast(){
    console.log(ages[ages.length - 1] - ages[0]);
};
firstLast();

//add age to array
ages.push(13);
firstLast();

//add loop
let sum = 0
for(let i = 0; i < ages.length; i++) {
    sum += (ages[i] / ages.length);
}
console.log(sum);


//problem 2
let names = ["Sam", "Tommy", "Tim", "Sally", "Buck" , "Bob"];

let lettersInNames = 0;
for(let i = 0; i < names.length; i++) {
    lettersInNames += names[i].length;
}
console.log(lettersInNames);
console.log(lettersInNames / names.length);

//Question 3: how do you access the last element in array?
//lastNum = numbers[numbers.length-1];

//Question 4: how do you access first element of array?
//array[0]

//Question 5
let nameLengths = [];
let totalNames = (names.length + nameLengths.length);
for(let i = 0; i < totalNames.length; i++);
console.log(totalNames);

//Question 6
let sum1 = 0
for(let i = 0; i < nameLengths.length; i++);
sum1 += (names.Length[i]);
console.log(sum1);

//Question 7
function greeting(word, n){
    let salut = (word + n);
    return salut;
}
 //Question 8
 function fullName(firstName, lastName){
    let completeName = (firstName + lastName);
    return completeName;
 }

//Question 9
function meh(array1){
    let array1 = [];
    return array1 > 100
}

//Question 10
function anotherArray(arrayA, arrayB){
    if(arrayA + arrayB < arrayA sum print true);
    return something
}

//Question 11
function anotherArray(arrayA, arrayB){
    if(arrayA + arrayB < arrayA sum print true);
    return something
}

//Question 12
function willBuyDrink(isHotOutside, moneyInMyPocket){
    return "whatever I am supposed to figure out here"
}

//Question 13
function frustration(canNotThink, amDone){
    return "assignment over"
}