class Budget {

  static budget_nation_header = ["Catégorie", "Population", "Conso. unitaire", "Prod. unitaire", "Conso. totale", "Prod. totale", "Prod. nette"]
  static budget_education_header = ["Catégorie", "Coût unitaire", "Population", "Budget"]

  constructor(stats) {
    this.update(stats);
  }

  update(stats) {
    this.budget_nation = Budget.budgetNation(stats);
    this.budget_education = Budget.budgetEducation(stats,this.budget_nation);
  }


  static budgetNation(stats) {
      let budget = [];

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
      let budget = []
      
      for (const [key, value] of Object.entries(stats)) {
        if (Generation.status[key].educost != 0) {
          budget.push({ 
            'name' : Generation.status[key].label, 
            'unit_cost' : Generation.status[key].educost,
            'pop' : value,
            'total' : Math.ceil(Generation.status[key].educost*value) 
          });
        }
      }
    
      let total = { 
        'name' : 'Total', 
        'unit_cost' : "",
        'pop' : budget.reduce((a, b) => a + b.pop, 0),
        'total' : budget.reduce((a, b) => a + b.total, 0)
      };

      budget.push(total);

        
      return budget;
    }


}