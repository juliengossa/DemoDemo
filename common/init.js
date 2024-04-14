
var population;
var stats;
var budget;
var chartPopulation;
var chartStats;


initControl = function() {
    for (const [key, value] of Object.entries(Population.controls)) {
        var newDiv = document.createElement("div");
        var newLabel = document.createElement("label");
        newLabel.setAttribute("for", key+"Label");
        newLabel.appendChild(document.createTextNode(value.label));
        newDiv.appendChild(newLabel);

        var newInput = document.createElement("input");
        newInput.setAttribute("id", key+"Input");
        for (const [akey, avalue] of Object.entries(value.attributes)) {
            newInput.setAttribute(akey, avalue);
        }
        newDiv.appendChild(newInput);
        document.getElementById("controls").appendChild(newDiv)
    }
}


window.onload = function() {
    console.log("Init");
    initControl();

    population = new Population();
    stats = population.getStats();
    budget = new Budget(stats);

    chartPopulation = new ChartPopulation(document.getElementById('popChart').getContext('2d'), population);
    chartStats = new ChartStats(document.getElementById('statsChart').getContext('2d'), stats);

    updateTable(document.getElementById('populationTable'), Budget.budget_nation_header, budget.budget_nation);
    updateTable(document.getElementById('educationTable'), Budget.budget_education_header, budget.budget_education);
}
