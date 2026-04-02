// class User {
//     constructor(name, score){
//         this.name = name;
//         this.score = score
//     }
//     increment() {
//         this.score++;
//     }
// }

// const user1 = new User("Rahul", 99);
// user1.increment()
// console.log(user1.score);

class User {
    constructor(name, score){
        this.name = name;
        this.score = score
    }
    login () {
        console.log("Logged In")
    }
}

class Admin extends User {
    constructor(name, score, isAdmin){
        super(name, score)
        this.isAdmin = isAdmin;
    }
    deleteUser(){
        console.log("Deleted")
    }
}

const admin = new Admin("Suraj", 100, true)

console.log(admin.name)
console.log(admin.score)
console.log(admin.isAdmin)


admin.login();

// we have to call super keyword if we are using constructor to construct element to get the reference of parent values 


