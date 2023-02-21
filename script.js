// Question 1
let myVar = 5;
console.log(myVar);
// Question 2
let myString = "Hello World!"
alert(myString);
// Question 3
let num1 = 5;
let num2 = 10;
let userNum = Number(prompt("Enter a number"))
let sum = num1+num2+userNum;
console.log(sum)
// Question 4
let myBoolean = true;
if(myBoolean===true)
{
    console.log("It is true!")
}
else
{
    console.log("It is false!")
}
// Question 5
let num3 = Number(prompt("Enter a Number"));
if(num3 % 2==0)
{
    console.log("even")

}
else{
    console.log("odd")
}
// Question 6
let firstName = "Muhammad ";
let lastName = "Hamza";
let fullName = firstName + lastName;
console.log(fullName);
// Question 7 
let mulNum1 = 10;
let mulNum2 = 6;
let multiply = mulNum1*mulNum2;
console.log(multiply);
// Question 8
let pswd = String(prompt("Enter the password"))
if(pswd==="password")
{
    alert("Access granted");
}
else{
    alert("Access denied");
}
// Question 9
let input1 = Number(prompt("Enter Number 1"))
let input2 = Number(prompt("Enter Number 2"))
let input3 = Number(prompt("Enter Number 3"))
if(input1 > input2 && input1 > input3)
{
    alert("The largest Number is " + input1);
}
else if(input2 > input1 && input2 > input3) {
    alert("The largest Number is " + input2); 
} 
else {
    alert("The largest Number is " + input3);
}
// Question 10
let str1 = String(prompt("Enter First String"));
let str2 = String(prompt("Enter Second String"));
if(str1===str2){
    alert( "The strings are equal");
}
else{
    alert("The strings are not equal");
}