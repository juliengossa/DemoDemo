
class ChartInfos extends Chart{

  constructor(ctx, infos) {
    super (ctx, {
      type: 'line',
      data: [],
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
            display: true,
            position: 'top',
            labels: {
              fontColor: 'rgb(0, 0, 0)',
              fontSize: 14
            }
          },
          title: {
            display: false,
            text: 'Historique',
            fontSize: 20,
            fontColor: 'rgb(0, 0, 0)',
            padding: 20
          }
        },
        animation:false
      }
    });
    this.data = this.initData(infos);
  }

  initData(infos) { 
    return {
      labels: [],
      datasets: []
    }
  }

  updateData(infos) {
    this.data.labels.push(infos.year.value);
    this.update();
  }
}