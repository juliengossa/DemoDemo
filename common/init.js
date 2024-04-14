
var population;
var stats;
var budget;
var chartPopulation;
var chartStats;

// let populationChart = new ChartPopulation(document.getElementById('popChart').getContext('2d'), population);

// initScenario();

// run updateData once on load
window.onload = function() {
    console.log("Init")
    population = new Population();
    stats = population.getStats();
    budget = new Budget(stats);

    chartPopulation = new ChartPopulation(document.getElementById('popChart').getContext('2d'), population);
    chartStats = new ChartStats(document.getElementById('statsChart').getContext('2d'), stats);

    updateTable(document.getElementById('populationTable'), Budget.budget_nation_header, budget.budget_nation);
    updateTable(document.getElementById('educationTable'), Budget.budget_education_header, budget.budget_education);
}
