// Select the grid container element
const container = document.querySelector(".grid-container");

// Select the color picker element
const colorPicker = document.getElementById("color-picker");

// Get a reference to the Random-Color button element
const defaultBtn = document.getElementById("default-btn");
let useDefault = false;

// Get a reference to the Random-Color button element
const randomColorButton = document.getElementById("Random-Color");
let useRandomColor = false;

const eraseButton = document.getElementById("erase");
let useErase = false;

let mouseDown;

function grid(newSize) {
  // Select the grid container element
  let cellSize = container.offsetWidth / newSize;
  //emptying container
  container.innerHTML = "";

  // Create 256 grid cells and add them to the container
  for (let i = 0; i < newSize ** 2; i++) {
    //creating cell div element
    const cell = document.createElement("div");
    cell.classList.add("grid-cell", `cell-${i}`);
    cell.style.width = cellSize + "px";
    cell.style.height = cellSize + "px";
    container.appendChild(cell);
  }

  // Get a reference to all of the cell elements
  const cells = document.querySelectorAll(".grid-cell");

  // Call the addEventListeners function and pass in the cells variable
  addEventListeners(cells);
  clearButton(cells);
}

function addEventListeners(cells) {
  // Add event listeners to each cell element
  cells.forEach((cell) => {
    cell.addEventListener("mousedown", (e) => {
      mouseDown = true;
      if (mouseDown) {
        if (useRandomColor) {
          if (useErase) {
            useErase = false;
          }
          cell.style.backgroundColor = randomColor();
        } else if (!useRandomColor) {
          cell.style.backgroundColor = colorPicker.value;
        }
        if (useErase) {
          cell.style.backgroundColor = "";
        }
      }
    });
    cell.addEventListener("mousemove", (e) => {
      if (mouseDown) {
        if (useRandomColor) {
          cell.style.backgroundColor = randomColor();
        } else {
          cell.style.backgroundColor = colorPicker.value;
        }
        if (useErase) {
          cell.style.backgroundColor = "";
        }
      }
    });
    cell.addEventListener("mouseup", (e) => {
      mouseDown = false;
    });
  });

  defaultBtn.addEventListener("click", (e) => {
    setDefaultColor()
  });

  // Add a click event listener to the Random-Color button
  randomColorButton.addEventListener("click", (e) => {
    useRandomColor = !useRandomColor;
  });

  //added a click event listener for eraser button
  eraseButton.addEventListener("click", () => {
    useErase = !useErase;
    useRandomColor = false;
  });
}

function setDefaultColor() {
  useRandomColor = false; 
  useErase = false;
  colorPicker.value = "#000000";
}

function funSlide() {
  let slider = document.getElementById("size-range");
  // console.log(slider.value);
  document.getElementById("slider-size").textContent =
    slider.value + " X " + slider.value;
  grid(slider.value);
}

function clearButton(cells) {
  // Get a reference to the Clear button element
  const clearBtn = document.getElementById("clear-btn");

  // Add a click event listener to the Clear button and call the clearGrid function
  clearBtn.addEventListener("click", (e) => {
    cells.forEach((cell) => {
      cell.style.backgroundColor = "";
    });
    useRandomColor = false;
    useErase = false;
  });
}

function randomColor() {
  return `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(
    Math.random() * 256
  )}, ${Math.floor(Math.random() * 256)})`;
}

document.body.onload = grid(16);
