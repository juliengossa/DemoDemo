class Population {

  constructor(scenario) {
    this.scenario = scenario;
    this.population = Array(100);
    
    for (var i = 0; i < 100; i++) {
      this.population[i] = new Generation(scenario.status);
    }

    for (var i = 0; i < 100; i++)
        this.update(this.scenario);
  }

  getStats() {
    var stats = {}
  
    for (const [key, value] of Object.entries(this.scenario.status)) {
      stats[key] = this.population.reduce((acc, d) => acc + d[key], 0);
    }
  
    return stats;
  }

  update(positions) {
    this.population = this.scenario.updatePopulation(this.population, positions)
    

    // morts
    for (var i = 0; i < this.population.length; i++) {
      this.population[i].kill(this.scenario.deathRate(i));
    }

    // Vieillissement
    for (var i = this.population.length-1; i > 0 ; i--) {
      this.population[i] = this.population[i-1];
    }

    // naissances
    this.population[0] = new Generation(this.scenario.status, this.scenario.birthRate(this.population));
  }
};
