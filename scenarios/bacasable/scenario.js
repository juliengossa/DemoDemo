//import { updatePopulation } from "./updatePopulation.js";

var popctx = document.getElementById('popChart').getContext('2d');
var statsctx = document.getElementById('statsChart').getContext('2d');

dpop = 0;
debt = 0;

// define status
class Population {
  constructor() {
    this.child = 0;
    this.student = 0;
    this.worker_unqualified = 0;
    this.worker_primary = 0;
    this.retired = 0;
  }
  static status = {
    'child': {label:'Enfant', production:0, consumption:0.5, educost:0, color:'rgb(100,200,100)'}, 
    'student': {label:'Etudiant', production:0, consumption:0.5, educost:3/25, color:'rgb(100,100,200)'},
    'worker_unqualified': {label:'Travailleur non qualifié', production:2, consumption:1, educost:0,  color:'rgb(200,100,100)'},
    'worker_primary': {label:'Travailleur peu qualifié', production:0, consumption:0.5, educost:0,  color:'rgb(200,100,200)'},
    'retired': {label:'Retraité', production:0, consumption:0.5, educost:0,  color:'rgb(100,100,100)'}
  };
}


// Init population
var population = new Array(100);
for (var i = 0; i < population.length; i++) {
    population[i] = new Population();
}
population[0].child = 100000;


