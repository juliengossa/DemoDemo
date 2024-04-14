console.log("Population")

class Population {
  constructor() {
    this.dpop = 0;

    this.population = Array(100);
    // console.log(this.pop);

    for (var i = 0; i < 100; i++) {
      this.population[i] = new Generation();
    }
  
    this.population[0].child = 100000;

    for (var i = 0; i < 100; i++)
        this.update({primary:0, secondary:0, tertiary:0});
  }

  static status = {
    'child': {label:'Enfant', production:0, consumption:1, educost:0, color:'rgb(100,200,100)'}, 
    'student': {label:'Etudiant', production:0, consumption:1, educost:3/25, color:'rgb(100,100,200)'},
    'worker_unqualified': {label:'Travailleur non qualifié', production:3, consumption:2, educost:0,  color:'rgb(200,100,100)'},
    'worker_primary': {label:'Travailleur peu qualifié', production:4, consumption:2, educost:0,  color:'rgb(200,100,200)'},
    'retired': {label:'Retraité', production:0, consumption:2, educost:0,  color:'rgb(100,100,100)'}
  };

  static getStatus() {
    return Object.entries(Population.status)
  }

  static getStatusLabels() {
    return Object.entries(Population.status).map(([key, value]) => value.label)
  }

  getStats() {
    stats = {}
  
    for (const [key, value] of Object.entries(Population.status)) {
      stats[key] = this.population.reduce((acc, d) => acc + d[key], 0);
    }
  
    return stats;
  }

  update(trainings) {
    
    // primaire
    var s = Math.floor(Math.min(this.population[2].child, this.population[2].child*trainings.primary/100))
    this.population[2].child = this.population[2].child - s;
    this.population[2].student = s;
    

    // insertion pro
    this.population[10] = {
      child : 0,
      student : 0,
      worker_unqualified : this.population[10].child,
      worker_primary : this.population[10].student,
      retired : 0
    }

    // retraites
    this.population[63] = {
      child : 0,
      student : 0,
      worker_unqualified : 0,
      worker_primary : 0,
      retired : this.population[63].worker_unqualified + this.population[63].worker_primary
    }

    // morts
    var death_age = 100;
    var death_ratio = 10;
    for (var i = 0; i < this.population.length; i++) {
        // for each population, divide by two
        for (const [key, value] of Object.entries(this.population[i])) {
          this.population[i][key] = this.population[i][key] * (1-Math.exp((i-death_age)/death_ratio));
        }
    }

    // Vieillissement
    for (var i = this.population.length-1; i > 0 ; i--) {
      this.population[i] = this.population[i-1];
    }

    // naissances
    this.dpop = Math.max(Math.min(this.dpop+Math.random() * 1 - 0.5, 1),-1);
    var pop0 = Math.max(this.population[0].child + this.dpop, 10);
    this.population[0] =  {
      child : pop0,
      student : 0,
      worker_unqualified : 0,
      worker_primary : 0,
      retired : 0
    }

    // rounding
    for (var i = 0; i < this.population.length; i++) {
      this.population[i].child = Math.floor(this.population[i].child);
      this.population[i].student = Math.floor(this.population[i].student);
      this.population[i].worker_unqualified = Math.floor(this.population[i].worker_unqualified);
      this.population[i].worker_primary = Math.floor(this.population[i].worker_primary);
      this.population[i].retired = Math.floor(this.population[i].retired);
    }

  }
};
