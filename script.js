document.body.onload = grid;

// creates a grid cell
function grid() {
  const container = document.querySelector('.grid-container');
  
  for (let i = 0; i < 256; i++) {
    const cell = document.createElement('div');
    cell.classList.add('grid-cell', `cell-${i}`);
    container.appendChild(cell);
  }
  
  const cells = document.querySelectorAll('.grid-cell');
  cells.forEach(cell => {
    cell.addEventListener('mouseover', e => {
      cell.style.backgroundColor = 'yellow';
    });
    // cell.addEventListener('mouseout', e => {
    //   cell.style.backgroundColor = '';
    // });
  });
}



