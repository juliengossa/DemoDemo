
function updateBudgetEducation(stats,budget_nation) {
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
      'budget' : debt
  
    }]
    
    for (const [key, value] of Object.entries(stats)) {
      if (Population.status[key].educost != 0) {
        budget.push({ 
          'name' : key, 
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
  
    debt = Math.min(0,budget[budget.length-1].budget)
  
    return budget;
  }