// class MathUtils{
//     static add(a,b){
//         return a+b;
//     }
// }

// console.log(MathUtils.add(2,3));

class MathUtils {
    constructor(name,email){
        this.name = name;
        this.email = email;
    }

    getName() {
        return this.name;
    }
}

class User{
    constructor(name){
        this.name;
    }

    get name(){
        return this._name;
    }

    set name(val){
        if(val.length < 2){
            console.log("Name too Short")
            return;
        }
        this._name = val;
    }
}

const u = new User("Suraj");

console.log(u.name) //getter
u.name = "A";

class Bank {
    #balance = 0;

    deposit(amount){
        this.#balance += amount
    }

    balance() {
        return this.#balance
    }
}

const hdfc = new Bank();
// console.log(hdfc.#balance) -> error hai kyuki ye private hai 
hdfc.deposit(10000)

console.log(hdfc.balance())

// incapsulation -> wrapping data/ private method 
// abstraction -> expose only necessary complication
// polymorphism -> same method but behave differently 


class Animal {
    speak(){
        console.log("Sound")
    }
}
class Dog extends Animal {
    speak(){
        console.log("Bark...")
    }
}
class Cat extends Animal {
    speak(){
        console.log("Meow")
    }
}