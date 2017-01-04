// objects and methods
// ver 1.0
/* 
var john = {
    name: 'John',
    lastName: 'Smith',
    yearOfBirth: 1990,
    job: 'teacher',
    isMarried: false,
    family: ['Jane', 'Mark', 'Bob'],
    //calculateAge: function(yearOfBirth) {
    //    return 2017 - yearOfBirth;
    //}
    calculateAge: function() {
        return 2017 - this.yearOfBirth;
    }
}

console.log(john.family);
console.log(john.family[2]);
//console.log(john.calculateAge(1990));
console.log(john.calculateAge());
var age = john.calculateAge();
john.age = age;
console.log(age);

*/

// 2.0
/*
var john = {
    name: 'John',
    lastName: 'Smith',
    yearOfBirth: 1990,
    job: 'teacher',
    isMarried: false,
    family: ['Jane', 'Mark', 'Bob'],
    calculateAge: function() {
        this.age = 2017 - this.yearOfBirth;
    }
}

john.calculateAge();
console.log(john);
*/ 

////////////////////////////////////////////////////
// for loops

for (var i = 0; i < 10; i++) {
    console.log(i);
}

var names = ['Bob', 'Uncle', 'Mike', 'Xoliswa', 'Jill'];

for (var i = 0; i < names.length; i++) {
    console.log(names[i]);
}


for (var i = names.length-1; i >= 0; i--) {
    console.log(names[i]);
}

// while loop

var i = 0;
while (i < names.length) {
    console.log(names[i]);
    i++;
}

