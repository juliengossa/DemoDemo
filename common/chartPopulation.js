
class ChartPopulation extends Chart{

  constructor(ctx, population) {
    super(ctx, {
      type: 'bar',
      data: ChartPopulation.initData(population),
      options: {
        scales: {
          x: {
            stacked: true,
            ticks: {
              autoSkip: true,
              maxTicksLimit: 20,
              }
          },
          y: {
            beginAtZero: true,
            stacked: true
          },
        },
        plugins : {
          legend: {
            display: true,
            position: 'right',
            labels: {
              fontColor: 'rgb(0, 0, 0)',
              fontSize: 14,
              sort: function(a, b, data) { return a.datasetIndex < b.datasetIndex ? 1 : -1; }
            }
          },
          title: {
            display: true,
            text: 'Population',
            fontSize: 20,
            fontColor: 'rgb(0, 0, 0)',
            padding: 20
          }
        }
      }
    });
  }

  static initData(population) {
      var datasets = [];
      var i=0;
      for (const [key, value] of Object.entries(Generation.status))
          datasets.push({ 
              data: population.population.map(function (d) {return d[key];}),
              order: value.order,
              label: value.label,
              borderColor: value.color,
              backgroundColor: value.color,
              borderWidth:0,
              barPercentage: 1
            });

      return {
        labels: population.population.map(function (d,i) {return i;}),
        datasets: datasets
      }
  }

  updateData(population) {
    let i = 0;
    for (const [key, value] of Object.entries(Generation.status)) {
      this.data.datasets[i].data = population.population.map(function (d) {return d[key];});
      i++;
    }

    this.update();
  }
}