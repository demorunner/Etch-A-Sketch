document.body.onload = grid;

// creates a grid cell
function grid() {

  // Select the grid container element
  const container = document.querySelector('.grid-container');
  
  // Create 256 grid cells and add them to the container
  for (let i = 0; i < 256; i++) {
    const cell = document.createElement('div');
    cell.classList.add('grid-cell', `cell-${i}`);
    container.appendChild(cell);
  }
  
  // Select all the grid cells
  const cells = document.querySelectorAll('.grid-cell');

  // Select the color picker element
  const colorPicker = document.getElementById('color-picker');

  // Listen for the input event on the color picker
  colorPicker.addEventListener('input', e => {
    // Get the value of the color picker
    const color = e.target.value;
  });

  cells.forEach(cell => {
    cell.addEventListener('mouseover', e => {
      cell.style.backgroundColor = colorPicker.value;
    });
    // cell.addEventListener('mouseout', e => {
    //   cell.style.backgroundColor = '';
    // });
  });
}



