const favHolidayDestinations = (country, month) => {
    console.log(`Yay! im going on holiday! ${country} in ${month}. I can't wait.`)
}
favHolidayDestinations("Spain","June") 
//here you are calling the function^^



//Functions Activity 2
const sayHello = (myName, drink) => {
    console.log(`Hi Hello!, i am ${myName} would you like a ${drink}?`)
}
sayHello("Ellie","Coca cola")





//Try This 
const inventory = (productCode, departmentName, quantity) => {
    console.log(`${quantity} of ${productCode} sold from ${departmentName} department, need to update stock by ${quantity}`)
}
inventory(412345, "baked goods", 65)




// Return
const multiply = (num1, num2) => {
    return num1 * num2
}
console.log(multiply(2,5))

