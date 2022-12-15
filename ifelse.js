
// Else, If and Ifelse
//let hunger = "full"

//if (hunger == "hungery") {
//    console.log("yes please im starving!")
//}
//else if (hunger == "full") {
//    console.log("no thanks, im stuffed!")
// }
// else{
//     console.log("oh go on then, why no!")
// }




// ACTIVITY 1 
// Create a variable called music. Write an if statement that logs “Oh, how relaxing” if the music is classical else if logs ”Where are my dancing shoes!” if the music is disco and or else if logs “Where’s the party?”if the music is dance. For anything else log “Turn it down”.

let music = "Classical"

if (music == "Classical") {
    console.log("Oh, how relaxing")
}
else if (music == "Disco") {
    console.log("Where are my dancing shoes!")
}
else if (music == "Dance") {
    console.log("Where's the party?")
}
else{
    console.log("Turn it down")
}

//Comparison Operators
// they are false because yes they are the same number however they are diffrent types
if (4 === "4"){
    console.log(true)
}
else{console.log(false)
}

// these are false because they are 2 numbers 4's regardless of there type.
if (4 != "4") {
    console.log(true)
}
else{
    console.log(false)
}




//ACTIVITY 2 
//Create a variable called age. Write an if statement that logs “Yes I can serve you” if the age is greater than 17 and else logs”You aren’t old enough”

// let Age = "18"

// if (Age == "18") {
//     console.log("Yes, i can serve you")
// }
// else{
//     console.log("You aren't old enough")
// }


// let food = "ice cream"
// let hunger = "full"

// if (hunger == "full" && food == "ice cream"){
//     console.log("of course, who wouldnt")
// }

// else if (hunger == "hungry" && food == "ice cream"){
//     console.log("yes please im starving, could i also have a pizza")
// }

// else if (hunger == "hungry" && food == "sprouts"){
//     console.log("actually, i can wait")
// }

// else{
//     console.log("no thanks, im stuffed")
// }




// ACTIVITY 3 
// Take your if statement and add a variable called country. Now check if age > 17 and country == “UK”.
let Age = "18"

if (Age == "18") {
    console.log("Yes, i can serve you")
}
else{
    console.log("You aren't old enough")
}

let country = "UK"

if (country == "UK" && country == "UK"){
    console.log("Yes, i can serve you")
}

let food = "chips"

if (food == "ice cream" || food == "pizza"){
    console.log("Yay let's eat!!!")
}
else if (food == "sprouts" || food == "brocoli"){
    console.log("Ugh no thanks")
}
else{
    console.log("okay, go on then why not")
}




// ACTIVITY 4 
// Create a weekend alarm. If it’s Saturday or Sunday log “Yay it’s the weekend!!”. Else log “Oh no, work again!”
let alarm = "Saturday"

if (alarm == "Saturday" || alarm == "Sunday"){
    console.log("Yay its the weekend!!")
}
else{
    console.log("Oh no, work again!")
}




// ACTIVITY 4 (There are 2 "Activity 4"'s) 
// Create a variable for any pizza topping. Create a switch statement. If the topping is one of your favourite ingredients, log to the console “These are important ingredients for my pizza!”. If you don’t mind the ingredient log, “I don’t mind having ${topping} on my pizza. Finally, for
let toppings = "onion's"

switch(toppings) {
    case "pineapple":
    case "pepperoni":
        console.log("${pineapple} should not be on a pizza.")
        break
    case "pepper's":
    case "onion's":
        console.log("These are important ingredients for my pizza!.")
        break
    default:
        console.log("I don't mind having ${chicken}.")
}
// Above will print "These are important ingredients for pizza!" because we named the variable "Onion's" and the switch statment says that onion's or pepper's will print "These are important ingredients for my pizza!."



// ACTIVITY 5 
// Create a variable called password, check how many letters are in the password, if there are less than 8, log to the console that the password is too short. Otherwise log the password to the console.

let 