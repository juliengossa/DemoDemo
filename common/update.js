function updateTable(table, tableHeader, tableData) {
  
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
  
  
  function updateData() {

    console.log("Update")
  
    population.update({
      'primary' : parseFloat(document.getElementById("primary").value)
    });

    stats = population.getStats();
    budget.update(stats);
  
    updateTable(document.getElementById('populationTable'), Budget.budget_nation_header, budget.budget_nation);
    updateTable(document.getElementById('educationTable'), Budget.budget_education_header, budget.budget_education);
  
    chartPopulation.updateData(population)
    chartStats.updateData(stats)
  }
  
  
  