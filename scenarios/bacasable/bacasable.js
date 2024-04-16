class BacASable {

    year_start = 0;

    positions_start = {trainings:{primary:0, secondary:0, tertiary:0}};

    controls = { 
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
        'child':              {label:'Enfant', production:0, consumption:1, educost:0, color:'rgb(100,200,100,0.8)'}, 
        'worker_unqualified': {label:'Travailleur non qualifié', production:3, consumption:2, educost:0,  color:'rgb(200,100,100,0.3)'},
        'student_primary':    {label:'Elèves du primaire', production:0, consumption:1, educost:3/25, color:'rgb(100,100,200,0.3)'},
        'worker_primary':     {label:'Travailleur peu qualifié', production:4, consumption:2, educost:0,  color:'rgb(200,100,100,0.5)'},
        'student_secondary':  {label:'Elèves du secondaire', production:0, consumption:1, educost:6/25, color:'rgb(100,100,200,0.6)'},
        'worker_secondary':   {label:'Travailleur qualifié', production:5, consumption:2, educost:0,  color:'rgb(200,100,100,0.7)'},
        'student_tertiary':   {label:'Etudiant du supérieur', production:0, consumption:1, educost:5/25, color:'rgb(100,100,200,0.8)'},
        'worker_tertiary':    {label:'Travailleur très qualifié', production:6, consumption:2, educost:0,  color:'rgb(200,100,100,0.9)'},
        'retired':            {label:'Retraité', production:0, consumption:2, educost:0,  color:'rgb(100,100,100,0.3)'}
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