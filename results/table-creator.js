export function createTable(array, tableDom) {
    array.forEach(result => { 
        const tableRow = document.createElement('tr');
        const tdId = document.createElement('td');
        tdId.textContent = result.id;
        const tdName = document.createElement('td');
        tdName.textContent = result.name;
        const tdSelections = document.createElement('td');
        tdSelections.textContent = result.selections;
        const tdViews = document.createElement('td');
        tdViews.textContent = result.views;

        tableRow.appendChild(tdId);
        tableRow.appendChild(tdName);
        tableRow.appendChild(tdSelections);
        tableRow.appendChild(tdViews);

        tableDom.appendChild(tableRow);
    });
}

