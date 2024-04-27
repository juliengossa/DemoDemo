
class DemoDemo {

    population;
    stats;
    budget;
    chartPopulation;
    chartStats;

    scenario;

    history;

    constructor(scenario) {

        this.scenario = scenario;

        this.population = new Population(scenario);
        this.stats = this.population.getStats();
        this.budget = new Budget(this.stats);

        this.initInputs(scenario.inputs);
        this.initInfos(scenario.infos);
    
        this.chartPopulation = new ChartPopulation(document.getElementById('popChart').getContext('2d'), this.population);
        this.chartStats = new ChartStats(document.getElementById('statsChart').getContext('2d'), this.stats);

        for (var i = 0; i < 2; i++)
          this.updateData();
    
        DemoDemo.updateTable(document.getElementById('populationTable'), Budget.budget_nation_header, this.budget.budget_nation);
        DemoDemo.updateTable(document.getElementById('educationTable'), Budget.budget_education_header, this.budget.budget_education);

        this.history = {};
    }

    destroy() {
        this.chartPopulation.destroy();
        this.chartStats.destroy();
        document.getElementById("infos").innerHTML = "";
        document.getElementById("inputs").innerHTML = "";
    }
    

    initInputs(inputs) {
        for (const [key, item] of Object.entries(inputs)) {
            let newDiv = document.createElement("span");
            let newLabel = document.createElement("label");
            newLabel.setAttribute("for", key+"Input");
            newLabel.setAttribute("class", "controllabel");
            newLabel.appendChild(document.createTextNode(item.label+ " : "));
            newDiv.appendChild(newLabel);

            let newInput = document.createElement("input");
            newInput.setAttribute("id", key+"Input");
            newLabel.setAttribute("size", "10");
            for (const [akey, avalue] of Object.entries(item.attributes)) {
                newInput.setAttribute(akey, avalue);
            }
            newInput.setAttribute("value", item.value);
            newDiv.appendChild(newInput);
            document.getElementById("inputs").appendChild(newDiv)
        }
    }

    updateInputs(inputs) {
        for (const [key, item] of Object.entries(inputs)) {
            let input = document.getElementById(key+"Input");
            input.value = item.value;
            if(item.disable) input.setAttribute("readonly", "readonly");
            else input.removeAttribute("readonly");
        }
    }

    initInfos(infos) {
      for (const [key, item] of Object.entries(infos)) {
        let divinfo = document.createElement("span");

        let divtooltip = document.createElement("span");
        divtooltip.setAttribute("class", "tooltip");
        let tooltip = document.createElement("span");
        tooltip.setAttribute("class", "tooltiptext");        
        tooltip.innerHTML = item.description;
        divtooltip.innerHTML = item.label + " ";
        divtooltip.appendChild(tooltip);
        

        let labelval = document.createElement("label");
        labelval.setAttribute("id", key+"Label");
        labelval.setAttribute("class", "infolabel");
        labelval.appendChild(document.createTextNode(item.value));

        divinfo.appendChild(divtooltip);
        divinfo.appendChild(labelval);

        document.getElementById("infos").appendChild(divinfo)
      }
    }

    updateInfos(infos) {
      for (const [key, item] of Object.entries(infos)) {
        let label = document.getElementById(key+"Label")
        label.innerHTML = item.labelfun(item.value);
        label.className = "infolabel";
        label.classList.add(item.style);
      }
    }


    updateData() {
      
        //get values from controls
        let inputs_value = {}
        for (const [key, value] of Object.entries(this.scenario.inputs)) {
          this.scenario.inputs[key].value = document.getElementById(key+"Input").value;
        }
        this.population.update();
    
        this.stats = this.population.getStats();
        this.budget.update(this.stats);

        this.scenario.updateInfos(this.budget);
        this.updateInfos(this.scenario.infos);
        this.updateInputs(this.scenario.inputs);
      
        DemoDemo.updateTable(document.getElementById('populationTable'), Budget.budget_nation_header, this.budget.budget_nation);
        DemoDemo.updateTable(document.getElementById('educationTable'), Budget.budget_education_header, this.budget.budget_education);
      
        this.chartPopulation.updateData(this.population)
        this.chartStats.updateData(this.stats)
      }
 
    static updateTable(table, tableHeader, tableData) {
  
        table.innerHTML = '';
        var tableBody = document.createElement('tbody');
        // add header
        var header = document.createElement('tr');
        for(const h of tableHeader) {
          var cell = document.createElement('th');
          cell.appendChild(document.createTextNode(h));
          header.appendChild(cell);
        }
        tableBody.appendChild(header);
        
        tableData.forEach(function(rowData) {
          var row = document.createElement('tr');
      
          for(const [key, value] of Object.entries(rowData)) {
            var cell = document.createElement('td');
            var cellData = value;
    
            if (Number.isInteger(cellData)) 
              cellData = new Intl.NumberFormat('fr-FR', { style: 'decimal' }).format(value,)
    
            cell.appendChild(document.createTextNode(cellData));
            row.appendChild(cell);
          }
      
          tableBody.appendChild(row);
        });
      
        table.appendChild(tableBody);
      }
      
      
          

}