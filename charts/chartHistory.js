
class ChartHistory extends Chart{

  constructor(ctx, infos) {
    super (ctx, {
      type: 'line',
      data: ChartHistory.initData(infos),
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
        }
      }
    });
  }

  static initData(infos) { 
    let datasets = [];
    for (const [key, value] of Object.entries(infos)) {
      if (key == "year") continue;
      datasets.push({
        label: key,
        data: [],
        borderColor: 'rgb(75, 192, 192)',
        fill: false,
        tension: 0.1,
        hidden: true
      });
    }

    return {
      labels: [],
      datasets: datasets
    }
  }

  updateData(infos) {
    this.data.labels.push(infos.year.value);
    let i = 0;
    for (const [k, v] of Object.entries(infos)) {
      if (k == "year") continue;
      
      this.data.datasets[i].data.push(v.value);
      i++;
    }
    this.update();
  }
}