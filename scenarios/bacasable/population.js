console.log("Population")

class Population {
  constructor(year=0) {
    this._year = year;
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

 
  static controls = { 
    primary : { 
      label:"Places en primaire",
      attributes : { type:"number", value:"0", step:"10", min:"0", max:"100" }},
    secondary : {
      label:"Places en secondaire",
      attributes : { type:"number", value:"0", step:"10", min:"0", max:"100" }},    
    tertiary : {
      label:"Places en tertiaire",
      attributes : { type:"number", value:"0", step:"10", min:"0", max:"100" }}
  };

  get year() { 
    return this._year;
  }

  static getStatus() {
    return Object.entries(Generation.status)
  }

  static getStatusLabels() {
    return Object.entries(Generation.status).map(([key, value]) => value.label)
  }

  getStats() {
    stats = {}
  
    for (const [key, value] of Object.entries(Generation.status)) {
      stats[key] = this.population.reduce((acc, d) => acc + d[key], 0);
    }
  
    return stats;
  }

  update(trainings) {
    this._year += 1;
    
    // primaire
    this.population[2].convertTotalRatio('child','student_primary',trainings.primary/100);

    // secondaire
    this.population[9].convertTotalRatio('student_primary','student_secondary',trainings.secondary/100);
    this.population[9].convert('student_primary','worker_primary');
    this.population[9].convert('child','worker_unqualified');
        
    // tertaire
    this.population[17].convertTotalRatio('student_secondary','student_tertiary',trainings.tertiary/100);
    this.population[17].convert('student_secondary','worker_secondary');

    // fin études
    this.population[22].convert('student_tertiary','worker_tertiary');

    // retraites
    this.population[63].convert('worker_unqualified','retired');
    this.population[63].convert('worker_primary','retired');
    this.population[63].convert('worker_secondary','retired');
    this.population[63].convert('worker_tertiary','retired');
    

    // morts
    var death_age = 100;
    var death_ratio = 10;
    for (var i = 0; i < this.population.length; i++) {
      this.population[i].kill((1-Math.exp((i-death_age)/death_ratio)));
    }

    // Vieillissement
    for (var i = this.population.length-1; i > 0 ; i--) {
      this.population[i] = this.population[i-1];
    }

    // naissances
    this.dpop = Math.max(Math.min(this.dpop+Math.random() * 1 - 0.5, 1),-1);
    var pop0 = Math.max(this.population[0].child + this.dpop, 10);
    this.population[0] = new Generation(pop0);

  }
};
