// define status
class Generation {
    constructor() {
      this.child = 0;
      this.student = 0;
      this.worker_unqualified = 0;
      this.worker_primary = 0;
      this.retired = 0;
    }
    
    static status = {
      'child': {label:'Enfant', production:0, consumption:1, educost:0, color:'rgb(100,200,100)'}, 
      'student': {label:'Etudiant', production:0, consumption:1, educost:3/25, color:'rgb(100,100,200)'},
      'worker_unqualified': {label:'Travailleur non qualifié', production:3, consumption:2, educost:0,  color:'rgb(200,100,100)'},
      'worker_primary': {label:'Travailleur peu qualifié', production:4, consumption:2, educost:0,  color:'rgb(200,100,200)'},
      'retired': {label:'Retraité', production:0, consumption:2, educost:0,  color:'rgb(100,100,100)'}
    };
} 
