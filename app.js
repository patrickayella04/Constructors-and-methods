// Constructors & the 'this' Keyword

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

/////////////////////////////////////////////////////////////////////////////////////

// Built In Constructors

// There are many other core objects that have contructors too in javaScript, but most of them are not advisable to use. Primative types like strings, numbers, and buleans can actually be created as objects, instaed of primatives. We can do this by using certain constuctors like string and number. However there more reasons to not use these constructors than there are to use them - For example it slows down execution speed, it involves more lines of code written down, can be confusing, can cause issues when using triple equals operator and your trying to compare the value and the type. Athoug we may not run into these constructors much, we see it down the road to lets familiarize ourselves. 

// Here we set a primative value to a variable
const name1 = 'Jeff';
// Here we creat this string above as an object
const name2 = new String('Jeff');

console.log(name1);

// name2.foo = 'bar'; // We can add properties to the object (no real reason to but goog to know we can)
// console.log(name2); // We get the same string but as an Object. (Primitive value as the key, and 'Jeff' as the value).

// Where we can get ouselves into trouble with this type of built in constructors is when we are matching types for example...

console.log(typeof name1);
console.log(typeof name2); // Gives us an object, it is not a primative value.

if (name2 === 'Jeff') { // with only == double equals, we get yes because we're only checking the checking the value, where === triple equals checks only the type which is a string as that's what it is when its surrounded in quotes. This is an example where you can run into some trouble when using built in constructors.
    console.log('YES')
} else {
    console.log('NO')
}; // The value of name2 is indeed 'Jeff' but the type which is what we are checking is actually not a string, but is an object. 

// Number 
const num1 = 5; // simple gives us a primitave number
const num2 = new Number(5);

console.log(typeof num1)
console.log(typeof num2); // Gives us a number object, typeof also is object not number 

// Boolean 
const bool1 = true;
const bool2 = new Boolean(true);

console.log(typeof bool1)
console.log(typeof bool2)

// Function
const getSum1 = function (x, y) {
    return x + y;
}
console.log(getSum1(1, 1));

const getSum2 = new Function('x', 'y', 'return x + y'); // third section represents whats inside the function body ('return x + y').

console.log(getSum2(2, 3));


