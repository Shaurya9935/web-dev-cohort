// const user1 = {
//     name: "Suraj",
//     score: 99,
//     increment() {
//         this.score++;
//     }
// }

// const user2 = {
//      __proto__:user1
// }

// const user2 = Object.create(user1);

// Dry Principle ❌
// Memory wastage 
// Not scalable

// Prototype -> It is a mechanism through which object inherit properties and methods from other objects


function User(name, score){
    this.name = name;
    this.score = score;

}


const user1 = new User("Suraj", 99);
const user2 = new User("Angel Priya", 9);

console.log(user1.name)
console.log(user1.score)


console.log(user2.name)
console.log(user2.score)