
class ChartStats extends Chart{

  constructor(ctx, stats) {
    super (ctx, {
      type: 'bar',
      data: ChartStats.initData(stats),
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
        plugins : {
          legend: {
            display: false,
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
      }
    });
  }

  static initData(stats) { 
    return {
      labels: scenario.getStatusLabels(),
      datasets: [ { 
        label : "Population",
        data : Object.keys(stats).map(function(key){ return stats[key];}),
        backgroundColor: scenario.getStatusColors(),
        borderColor: scenario.getStatusColors() 
      } ]
    }
  }

  updateData(stats) {
    this.data.datasets[0].data = Object.keys(stats).map(function(key){ return stats[key];});
    this.update();
  }
}