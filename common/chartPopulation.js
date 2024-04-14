
class ChartPopulation extends Chart{

  constructor(ctx, population) {
    super(ctx, {
      type: 'bar',
      data: ChartPopulation.initData(population),
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
  }

  static initData(population) {
      var datasets = [];
      for (const [key, value] of Object.entries(Generation.status))
          datasets.push({ 
              data: population.population.map(function (d) {return d[key];}),
              label: value.label,
              borderColor: value.color,
              backgroundColor: value.color,
              borderWidth:0,
              barPercentage: 1,
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