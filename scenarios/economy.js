class Economy extends BacASable {

    constructor() {
        super();
        this.description = "Simulateur basique d'économie";

        this.infos.population = {label:"👥", value:0, description:"Population totale",
            labelfun: (v) => (v/1000000).toLocaleString(undefined,{minimumFractionDigits:1,maximumFractionDigits:1})+' M'};
        this.infos.pib = {label:"🛠️", value:0, description:"Production totale (PIB)",
            labelfun: (v) => (v/1000000).toLocaleString(undefined,{minimumFractionDigits:1,maximumFractionDigits:1})+" M₡"};
        this.infos.growth = {label:"📈", value:0, description:"Croissance du PIB",
            labelfun: (v) => v.toLocaleString(undefined,{style: 'percent', minimumFractionDigits:1})};
        this.infos.die = {label:"🏫", value:0, description:"Dépense intérieure d'éducation (DIE)",
            labelfun: (v) => v.toLocaleString(undefined,{style: 'percent', minimumFractionDigits:1})};
        
        this.previous_total_production = 1;
    }

    
    updateInfos(budget) {
        super.updateInfos();

        let total_nation = budget.budget_nation[budget.budget_nation.length-1]
        let total_education = budget.budget_education[budget.budget_education.length-1]

        this.infos.population.value = total_nation.pop;
        this.infos.pib.value = total_nation.total_production;
        this.infos.die.value = Math.abs(-total_education.total / total_nation.total_production);

        // Croissance
        this.infos.growth.value = Number(total_nation.total_production / this.previous_total_production - 1);
        this.previous_total_production = total_nation.total_production;
    }

}