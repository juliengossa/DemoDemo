

// @ts-ignore
import {Chart} from "chart.js";

const popctx = document.getElementById('popChart').getContext('2d');
// @ts-ignore
const statsctx = document.getElementById('statsChart').getContext('2d');

let dpop = 0;
let debt = 0;

// make an array with 10 elements and fill it with random data
const population = new Array(100);
for (let i = 0; i < population.length; i++) {
    population[i] = {
        child : i <= 10 ? 10 : 0,
        student : 0,
        worker_unqualified :  i > 10 & i < 64? 10 : 0,
        worker_primary : 0,
        retired : i >= 64 ? Math.max(Math.min(10,(85-i)),0) : 0
    }
}

function updatePopulation() {
    const trainings = {
        'primary' : parseFloat(document.getElementById("primary").value)
    }

    // primaire
    const s = Math.floor(Math.min(population[2].child, population[2].child*trainings.primary/100))
    population[2].child = population[2].child - s;
    population[2].student = s;


    // insertion pro
    population[10] = {
        child : 0,
        student : 0,
        worker_unqualified : population[10].child,
        worker_primary : population[10].student,
        retired : 0
    }

    // retraites
    population[63] = {
        child : 0,
        student : 0,
        worker_unqualified : 0,
        worker_primary : 0,
        retired : population[63].worker_unqualified + population[63].worker_primary
    }

    // morts
    let death_ratio = 0.9;
    for (let i = 64; i < population.length; i++) {
        population[i].retired = population[i].retired * (death_ratio+Math.random()*0.1);
        death_ratio = Math.max(death_ratio - 0.01, 0);
    }

    // Vieillissement
    for (let i = population.length-1; i > 0 ; i--) {
        population[i] = population[i-1];
    }

    // naissances
    dpop = Math.max(Math.min(dpop + Math.random() - 0.5, 1),-1);
    const pop0 = Math.max(population[0].child + dpop, 10);
    population[0] =  {
        child : pop0,
        student : 0,
        worker_unqualified : 0,
        worker_primary : 0,
        retired : 0
    }

    // rounding
    for (let i = 0; i < population.length; i++) {
        population[i].child = Math.floor(population[i].child);
        population[i].student = Math.floor(population[i].student);
        population[i].worker_unqualified = Math.floor(population[i].worker_unqualified);
        population[i].worker_primary = Math.floor(population[i].worker_primary);
        population[i].retired = Math.floor(population[i].retired);
    }
}


function updateStats() {
    const stats = {
        child : 0,
        student : 0,
        worker_unqualified : 0,
        worker_primary : 0,
        retired : 0
    }
    for (let i = 0; i < population.length; i++) {
        stats.child += population[i].child;
        stats.student += population[i].student;
        stats.worker_unqualified += population[i].worker_unqualified;
        stats.worker_primary += population[i].worker_primary;
        stats.retired += population[i].retired;
    }
    return stats;
}

function updateBudgetNation(stats: any) {
    const budget: any = [{
        'name' : 'Enfants',
        'pop' : stats.child,
        'consumption' : 0.5,
        'production' : 0,
    },
        {
            'name' : 'Etudiants',
            'pop' : stats.student,
            'consumption' : 0.5,
            'production' : 0
        },
        {
            'name' : 'Travailleurs non qualifiés',
            'pop' : stats.worker_unqualified,
            'consumption' : 1,
            'production' : 2
        },
        {
            'name' : 'Travailleurs qualifiés primaire',
            'pop' : stats.worker_primary,
            'consumption' : 1,
            'production' : 3
        },
        {
            'name' : 'Retraités',
            'pop' : stats.retired,
            'consumption' : 0.5,
            'production' : 0
        }]

    budget.forEach(function(b: any, _: any) {
        b.pop = Math.round(b.pop);
        b.total_consumption = b.consumption * b.pop;
        b.total_production = b.production * b.pop;
        b.net =  b.total_production - b.total_consumption;
    })

    budget[budget.length] = {
        'name' : 'Total',
        'pop' : budget.reduce((a: any, b: any) => a + b.pop, 0),
        'consumption' : "",
        'production' : "",
        'total_consumption' :  budget.reduce((a: any, b: any) => a + b.consumption * b.pop, 0),
        'total_production' : budget.reduce((a: any, b: any) => a + b.production * b.pop, 0),
        'net' : budget.reduce((a: any, b: any) => a + b.net, 0)
    }

    return budget;
}

function updateBudgetEducation(stats: any, budget_nation: any) {
    const budget: any = [{
        'name' : 'Dotation',
        'unit_cost' : "",
        'pop' : "",
        'budget' : Math.floor(budget_nation[budget_nation.length-1].net * 2 / 100)

    },
        {
            'name' : 'Dette',
            'unit_cost' : "",
            'pop' : "",
            'budget' : debt

        },
        {
            'name' : 'Primaire',
            'unit_cost' : "3 pour 25", // 1 prof + 1 admin + 1 fonctionnement / 25 élèves
            'pop' : stats.student,
            'budget' : -Math.ceil(stats.student/25) * 3

        }]

    budget[budget.length] = {
        'name' : 'Bilan',
        'unit_cost' : "",
        'pop' : stats.student,
        'budget' : budget[0].budget + budget[1].budget + budget[2].budget
    }

    debt = Math.min(0,budget[budget.length-1].budget)

    return budget;
}

