//Array of films
let films = ["Nemo", "jungle book", "shark tale"]
console.log ("one of my fav films is", films[0])

films[1] = "christmas carol, 22 jump street"
console.log (films)

//removes the first element from an array and returns that removed element. 
//This method changes the length of the array
console.log(films.unshift())

//changes the contents of an array by removing or replacing existing elements 
//and/or adding new elements in place
console.log(films.splice()) 

//creates a new array populated with the results of calling a provided function
// on every element in the calling array
//console.log(films.map())

//returns a shallow copy of a portion of an array into a new array object selected 
//from start to end ( end not included) where start and end represent the index of items in that array
console.log(films.slice())

let favHolidayDestinations = [
"Venice, Italy", 
"Paris, France", 
"Barcelona, Spain"
]
for (let i = 1; i < favHolidayDestinations.length; i++){
    console.log(favHolidayDestinations[i])
}
for (let i = 0; i <= 10; i++){
    console.log(i += 2)
}

let evenNumbers = []
for (let n = 0
; n < 20; n++){
if (n % 2 == 0) {
        (evenNumbers.push(n))
    }
}
console.log(`The even numbers between 0 and 20 are; ${evenNumbers}`)

//let favSongs = [
  //  "YMCA", 
 //   "Mary had a little lamb", 
  //  "Happy Birthday song"
//]
//favSongs.add("Abba");
//favSongs.add("Titanium");

//console.log ("My fav songs are" favSongs)
//console.log.println(favSongs);