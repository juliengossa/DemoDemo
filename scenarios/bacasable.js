class BacASable extends Scenario {

    infos = {
      year : {label:"📅", value:0}
    }

    updateInfos() {
      this.infos.year.value++;
    }


    positions_start = {trainings:{primary:0, secondary:0, tertiary:0}};

    inputs = { 
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


      status = {
        'child':              {order:0, production:0, consumption:1, educost:0,    color:'rgb(100,200,100,0.8)', label:'Enfant'}, 
        'student_primary':    {order:5, production:0, consumption:1, educost:3/25, color:'rgb(100,100,200,0.3)', label:'Elèves du primaire'},
        'student_secondary':  {order:6, production:0, consumption:1, educost:6/25, color:'rgb(100,100,200,0.6)', label:'Elèves du secondaire'},        
        'student_tertiary':   {order:7, production:0, consumption:2, educost:5/25, color:'rgb(100,100,200,0.8)', label:'Etudiant du supérieur'},
        'worker_unqualified': {order:1, production:3, consumption:2, educost:0,    color:'rgb(200,100,100,0.3)', label:'Travailleur non qualifié'},
        'worker_primary':     {order:2, production:4, consumption:3, educost:0,    color:'rgb(200,100,100,0.5)', label:'Travailleur peu qualifié'},
        'worker_secondary':   {order:3, production:6, consumption:4, educost:0,    color:'rgb(200,100,100,0.7)', label:'Travailleur qualifié'},
        'worker_tertiary':    {order:4, production:8, consumption:5, educost:0,    color:'rgb(200,100,100,0.9)', label:'Travailleur très qualifié'},
        'retired':            {order:9, production:1, consumption:4, educost:0,    color:'rgb(100,100,100,0.3)', label:'Retraité'}
      };

      updatePopulation(population, positions) {
            // primaire
            population[2].convertTotalRatio('child','student_primary', positions.trainings.primary/100);

            // secondaire
            population[9].convertTotalRatio('student_primary','student_secondary', positions.trainings.secondary/100);
            population[9].convert('student_primary','worker_primary');
            population[9].convert('child','worker_unqualified');
                
            // tertaire
            population[17].convertTotalRatio('student_secondary','student_tertiary', positions.trainings.tertiary/100);
            population[17].convert('student_secondary','worker_secondary');

            // fin études
            population[22].convert('student_tertiary','worker_tertiary');

            // retraites
            population[63].convert('worker_unqualified','retired');
            population[63].convert('worker_primary','retired');
            population[63].convert('worker_secondary','retired');
            population[63].convert('worker_tertiary','retired');

            return population;
      }

      death_rate(age)  {
        let death_age = 100;
        let death_ratio = 10;
        return ((1-Math.exp((age-death_age)/death_ratio)));
      }

      birth_rate(population) {
        let dpop = 0.03;
        return population[0].child * (1 + (Math.random() * dpop - dpop/2));
      }
  
}