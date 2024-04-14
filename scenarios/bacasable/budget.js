class Budget {

  static budget_nation_header = ["Catégorie", "Population", "Consommation unitaire", "Production unitaire", "Consommation totale", "Production totale", "Production nette"]
  static budget_education_header = ["Catégorie", "Coût unitaire", "Population", "Budget"]

  static debt = 0;

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
            'name' : Population.status[key].label, 
            'pop' : value,
            'consumption' : Population.status[key].consumption,
            'production' : Population.status[key].production,
            'total_consumption' : Population.status[key].consumption * value,
            'total_production' : Population.status[key].production * value,
            'net' : Population.status[key].production * value - Population.status[key].consumption * value
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
      var budget = [{ 
        'name' : 'Dotation', 
        'unit_cost' : "",
        'pop' : "",
        'budget' : Math.floor(budget_nation[budget_nation.length-1].net * 2 / 100)
    
      },
      { 
        'name' : 'Dette', 
        'unit_cost' : "",
        'pop' : "",
        'budget' : this.debt
    
      }]
      
      for (const [key, value] of Object.entries(stats)) {
        if (Population.status[key].educost != 0) {
          budget.push({ 
            'name' : Population.status[key].label, 
            'unit_cost' : Population.status[key].educost,
            'pop' : value,
            'budget' : -Math.ceil(Population.status[key].educost*value) 
          })
        }
      }
    
      budget.push({ 
        'name' : 'Bilan', 
        'unit_cost' : "",
        'pop' : stats.student,
        'budget' : budget[0].budget + budget[1].budget + budget[2].budget
      })
    
      this.debt = Math.min(0,budget[budget.length-1].budget)
    
      return budget;
    }


}