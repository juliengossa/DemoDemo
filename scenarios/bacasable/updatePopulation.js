// make a function to update the data
function updatePopulation() {

    trainings = {
      'primary' : parseFloat(document.getElementById("primary").value)
    }
    
    // primaire
    s = Math.floor(Math.min(population[2].child, population[2].child*trainings.primary/100))
    population[2].child = population[2].child - s;
    population[2].student = s;
    
  
    // insertion pro
    population[10] = {
      child : 0,
      student : 0,
      worker_unqualified : population[10].child,
      worker_primary : population[10].student,
      retired : 0
    }
  
    // retraites
    population[63] = {
      child : 0,
      student : 0,
      worker_unqualified : 0,
      worker_primary : 0,
      retired : population[63].worker_unqualified + population[63].worker_primary
    }
  
    // morts
    death_age = 100;
    death_ratio = 10;
    for (var i = 0; i < population.length; i++) {
        // for each population, divide by two
        for (const [key, value] of Object.entries(population[i])) {
          population[i][key] = population[i][key] * (1-Math.exp((i-death_age)/death_ratio));
        }
    }
  
    // Vieillissement
    for (var i = population.length-1; i > 0 ; i--) {
      population[i] = population[i-1];
    }
  
    // naissances
    dpop = Math.max(Math.min(dpop+Math.random() * 1 - 0.5, 1),-1);
    pop0 = Math.max(population[0].child + dpop, 10);
    population[0] =  {
      child : pop0,
      student : 0,
      worker_unqualified : 0,
      worker_primary : 0,
      retired : 0
    }
  
    // rounding
    for (var i = 0; i < population.length; i++) {
      population[i].child = Math.floor(population[i].child);
      population[i].student = Math.floor(population[i].student);
      population[i].worker_unqualified = Math.floor(population[i].worker_unqualified);
      population[i].worker_primary = Math.floor(population[i].worker_primary);
      population[i].retired = Math.floor(population[i].retired);
    }
  
  }