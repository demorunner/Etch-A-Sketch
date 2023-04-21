document.body.onload = grid(16);

// creates a grid cell
function grid(newSize) {

  // Select the grid container element
  const container = document.querySelector('.grid-container');

  // Calculate the new cell size based on the container size and the number of cells per side
  let cellSize = container.offsetWidth / newSize;

  //emptying container
  container.innerHTML = '';
  
  // Create 256 grid cells and add them to the container
  for (let i = 0; i < newSize ** 2; i++) {
    const cell = document.createElement('div');
    cell.classList.add('grid-cell', `cell-${i}`);
    cell.style.width = cellSize + 'px';
    cell.style.height = cellSize + 'px';
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

let mouseDown ;
 // Add event listeners to each cell element
  cells.forEach(cell => {
    cell.addEventListener('mousedown', e => {
      mouseDown = true;
      cell.style.backgroundColor = colorPicker.value;
    });
    cell.addEventListener('mousemove', e => {
      if (mouseDown) {
        cell.style.backgroundColor = colorPicker.value;
      }
    });
    cell.addEventListener('mouseup', e => {
      mouseDown = false;
    });
  });
}

//select slider input
function funSlide() {
let slider = document.getElementById("size-range");
console.log(slider.value);
grid(slider.value);
}

// Select the button element
const button = document.getElementById('new-grid-button');
button.addEventListener('click', e => {
  grid(32);
});