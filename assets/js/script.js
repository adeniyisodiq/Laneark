// alert("HOW YOU DOING")


// console.log("Hello Dear")

// // var x = "sodiq"

// // console.log(x);
// // console.log(x);
// // console.log(x);
// // console.log(x);
// // console.log(x);


// // MATHEMATICAL OPERATORS

// // +
// // -
// // /
// // **(POWER OF)
// // %(remainder)
// // * (multiplication)

// // var number1 = 57
// // var number2 = 37
// // var sum = number1 + number2
// // console.log(sum)

// // // IF ELSE STATEMENT 


// // var number1 = 2
// // var number2 = 5

// // if(number1>number2){
// //     console.log(number1>number2)
// //     console.log(number1 + " is greater than " + number2)

// // }else{
// //     console.log("condition is false")
// //     console.log(number2 + " is greater than " + number1)
// // }


// // var number1 = 4

// // if(number1 == 1){
// //     console.log("you number is " + number1)

// // }else if(number1 == 2){
// //     console.log("you number is " + number1)
// // }else if(number1 == 3){
// //     console.log("you number is " + number1)
// // }else if(number1 == 4){
// //     console.log("you number is " + number1)
// // }

// // NESTED IF ELSE STATEMENT 
// // var score = 100
// // var classroom = "SS2"
// // if(score >= 100 && classroom == "SS2"){
// //     console.log("You are qualified for the scholarship")

// //     // if(classroom == "SS2"){
// //     //     console.log("You are qualified for the scholarship")

// //     // }else{
// //     //     console.log("This is not your classroom")
// //     // }


// // }else{
// //     console.log("you are not allowed")
// // }

// // var number1 = 2
// // var number2 = 3
// // var number3 = 4

// // if(number1 > number2 && number3){
// //     console.log(number1 + " is greater than " + number2 + " and " + number3)

// //     }else{
// //        console.log(number1 + " is not greater than " + number2 + " and " + number3) 
// //     }

// // LOOP (syntax for FOR LOOP)


// // LOOP (syntax for WHILE LOOP)
// // var i = 0
// // while(i < 7){
// //     console.log(i)
// //     i += 1

// //     for(j = 0; j < 5; j+=2){
// //         console.log(j)
    
// //     }
    
// // }
// // ARRAYS
// // var students = ["John", 100, "sarah", true]
// // students[2] = "World"
// // console.log(students[2])
// // console.log(students)

// // for(var i = 0;  i<4; i++){
// //     students[i]
// //     console.log(students[i])

// // }


// // // COUNT FROM 1 TO 100
// // for(i=0; i<100; i++){
// //     console.log(i)

// // }


// // FIND THE SUM OF STUDENTS = [13, 100, 89, 76] USING A FOR LOOP
// // var students =[13, 100, 89, 76, 3, 150, 19, 66]
// // var sum=0
// // for(i=0; i<8; i++){
// //     sum += students[i]
// //     console.log(sum)


// // }

// // var a = 1
// // // a = a + 1
// // // a++
// // a+=2
// // console.log(a)
// // // a++

// // var namesArray = ["collins", "John"];
// // console.log(namesArray)
// // console.log(namesArray[0])
// // console.log(namesArray.length)


// // const person = {
// //     name: "collins",
// //     age: 30,
// //     height: "5.11feet",
// //     weight: "70kg",
// //     listCountry: ["USA", "UK", "EUROPE", "NIGERIA"]
// // }
// // console.log(person)
// // console.log(person.listCountry)

// // for(i=0; i<4; i++){
// //     console.log(person.listCountry[i])
// // }

// // var people = [{
// //     name: "collins",
// //     age: 30,
// //     height: "5.11feet",
// //     weight: "70kg",
// //     listCountry: ["USA", "UK", "EUROPE", "NIGERIA"]},
// //     {
// //     name: "collins",
// //     age: 30,
// //     height: "5.11feet",
// //     weight: "70kg",
// //     listCountry: ["USA", "UK", "EUROPE", "NIGERIA"]},
// //     {
// //     name: "collins",
// //     age: 30,
// //     height: "5.11feet",
// //     weight: "70kg",
// //     listCountry: ["USA", "UK", "EUROPE", "NIGERIA"]

// //     },
// //     {
// //         name: "collins",
// //         age: 30,
// //         height: "5.11feet",
// //         weight: "70kg",
// //         listCountry: ["USA", "UK", "EUROPE", "NIGERIA"]
    
// //         }
// // ]
//     // for(i=0; i<4; i++){
//     //     console.log(people[i].listCountry[i])
//     // }

//     // for(i=0; i<3; i++){
//     //     for(j=0; j<4; j++){
//     //         console.log(people[i].listCountry[j])
//     //     }
//     // }

//     // for(i=0; i<people.length; i++){
//     //     for(j=0; j< listCountry.length; j++){
//     //         console.log(people[i].listCountry[j])
//     //     }
//     // }

   








    

   




// // CONDITIONAL OPERATORS 

// // >
// // <
// // >=
// // <=
// // =(ASSINGMENT OPERATOR)
// // ==(EQUAL TO)


// // FUNCTION 
// // function sum(){
// //     var num1 = 10
// //     var num2 = 15
// //     var sum = num1 + num2
// //     console.log(sum);
// // }
// // sum()

// // PARAMETER 
// function sum(name){
//     console.log("Your name is "+name)
// }

// sum("Sodiq")

// function greatest(num1, num2){
//     if(num1 > num2){
//         console.log(num1+ "is greater than "+ num2)
        
//     }else
//     console.log(num1+ "is greater than "+ num2) 
// }
// greatest(2, 5)

// // ARGUMENTS 


// // DOM manipulation
// var box = document.getElementsByClassName("box")
// console.log(box[0])

var menuIcon = document.getElementById("menu-icon")
var dropdown = document.getElementById("dropdown")
var get_started_open = document.getElementsByClassName("get-started")
var get_started_close = document.getElementsByClassName("get-started-close")
var modal_background = document.getElementById("modal-background")
var open = false;
menuIcon.addEventListener("click", function(){
    if(open == false){
        dropdown.style.display = "block"
        open = true
    }else{
        dropdown.style.display = "none"
        open = false
    }
})


for(i=0; i<get_started_open.length; i++){
    get_started_open[i].addEventListener("click", function(){
        modal_background.style.display = "flex"
    })
}

for(j=0; j<get_started_close.length; j++){
    get_started_close[j].addEventListener("click", function(){
        modal_background.style.display = "none"
        })
}

 
// get_started_open.addEventListener("click", function(){
//     modal_background.style.display = "flex"
// })
 

    // get_started_close.addEventListener("click", function(){
    // modal_background.style.display = "none"
    // })


AOS.init();