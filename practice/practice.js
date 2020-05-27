// map:
var numbers = [1,2,3,4,5];
    // an anonymous function inside the map: num represents each item in the array
var doubled = numbers.map(function(num){
    return num * 2;
});
console.log(doubled);

var addFive = numbers.map(num => num + 5);
console.log(addFive);

// example: using map to extract data:
cities = [
    {
      "Rank": 1,
      "City": "San Antonio ",
      "State": "Texas",
      "Increase_from_2016": "24208",
      "population": "1511946"
    },
    {
      "Rank": 2,
      "City": "Phoenix ",
      "State": "Arizona",
      "Increase_from_2016": "24036",
      "population": "1626078"
    },
    {
      "Rank": 3,
      "City": "Dallas",
      "State": "Texas",
      "Increase_from_2016": "18935",
      "population": "1341075"
    }
];

cityNames = cities.map(function(city){
    return city.City;
});
console.log(cityNames);

cityPopulation = cities.map( city => city.population);

// Filters:
var numbers = [1,2,3,4,5];

var larger = numbers.filter(function(num){
    return num > 1;
});

console.log(larger);

    //skill Drill:
var words = ['seal', 'dog', 'scorpion', 'orangutan', 'salamander'];
startWithS = words.filter(word => word.startsWith("s"));

// Sort:
var familyAge = [3,2,39,37,9];
    // Explain sort:
    // First, it will look at the first two items (a=3, b=2), then a-b = 1.
    // That means a > b, so it will sort b first, then a. A.k.a: 2 then 3
    // Next it will look at the next two items, but now a=3 (after sorted previously), and b = 39.
    // a < b so sort a first, then b. A.k.a: 3 then 39.
    // Continue until the end of the array.
sortedAge = familyAge.sort((a,b) => a - b);
console.log(sortedAge);

    // reverse sort:
    familyAge.sort((a,b) => b - a);

// Slice:
var integers = [0,1,2,3,4,5];
    // slice and show index 0 -> 1:
slice1 = integers.slice(0,2);
    // slice the last 2 items:
    var words = ['seal', 'dog', 'scorpion', 'orangutan', 'salamander'];
    slice2 = words.slice(3,0);