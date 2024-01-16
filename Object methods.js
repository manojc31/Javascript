
const jonas = {
    firstName: 'Jonas',
    lastName: 'Schmedtmann',
    birthYear: 1991,
    job: 'teacher',
    friends: ['Michael', 'Peter', 'Steven'],
    hasDriversLicense: true,

    // calcAge: function (birthYear) {
    //     return 2037 - birthYear;
    // }
    calcAge: function () {
        //console.log(this);
        this.age = 2037 - this.birthYear
        return this.age;
    },
    getSummary: function () {
        return `${this.firstName} is a ${this.calcAge()} -year old ${jonas.job} and he has ${this.hasDriversLicense ? 'a' : 'no'} driver's license.`
    }

};

console.log(jonas.calcAge());
// console.log(jonas['calcAge'](1991));

console.log(jonas.getSummary());




