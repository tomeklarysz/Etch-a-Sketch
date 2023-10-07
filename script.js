const container = document.querySelector('#container');
const resetButton = document.querySelector('#reset');
const currentSize = document.querySelector('#currentSize');

let gridSize = 16;

function createGrid(gridSize) {
    for (let i = 0; i < gridSize; i++) {
    
        const column = document.createElement('div');
        column.setAttribute('class', 'column');
        container.appendChild(column);
        
        for (let j = 0; j < gridSize; j++) {
            const row = document.createElement('div');
            row.setAttribute('class', 'row');
            column.appendChild(row);
        }
    }
    let size = `${gridSize} x ${gridSize}`;
    currentSize.textContent = size;
}

function resetGrid() {
    container.innerHTML = "";
    gridSize = prompt("Choose size of a grid from 0 to 100");
    console.log(typeof gridSize);
    console.log(gridSize);
    if (gridSize > 0 && gridSize <= 100) {
        createGrid(gridSize);
        color();
    } else {
        console.log("Too big number");
    }
    
}

resetButton.addEventListener('click', resetGrid);

function color() {
    cells = document.querySelectorAll('.row');
    cells.forEach(cell => {
        cell.addEventListener('mouseover', () => {
            cell.style.backgroundColor = 'blue';
        });
    });
}

createGrid(gridSize);
color();