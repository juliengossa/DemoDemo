
// create a new chart object
var chartStats = new Chart(statsctx, {
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


  chartStatsUpdate = function(stats) {
    chartStats.data.datasets[0].data = [population.length, stats.student, stats.worker_unqualified, stats.worker_primary, stats.retired];
  
    chartStats.update();
  }