function updateBudgetNation(stats) {
    var budget = [{ 
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
  
    budget.forEach(function(b, i) {
      b.pop = Math.round(b.pop);
      b.total_consumption = b.consumption * b.pop;
      b.total_production = b.production * b.pop;
      b.net =  b.total_production - b.total_consumption;
    })
  
    budget[budget.length] = {
      'name' : 'Total',
      'pop' : budget.reduce((a, b) => a + b.pop, 0),
      'consumption' : "",
      'production' : "",
      'total_consumption' :  budget.reduce((a, b) => a + b.consumption * b.pop, 0),
      'total_production' : budget.reduce((a, b) => a + b.production * b.pop, 0),
      'net' : budget.reduce((a, b) => a + b.net, 0)
    }
  
    return budget;
  }