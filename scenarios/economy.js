

class Economy extends BacASable {

    constructor() {
        super();
        this.description = "Simulateur basique d'économie";

        this.infos.population = {label:"👥", value:0, description:"Population totale",
            labelfun: (v) => formatNumber(v, ' M', 1e6, 1)};
        this.infos.pib = {label:"🛠️", value:0, description:"Production totale (PIB)", chartcat:"Budget",
            labelfun: (v) => formatNumber(v, ' M₡', 1e6, 1)};
        this.infos.growth = {label:"📈", value:0, description:"Croissance du PIB", chartcat:"Budget %",
            labelfun: (v) => formatNumber(v, '', 1, 1, 'percent')};
        this.infos.die = {label:"👩‍🏫", value:0, description:"Dépense intérieure d'éducation (DIE)", chartcat:"Budget",
            labelfun: (v) => formatNumber(v, ' M₡', 1e6, 1)};
        this.infos.diepib = {label:"🏫", value:0, description:"DIE en pourcent de PIB", chartcat:"Budget %",
            labelfun: (v) => formatNumber(v, '', 1, 1, 'percent')};
        
        //this.previous_total_production = 1;
    }

    updateInfos(budget) {
        super.updateInfos();

        let total_nation = budget.budget_nation[budget.budget_nation.length-1]
        let total_education = budget.budget_education[budget.budget_education.length-1]

        this.infos.population.value = total_nation.pop;
        this.infos.pib.value = total_nation.total_production;
        this.infos.die.value = total_education.total;
        this.infos.diepib.value = Math.abs(total_education.total / total_nation.total_production);

        // Croissance
        try {
            this.infos.growth.value = Number(total_nation.total_production / this.previous_total_production - 1);
        } catch {
            this.infos.growth.value = 0;
        }
        this.previous_total_production = total_nation.total_production;
    }

    infosChartsTitles = [ {title:'PIB', chartclass:ChartPIB}, {title:'% PIB',chartclass:ChartPIBp} ];
}



class ChartPIB extends ChartInfos {

    constructor(ctx, infos) {
        super (ctx, infos);
        //this.options.plugins.title.text = 'PIB';
    }

    initData(infos) { 
        let datasets = [
            {
                label: 'PIB',
                data: [],
                borderColor: 'rgb(192, 75, 192)',
                hidden: false
            },
            {
                label: 'DIE',
                data: [],
                borderColor: 'rgb(75, 192, 192)',
                hidden: false
            }
        ];

        return {
            labels: [],
            datasets: datasets
        }
    }

    updateData(infos) {
        this.data.datasets[0].data.push(infos.pib.value);
        this.data.datasets[1].data.push(infos.die.value);
        super.updateData(infos);
    }
}

class ChartPIBp extends ChartInfos {

    constructor(ctx, infos) {
        super (ctx, infos);
        //this.options.plugins.title.text = 'PIB';
    }

    initData(infos) { 
        let datasets = [
            {
                label: 'Croissance (% PIB)',
                data: [],
                borderColor: 'rgb(192, 75, 192)',
                hidden: false
            },
            {
                label: 'DIE (% PIB)',
                data: [],
                borderColor: 'rgb(75, 192, 192)',
                hidden: false
            }
        ];

        return {
            labels: [],
            datasets: datasets
        }
    }

    updateData(infos) {
        this.data.datasets[0].data.push(infos.growth.value);
        this.data.datasets[1].data.push(infos.diepib.value);
        super.updateData(infos);
    }
}