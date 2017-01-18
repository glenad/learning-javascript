var birthYear = [1968, 1971, 2005];
//var age = [];
//
//for (var i = 0; i < birthYear.length; i++) {
//    age[i] = 2017 - birthYear[i];
//}
//console.log(age);
//
//for (var i = 0; i < age.length; i++) {
//    if (age[i] >= 18) {
//        console.log(true);
//    } else {
//        console.log(false);
//    }
//}


function printFullAge(birthYear) {
    var age = [], isFullAge = [];

    for (var i = 0; i < birthYear.length; i++) {
        age[i] = 2017 - birthYear[i];
        
        isFullAge[i] = (age[i] >=18) ? true : false;
        
//        if (age[i] >= 18) {
//            console.log(true);
//            isFullAge[i] = true;
//        } else {
//            console.log(false);
//            isFullAge[i] = false;
//        }
    }
    
    return isFullAge;

}

var full_1 = printFullAge([ 1968, 1971, 2005 ]);
var full_2 = printFullAge([ 2000, 1999 ]);

console.log(full_1);
console.log(full_2);

