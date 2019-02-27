/*eslint-env browser*/

var arr = ["Sally Smith", 10, "Sue Jones", 5, "Mark Stevens", 15, "Paco Martinez", 30];


// USING FOR LOOP
//var i;
//for (i = 0; i < arr.length; i += 1) {
//    window.console.log(arr[i] + "\n");
//}


// USING FOREACH LOOP
//arr.forEach(function (arr) {
//    "use strict";
//    window.console.log(arr);
//});
//
//// USING FOR IN LOOP
//Array.prototype.addNew = function () {
//    "use strict";
//    window.alert("Hello");
//};
//
//var element;
//for (element in arr) {
//    //if (arr.hasOwnProperty(element)) {
//    window.console.log(arr[element]);
//        
//   // }
//}

// USING FILTER ()
var yearsWithCompany = arr.filter(function (item) {
    "use strict";
    return typeof item === "number";
});
window.console.log(yearsWithCompany);

