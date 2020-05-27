// example 1:
Plotly.newPlot("plotArea", [{x: [1, 2, 3], y: [10, 20, 30]}, {x: [10, 20, 30], y: [15, 25, 35]}]);

// example 2 with new id:
Plotly.newPlot("plotAreaTest", [{x: [4, 5, 6, 7], y: [10, 20, 30,5]}]);

// example bar chart:
var trace = {
    x: ["burrito", "pizza", "chicken"],
    y: [10, 18, 5],
    type: "bar"
 };
 Plotly.newPlot("plotBarArea", [trace]);

 // bar chart with layout:

var layout = {
    title: "Luncheon Survey",
    xaxis: {title: "Food Option"},
    yaxis: {title: "Number of Respondents"}
};

Plotly.newPlot("plotBarAreaTitle", [trace], layout);

// Skill Drill:

var Drinks = ["nonalcoholic beer", "nonalcoholic wine", "nonalcoholic martini", "nonalcoholic margarita", "ice tea", "nonalcoholic rum & coke", "nonalcoholic mai tai", "nonalcoholic gin & tonic"];
var Perc = [22.7, 17.1, 9.9, 8.7, 7.2, 6.1, 6.0, 4.6];
var skillDrill = {
    x: Drinks,
    y: Perc,
    type: "bar"
};

var skillLayout = {
    title: "Skill Drill",
    xaxis: {title: "Drinks"},
    yaxis: {title: "Percentage"}

};

Plotly.newPlot("plotBarAreaTitle", [skillDrill], skillLayout);

// Pie chart:
var pieTrace = {
    labels: Drinks,
    values: Perc,
    type: "pie"
};

var pieLayout = {
    title: "Pie Chart"
};

Plotly.newPlot("plotBarAreaTitle", [pieTrace], pieLayout);