
class BacASable extends Scenario {

    constructor() {
      super();
      this.description = "Simulateur basique de population";
      this.infos = {
        year : {label:"📅", value:-2, description:"Nombre d'années écoulées", labelfun: (v) => v},
      };
    }

    updateInfos() {
      this.infos.year.value++;
    }

    inputs = { 
        primary : { 
          label:"Places en primaire",
          value : 0,
          attributes : { type:"number", step:"10", min:"0", max:"100" }},
        secondary : {
          label:"Places en secondaire",
          value : 0,
          attributes : { type:"number", step:"10", min:"0", max:"100" }},    
        tertiary : {
          label:"Places en tertiaire",
          value : 0,
          attributes : { type:"number", step:"10", min:"0", max:"100" }}
      };


      status = {
        'child':              {order:0, production:0, consumption:1, educost:0,    color:'rgb(100,200,100,0.8)', label:'Enfant'}, 
        'student_primary':    {order:5, production:0, consumption:1, educost:2, color:'rgb(100,100,200,0.3)', label:'Elèves du primaire'},
        'student_secondary':  {order:6, production:0, consumption:1, educost:4, color:'rgb(100,100,200,0.6)', label:'Elèves du secondaire'},        
        'student_tertiary':   {order:7, production:1, consumption:2, educost:6, color:'rgb(100,100,200,0.8)', label:'Etudiant du supérieur'},
        'worker_unqualified': {order:1, production:3, consumption:2, educost:0,    color:'rgb(200,100,100,0.3)', label:'Travailleur non qualifié'},
        'worker_primary':     {order:2, production:6, consumption:4, educost:0,    color:'rgb(200,100,100,0.5)', label:'Travailleur peu qualifié'},
        'worker_secondary':   {order:3, production:12, consumption:8, educost:0,    color:'rgb(200,100,100,0.7)', label:'Travailleur qualifié'},
        'worker_tertiary':    {order:4, production:24, consumption:12, educost:0,    color:'rgb(200,100,100,0.9)', label:'Travailleur très qualifié'},
        'retired':            {order:0, production:1, consumption:3, educost:0,    color:'rgb(100,100,100,0.3)', label:'Retraité'}
      };

      updatePopulation(population) {
            // primaire
            population[2].convertTotalRatio('child','student_primary', this.inputs.primary.value/100);

            // secondaire
            population[9].convertTotalRatio('student_primary','student_secondary', this.inputs.secondary.value/100);
            population[9].convert('student_primary','worker_primary');
            population[9].convert('child','worker_unqualified');
                
            // tertaire
            population[17].convertTotalRatio('student_secondary','student_tertiary', this.inputs.tertiary.value/100);
            population[17].convert('student_secondary','worker_secondary');

            // fin études
            population[22].convert('student_tertiary','worker_tertiary');

            // retraites
            population[64].convert('worker_unqualified','retired');
            population[64].convert('worker_primary','retired');
            population[64].convert('worker_secondary','retired');
            population[64].convert('worker_tertiary','retired');

            return population;
      }

      deathRate(age)  {
        let death_age = 110;
        let death_ratio = 11;
        return ((1-Math.exp((age-death_age)/death_ratio)));
      }

      birthRate(population) {
        let pop = 800000;
        let dpop = 0.1;
        return pop * (1 + (Math.random() * dpop - dpop/2));
      }
  
}