//problem 1
let ages = [3, 9, 23, 64, 2, 8, 28,93];

function firstLast(){
    console.log(ages[ages.length - 1] - ages[0]);
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
// lastNum = numbers[numbers.length-1];

//Question 4: how do you access first element of array?
// //array[0]

//Question 5
let nameLengths = [];
 let totalNames = (names.length + nameLengths.length);
console.log(totalNames);

//Question 6
let sum1 = 0
for(let i = 0; i < nameLengths.length; i++);
sum1 += (names.Length[i]);
console.log(sum1);

//Question 7
function greeting(word, n){
     let salut = (word + n);
    let (i = 0; i < n; i++);
        result += word
    return salut;
}
//Question 8
//Write a function that takes two parameters, firstName and lastName, and returns a full name (the full name should be the first and the last name separated by a space).
function fullName(firstName, lastName){
     let completeName = (firstName +" " + lastName);
     return completeName;
  }

//Question 9 create a function
let favNum = [1, 2, 3, 5, 7, 9, 100];
let sum = 0;
function centuryClub(array1){
    // have 1 parameter
    //define a variable for sum and start at 0 - every iteration will add to the sum
   
    // create a for loop that iterates through array
    for (let i = 0; i < array1.length; i++){
    // add each element from the array to the sum
    // jen original answer - sum =+ array1[i];
    sum = sum + array1[i];
    // console.log(array1 <== 100);
    }  
    if(sum >= 100){
       console.log( "our number is greater than or equal to 100");
    }
    else{
        console.log("our number is less than 100");
    }
}
console.log(sum);
centuryClub(favNum);
console.log(sum);
console.log(centuryClub(favNum));

// Question 10.	Write a function that takes an array of numbers and returns the average of all the elements in the array.
let tenArray = [2, 4, 6, 8, 10];
let sum10 = 0
function avgNum(tenArray){
    // add array values together
    for (let ia = 0, ia < tenArray.length; ia++)
    sum10 = sum + tenArrray[i];
// find average of array
    return avgNum / tenArray.length;
}

// 11.	Write a function that takes two arrays of numbers 
// and returns true if the average of the elements in the first array is greater than the average of the elements in the second array.

// 1. create 2 arrays of numbers
// 2. set up the function with 2 arrays
// 3. find the average of both arrays
// 4. if avg of array 1 is greater than avg of array2 - return true

let batterFirst = [3, 8, 9, 22, 15];
let batterHey = [8, 4, 12, 18, 6];

let total11 = 0;

function batAvg (batterFirst, batterHey){
    for (let b = 0; b < batterFirst.length; b++)
    total11 = sum  + batterFirst[i];
     
    return total11 / batterFirst.length;
    
}
batAvg();
console.log(total11);


// 12.	Write a function called willBuyDrink
// that takes a boolean isHotOutside, and a number moneyInPocket, 
// and returns true if it is hot outside
// and if moneyInPocket is greater than 10.50.

function willBuyDrink(isHotOutside, moneyInPocket)



// 13.	Create a function of your own that solves a problem. 
// In comments, write what the function does and why you created it.
// 
//  Greet User Function - created to log in username and welcome user.

function greetUser(name){
    alert("Welcome Back, "+ name + "!");

}
    greetUser(prompt("Enter Username:"));