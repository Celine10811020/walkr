document.addEventListener('DOMContentLoaded', function () {
  const tableBody = document.querySelector('#planets-table tbody');
  const searchInput = document.getElementById('search');

  function loadCSV(file) {
    fetch(file)
      .then(response => response.text())
      .then(data => {
        const rows = data.split('\n').slice(1).filter(row => row.trim() !== '');
        rows.forEach(row => {
          const cols = row.split(',');
          const tr = document.createElement('tr');
          cols.forEach(col => {
            const td = document.createElement('td');
            td.textContent = col.trim();
            tr.appendChild(td);
          });
        tableBody.appendChild(tr);
      });
    });
  }

  function filterTable() {
    const searchTerm = searchInput.value.toLowerCase();
    const rows = tableBody.getElementsByTagName('tr');
    for(let i = 0; i < rows.length; i++)
    {
      const cells = rows[i].getElementsByTagName('td');
      let rowContainsSearchTerm = false;
      for(let j = 0; j < cells.length; j++)
      {
        if(cells[j].textContent.toLowerCase().includes(searchTerm))
        {
          rowContainsSearchTerm = true;
          break;
        }
      }
      rows[i].style.display = rowContainsSearchTerm ? '' : 'none';
    }
  }

  loadCSV('https://celine10811020.github.io/walkr/planets/planets.csv');

  searchInput.addEventListener('input', filterTable);
});
