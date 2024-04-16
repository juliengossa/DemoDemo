
class DemoDemo {

    population;
    stats;
    budget;
    chartPopulation;
    chartStats;

    scenario;

    year;

    constructor(scenario) {
        console.log("Init");

        this.scenario = scenario;
        this.year = scenario.year_start;
    
        this.population = new Population(scenario);
        this.stats = this.population.getStats();
        this.budget = new Budget(this.stats);

        this.initControl(scenario.controls);
    
        this.chartPopulation = new ChartPopulation(document.getElementById('popChart').getContext('2d'), this.population);
        this.chartStats = new ChartStats(document.getElementById('statsChart').getContext('2d'), this.stats);
    
        DemoDemo.updateTable(document.getElementById('populationTable'), Budget.budget_nation_header, this.budget.budget_nation);
        DemoDemo.updateTable(document.getElementById('educationTable'), Budget.budget_education_header, this.budget.budget_education);
    }
    

    initControl(controls) {
        for (const [key, value] of Object.entries(controls)) {
            var newDiv = document.createElement("div");
            var newLabel = document.createElement("label");
            newLabel.setAttribute("for", key+"Label");
            newLabel.appendChild(document.createTextNode(value.label));
            newDiv.appendChild(newLabel);

            var newInput = document.createElement("input");
            newInput.setAttribute("id", key+"Input");
            for (const [akey, avalue] of Object.entries(value.attributes)) {
                newInput.setAttribute(akey, avalue);
            }
            newDiv.appendChild(newInput);
            document.getElementById("controls").appendChild(newDiv)
        }
    }

    updateData() {
        console.log("Update")
        this.year++;
      
        //get values from controls
        var controls_value = {}
        for (const [key, value] of Object.entries(this.scenario.controls)) {
            controls_value[key] = document.getElementById(key+"Input").value;
        }
        this.population.update({'trainings':controls_value});
    
        this.stats = this.population.getStats();
        this.budget.update(this.stats);
      
        DemoDemo.updateTable(document.getElementById('populationTable'), Budget.budget_nation_header, this.budget.budget_nation);
        DemoDemo.updateTable(document.getElementById('educationTable'), Budget.budget_education_header, this.budget.budget_education);
      
        this.chartPopulation.updateData(this.population)
        this.chartStats.updateData(this.stats)
      
        document.getElementById('yearLabel').value = this.year;
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