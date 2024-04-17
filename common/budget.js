class Budget {

  static budget_nation_header = ["Catégorie", "Population", "Consommation unitaire", "Production unitaire", "Consommation totale", "Production totale", "Production nette"]
  static budget_education_header = ["Catégorie", "Coût unitaire", "Population", "Budget"]

  constructor(stats) {
    this.update(stats);
  }

  update(stats) {
    this.budget_nation = Budget.budgetNation(stats);
    this.budget_education = Budget.budgetEducation(stats,this.budget_nation);
  }


  static budgetNation(stats) {
      var budget = [];

      for (const [key, value] of Object.entries(stats)) {
          budget.push({ 
            'name' : Generation.status[key].label, 
            'pop' : value,
            'consumption' : Generation.status[key].consumption,
            'production' : Generation.status[key].production,
            'total_consumption' : Generation.status[key].consumption * value,
            'total_production' : Generation.status[key].production * value,
            'net' : Generation.status[key].production * value - Generation.status[key].consumption * value
          })
        }
      
      budget.push({
        'name' : 'Bilan',
        'pop' : budget.reduce((a, b) => a + b.pop, 0),
        'consumption' : "",
        'production' : "",
        'total_consumption' :  budget.reduce((a, b) => a + b.consumption * b.pop, 0),
        'total_production' : budget.reduce((a, b) => a + b.production * b.pop, 0),
        'net' : budget.reduce((a, b) => a + b.net, 0)
      })
      return budget;
    }

    static budgetEducation(stats,budget_nation) {
      var budget = []
      
      for (const [key, value] of Object.entries(stats)) {
        if (Generation.status[key].educost != 0) {
          budget.push({ 
            'name' : Generation.status[key].label, 
            'unit_cost' : Generation.status[key].educost,
            'pop' : value,
            'total' : -Math.ceil(Generation.status[key].educost*value) 
          });
        }
      }
    
      var total = { 
        'name' : 'Total', 
        'unit_cost' : "",
        'pop' : budget.reduce((a, b) => a + b.pop, 0),
        'total' : budget.reduce((a, b) => a + b.total, 0)
      };

      var dotation = { 
        'name' : 'Dotation', 
        'unit_cost' : "",
        'pop' : "",
        'total' : Math.floor(budget_nation[budget_nation.length-1].net * 2 / 100)
      };

      var bilan = { 
        'name' : 'Bilan', 
        'unit_cost' : "",
        'pop' : "",
        'total' : dotation.total + total.total
      };

      budget.push(total,dotation,bilan);

        
      return budget;
    }


}