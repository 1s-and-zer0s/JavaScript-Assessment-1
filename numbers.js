//1. provide the sum of the following variables 
var num10 = 10;
var string8 = '8';
var one = 1;

var sum = (num10 + Number(string8) + one);
console.log("The sum of the three variables is "+sum+".");

//2. write a loop that will log only numbers divisible by 3 between 20 - 100

var numsDivisBy3 = [];
for (i=20; i<=100; i++){
    if (i%3 === 0){
        numsDivisBy3.push(i);
    }
}
console.log("The numbers divisible by 3 are: " +numsDivisBy3);

//3. find the class average given the following test scores

var scores = [88, 84, 100, 92, 70, 76, 76, 84, 86, 98]; 

var total=0;
var avg=0;
scores.forEach(function(scores){ //I do not understand why scores needs to be given to the function as an argument here, or what that does
     total += scores;  
})
avg = total/(scores.length);
console.log("The class average is: "+avg);