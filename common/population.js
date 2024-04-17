console.log("Population")

class Population {

  constructor(scenario) {
    this.population = Array(100);
    
    for (var i = 0; i < 100; i++) {
      this.population[i] = new Generation(scenario.status);
    }
  
    this.population[0].child = 100000;

    for (var i = 0; i < 100; i++)
        this.update(scenario.positions_start);
  }

  static getStatus() {
    return Object.entries(scenario.status)
  }

  static getStatusLabels() {
    return Object.entries(scenario.status).map(([key, value]) => value.label)
  }

  static getStatusColors() {
    return Object.entries(scenario.status).map(([key, value]) => value.color)
  }

  getStats() {
    var stats = {}
  
    for (const [key, value] of Object.entries(scenario.status)) {
      stats[key] = this.population.reduce((acc, d) => acc + d[key], 0);
    }
  
    return stats;
  }

  update(positions) {
    this.population = scenario.updatePopulation(this.population, positions)
    

    // morts
    for (var i = 0; i < this.population.length; i++) {
      this.population[i].killAll(scenario.death_rate(i));
    }

    // Vieillissement
    for (var i = this.population.length-1; i > 0 ; i--) {
      this.population[i] = this.population[i-1];
    }

    // naissances
    this.population[0] = new Generation(scenario.status, scenario.birth_rate(this.population));
  }
};
