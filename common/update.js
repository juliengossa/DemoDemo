function updateTable(table, tableData) {
  
    table.innerHTML = '';
    var tableBody = document.createElement('tbody');
    // add header
    var header = document.createElement('tr');
    for(const [key, cellData] of Object.entries(tableData[0])) {
      var cell = document.createElement('th');
      cell.appendChild(document.createTextNode(key));
      header.appendChild(cell);
    }
    tableBody.appendChild(header);
    
    tableData.forEach(function(rowData) {
      var row = document.createElement('tr');
  
      for(const [key, cellData] of Object.entries(rowData)) {
        var cell = document.createElement('td');
        cell.appendChild(document.createTextNode(cellData));
        row.appendChild(cell);
      }
  
      tableBody.appendChild(row);
    });
  
    table.appendChild(tableBody);
  }
  
  
  function updateData() {
  
    updatePopulation();
    stats = updateStats();
    budget_nation = updateBudgetNation(stats);
    budget_education = updateBudgetEducation(stats,budget_nation);
  
    updateTable(document.getElementById('populationTable'),budget_nation);
    updateTable(document.getElementById('educationTable'),budget_education);
  
    chartPopulationUpdate();
  
  }
  
  // run updateData once on load
  window.onload = function() {
      for (var i = 0; i < 100; i++)
          updatePopulation();
      updateData();
  }
  
  