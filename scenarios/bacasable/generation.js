// define status
class Generation {
  constructor() {
    for (const [key, value] of Object.entries(Generation.status))
      this[key] = 0;
  }

  static status = {
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

  get total() {
    console.log("Teste " + this)
    return Object.values(this).reduce((sum, value) => sum + value, 0);
  }
}

