console.log(cityGrowths);

// sort by population growth (Increase_from_2016):
var sortedCities = cityGrowths.sort((a,b) =>
    a.Increase_from_2016 - b.Increase_from_2016).reverse(); 

// slice the top 5 cities:
var topFiveCities = sortedCities.slice(0,5);

var topFiveCityNames = topFiveCities.map(city => city.City);
var topFiveCityGrowths = topFiveCities.map(city => parseInt(city.Increase_from_2016)); //don't forget to parse/convert string into integer

// create the bar chart with the arrays:
var trace = {
    x: topFiveCityNames,
    y: topFiveCityGrowths,
    type: "bar"
  };
  var data = [trace];
  var layout = {
    title: "Most Rapidly Growing Cities",
    xaxis: { title: "City" },
    yaxis: { title: "Population Growth, 2016-2017"}
  };
Plotly.newPlot("bar-plot", data, layout);

// SKill Drill: 7 largest cities by population:
  // sort by population:
var sortedPop = cityGrowths.sort((a,b) => a.population - b.population).reverse(); 
  // slice top 7:
var top7 = sortedPop.slice(0,7);
  // bar chart:
var top7Names = top7.map(city => city.City);
var top7Pop = top7.map(city => parseInt(city.population));
var top7Bar = {
    x: top7Names,
    y: top7Pop,
    type: "bar"
  };
var top7Layout = {
    title: "Largest Cities",
    xaxis: { title: "City" },
    yaxis: { title: "Population"}
  };
Plotly.newPlot("top7", [top7Bar], top7Layout);
