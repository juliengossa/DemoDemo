
class ChartHistory extends Chart{

  constructor(ctx, stats) {
    super (ctx, {
      type: 'line',
      data: ChartHistory.initData(stats),
      options: {
        scales: {
          x: {
            stacked: false
          },
          y: {
            beginAtZero: true,
            stacked: true
          },
        },
        plugins : {
          legend: {
            display: true,
            position: 'top',
            labels: {
              fontColor: 'rgb(0, 0, 0)',
              fontSize: 14
            }
          },
          title: {
            display: false,
            text: 'Population',
            fontSize: 20,
            fontColor: 'rgb(0, 0, 0)',
            padding: 20
          }
        },
        animation:false
      }
    });
  }

  static initData(stats) { 
    var datasets = [];
    for (const [key, value] of Object.entries(Generation.status))
        datasets.push({ 
            data: [],
            label: value.label,
            borderColor: 'rgb(255, 255, 255)',
            backgroundColor: value.color,
            borderWidth: 1,
            fill:'stack'
          });

    return {
      labels: [],
      datasets: datasets
    }
}

  updateData(infos,stats) {
    this.data.labels.push(infos.year.value);
    let i = 0;
    for (const [k, v] of Object.entries(stats)) {   
      this.data.datasets[i].data.push(v);
      i++;
    }
    console.log(this.data.datasets)
    this.update();
  }

}