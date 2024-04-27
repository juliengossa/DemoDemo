class EduCrois extends Economy {

    constructor() {
        super();
        this.description = "Minijeu éducation et croissance";
        this.infos.bilan = {label:"🪙", value:0, labelfun: (v) => v};
    }

    
    updateInfos(budget) {
        super.updateInfos(budget);
    
        let total_nation = budget.budget_nation[budget.budget_nation.length-1]
        let total_education = budget.budget_education[budget.budget_education.length-1]

        // Dotation
        let dotation = { 
            'name' : 'Dotation', 
            'unit_cost' : "",
            'pop' : "",
            'total' : Math.floor(total_nation.net * 1.5 / 100)
          };
    
        let bilan = { 
            'name' : 'Bilan', 
            'unit_cost' : "",
            'pop' : "",
            'total' : dotation.total + total_education.total
        };

        budget.budget_education.push(dotation,bilan);    
        this.infos.bilan.value = bilan.total;

        if (bilan.total < 0) {
            for (const [key, item] of Object.entries(this.inputs)) {
                item.value=Math.max(0, item.value-10);
                item.disable=true;
            }
        } else {
            for (const [key, item] of Object.entries(this.inputs)) {
                item.disable=false;
            }
        }
    }

}