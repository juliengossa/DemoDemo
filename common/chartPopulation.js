
chartPopulationDataset = function() {
    dataset = [];
    for (const [key, value] of Object.entries(Population.status))
        dataset.push({ 
            data: population.map(function (d) {return d[key];}),
            label: value.label,
            borderColor: value.color,
            backgroundColor: value.color,
            borderWidth:0,
            barPercentage: 1,
          });
    return dataset;
}

// create a new chart object
var chartPopulation = new Chart(popctx, {
    type: 'bar',
    data: {
      labels: population.map(function (d,i) {return i;}),
      datasets: chartPopulationDataset()
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

chartPopulationUpdate = function() {
  chartPopulation.data.datasets[0].data = population.map(function (d) {return d.child;});
  chartPopulation.data.datasets[1].data = population.map(function (d) {return d.student;});
  chartPopulation.data.datasets[2].data = population.map(function (d) {return d.worker_unqualified;});
  chartPopulation.data.datasets[3].data = population.map(function (d) {return d.worker_primary;});
  chartPopulation.data.datasets[4].data = population.map(function (d) {return d.retired;});
  chartPopulation.update();
}