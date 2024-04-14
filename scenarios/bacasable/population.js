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
    let sp = Math.floor(this.population[2].child*trainings.primary/100);
    this.population[2].child = this.population[2].child - sp;
    this.population[2].student_primary = sp;
    

    // secondaire
    let ss = Math.min(this.population[9].student_primary, Math.floor(this.population[9].total*trainings.secondary/100));
    this.population[9].worker_unqualified = this.population[9].child;
    this.population[9].child = 0;

    this.population[9].worker_primary = this.population[9].student_primary - ss;
    this.population[9].student_secondary = ss;
    this.population[9].student_primary = 0;
    
    // tertaire
    let st = Math.min(this.population[17].student_secondary, Math.floor(this.population[17].total*trainings.tertiary/100));
    this.population[17].worker_secondary = this.population[17].student_secondary - st;
    this.population[17].student_tertiary = st;
    this.population[17].student_secondary = 0;

    // fin études
    this.population[22].worker_tertiary = this.population[22].student_tertiary;
    this.population[22].student_tertiary = 0;

    // retraites
    this.population[63].retired = this.population[63].total;
    this.population[63].worker_unqualified = 0;
    this.population[63].worker_primary = 0;
    this.population[63].worker_secondary = 0;
    this.population[63].worker_tertiary = 0;
    

    // morts
    var death_age = 100;
    var death_ratio = 10;
    for (var i = 0; i < this.population.length; i++) {
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
    this.population[0] = new Generation();
    this.population[0].child = pop0;

  }
};