function updateTable(table: any, tableData: any) {

    table.innerHTML = '';
    const tableBody = document.createElement('tbody');
    // add header
    const header = document.createElement('tr');
    for(const [key, _] of Object.entries(tableData[0])) {
        const cell = document.createElement('th');
        cell.appendChild(document.createTextNode(key));
        header.appendChild(cell);
    }
    tableBody.appendChild(header);

    tableData.forEach(function(rowData: any) {
        const row = document.createElement('tr');

        for(const [_, cellData] of Object.entries(rowData)) {
            const cell = document.createElement('td');
            cell.appendChild(document.createTextNode(cellData));
            row.appendChild(cell);
        }

        tableBody.appendChild(row);
    });

    table.appendChild(tableBody);
}

function updateData() {

    updatePopulation();
    const stats = updateStats();
    const nationBudget = updateBudgetNation(stats);
    const educationBudget = updateBudgetEducation(stats,nationBudget);

    updateTable(document.getElementById('populationTable'), nationBudget);
    updateTable(document.getElementById('educationTable'), educationBudget);

    popChart.data.datasets[0].data = population.map(function (d) {return d.child;});
    popChart.data.datasets[1].data = population.map(function (d) {return d.student;});
    popChart.data.datasets[2].data = population.map(function (d) {return d.worker_unqualified;});
    popChart.data.datasets[3].data = population.map(function (d) {return d.worker_primary;});
    popChart.data.datasets[4].data = population.map(function (d) {return d.retired;});
    popChart.update();

    statsChart.data.datasets[0].data = [population.length, stats.student, stats.worker_unqualified, stats.worker_primary, stats.retired];

    statsChart.update();
}

// run updateData once on load
window.onload = function() {
    for (let i = 0; i < 1; i++)
        updateData();
}

// create a new chart object
const popChart = new Chart(popctx, {
    type: 'bar',
    data: {
        labels: population.map(function (_, i) {return i;}),
        datasets: [{
            data: population.map(function (d) {return d.child;}),
            label: "Enfant",
            borderColor: "rgb(100,200,100)",
            backgroundColor: "rgb(100,200,100,0.1)",
            borderWidth:2
        },
            {
                data: population.map(function (d) {return d.student;}),
                label: "Etudiant",
                borderColor: "rgb(100,100,200)",
                backgroundColor: "rgb(100,100,200,0.2)",
                borderWidth:2
            },
            {
                data: population.map(function (d) {return d.worker_unqualified;}),
                label: "Travailleur non qualifié",
                borderColor: "rgb(200,100,100)",
                backgroundColor: "rgb(200,100,100,0.1)",
                borderWidth:2
            },
            {
                data: population.map(function (d) {return d.worker_primary;}),
                label: "Travailleur primaire",
                borderColor: "rgb(200,100,200)",
                backgroundColor: "rgb(200,100,200,0.2)",
                borderWidth:2
            },
            {
                data: population.map(function (d) {return d.retired;}),
                label: "Retraité",
                borderColor: "rgb(100,100,100)",
                backgroundColor: "rgb(100,100,100,0.1)",
                borderWidth:2
            }]
    },
    options: {
        scales: {
            x: {
                stacked: true
            },
            y: {
                beginAtZero: true,
                stacked: true
            },
        },
        legend: {
            display: true,
            position: 'bottom',
            labels: {
                fontColor: 'rgb(0, 0, 0)',
                fontSize: 14
            }
        },
        title: {
            display: true,
            text: 'Mass Game',
            fontSize: 20,
            fontColor: 'rgb(0, 0, 0)',
            padding: 20
        }
    }
});

// create a new chart object
const statsChart = new Chart(statsctx, {
    type: 'bar',
    data: {
        labels: ['Enfant', 'Etudiant', 'Travailleur non qualifié', 'Travailleur primaire', 'Retraité'],
        datasets: [{
            data: [0,0,0,0,0],
            label: "Citoyens",
            borderColor: "rgb(100,100,100)",
            backgroundColor: "rgb(100,100,100,0.1)",
            borderWidth:2
        }]
    },
    options: {
        scales: {
            x: {
                stacked: false
            },
            y: {
                beginAtZero: true,
                stacked: false
            },
        },
        legend: {
            display: true,
            position: 'bottom',
            labels: {
                fontColor: 'rgb(0, 0, 0)',
                fontSize: 14
            }
        },
        title: {
            display: true,
            text: 'Mass Game',
            fontSize: 20,
            fontColor: 'rgb(0, 0, 0)',
            padding: 20
        }
    }
});
