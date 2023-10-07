const container = document.querySelector('#container');

function createGrid() {
    for (let i = 0; i <= 16; i++) {
    
        const column = document.createElement('div');
        column.setAttribute('class', 'column');
        container.appendChild(column);
        
        for (let j = 0; j <= 16; j++) {
            const row = document.createElement('div');
            row.setAttribute('class', 'row');
            column.appendChild(row);
        }
    
    }
}

function color() {
    cells = document.querySelectorAll('.row');
    cells.forEach(cell => {
        cell.addEventListener('mouseover', () => {
            cell.style.backgroundColor = 'blue';
        });
    });
}

createGrid();
color();