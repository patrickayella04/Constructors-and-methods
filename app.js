

// Some of the most important aspects of Object Oriented programming is the Constructor and the 'this' key word.
 
// Here is your standard Object literal - This is fine to use if you want to create one object or instance. 
// const brad = {
//     name: 'Brad',
//     age: 30
// };

// console.log(brad.name);
// console.log(brad.age);
//// If you want to create multiple instances of an object then you are going to want to create a constructor. Especially as you get into using prototypes and inheritance then you want to learn how to use constructors. 

//Person constructor - Person should start with a capital
function Person(name, dob) {
    this.name = name; // From these couple lines of code we can instantiate (Represent as or by instance) a person object from this.
    this.birthday = new Date(dob); // Notice the Date object which is a core object of javaScript also has a constructor (uses the new. key word) like how we call new Person, which is an object we created. new Date() is a core object that uses a constructor. 

    // The this. keyword is very important because it refers to the current instance of the this object. In this case it pertains to the Person function, and its function scope. 

    // console.log(this) // It should log twice as instatiated two objects.

    // Below we create a method - a method is a function that's inside an object. 
    this.CalculateAge = function () {
        const diff = Date.now() - this.birthday.getTime();
        const ageDate = new Date(diff);
        return Math.abs(ageDate.getUTCFullYear() - 1970); // This gives us the year and specified date according to the universal time. This may look confusing but this is a common formula to calculate an age from a birthday. Wrapped in Math.abs to make sure the result/value is an absolute number. 
    }
}

// To instantiate an object we use the New key word. We create a variable called brad - instead of setting to a literal with curly braces like above - We will set variable to New Person like below. 

// const brad = new Person('brad', 36);
// const john = new Person('john', 30);

// console.log(brad.age);
// console.log(john.age);

const brad = new Person('brad', '9-10-1981');
console.log(brad.CalculateAge());
