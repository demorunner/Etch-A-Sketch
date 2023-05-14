// Select the grid container element
const container = document.querySelector(".grid-container");

// Select the color picker element
const colorPicker = document.getElementById("color-picker");

// Get a reference default button element
const defaultBtn = document.getElementById("default-btn");
let useDefault = false;

// Get a reference Random-Color button element
const randomColorButton = document.getElementById("Random-Color");
let useRandomColor = false;

//Get a reference Erase button element
const eraseButton = document.getElementById("erase");
let useErase = false;

let mouseDown;

//function for creating the grid
function grid(newSize) {

  // calculate cell width and height based on container size
  let cellSize = container.offsetWidth / newSize;

  //emptying container
  container.innerHTML = "";

  // Create 256 grid cells and add them to the container
  for (let i = 0; i < newSize ** 2; i++) {
    //creating cell div element
    const cell = document.createElement("div");
    //add classes to created cells
    cell.classList.add("grid-cell", `cell-${i}`);
    //set width and height of cells
    cell.style.width = cellSize + "px";
    cell.style.height = cellSize + "px";
    //add created cells to container
    container.appendChild(cell);
  }

  // reference all of the cell elements
  const cells = document.querySelectorAll(".grid-cell");

  // Calls eventControl and clearButton function and pass the cells variable
  eventControl(cells);
  clearButton(cells);
}

//function for adding eventListeners to cells and buttons
function eventControl(cells) {
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

  //eventListener for Default button
  defaultBtn.addEventListener("click", (e) => {
    setDefaultColor()
  });

  // eventListener for Random-Color button
  randomColorButton.addEventListener("click", (e) => {
    useRandomColor = !false;
  });

  //eventListener for eraser button
  eraseButton.addEventListener("click", () => {
    useErase = true;
    useRandomColor = false;
  });
}

//Function for setting default styles and values for clear button
function setDefaultColor() {
  useRandomColor = false;
  useErase = false;
  defaultBtn.style.backgroundColor = "#5439D7";
  defaultBtn.style.color = "#e5ff3d";
  colorPicker.value = "#000000";
}

//function for RGB button
function randomColor() {
  return `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`;
}

// function for clear button
function clearButton(cells) {
  // reference the Clear button element
  const clearBtn = document.getElementById("clear-btn");

  //on eventListener changes all cell background to none
  clearBtn.addEventListener("click", (e) => {
    cells.forEach((cell) => {
      cell.style.backgroundColor = "";
    });

    useRandomColor = false;
    useErase = false;
  });
}

//function for range slider
function funSlide() {
  let slider = document.getElementById("size-range");
  document.getElementById("slider-size").textContent = slider.value + " X " + slider.value;
  //calls grid() and pass the slider value
  grid(slider.value);
}


//ID of last selected button
let lastButtonId = null;

// Function to change the button styles
function changeButtonColor(buttonId) {
  // Declare the variable for the ID of the last selected button
  const button = document.getElementById(buttonId);
  // Set the button style
  button.style.backgroundColor = "#5439D7";
  button.style.color = "#e5ff3d";
  
  // Check if the last selected button ID is different from the current button ID. If so, remove the style from the last selected button.
  if (lastButtonId && lastButtonId !== buttonId) {
    const lastButton = document.getElementById(lastButtonId);
    lastButton.style.backgroundColor = "#FDF9FF";
    lastButton.style.color = "";

  }

  //sets style of default button
  defaultBtn.style.backgroundColor = "#FDF9FF";
  defaultBtn.style.color = "#000000";

  // stores ID of the current button as the lastButtonId for reference
  lastButtonId = buttonId;
}


defaultBtn.addEventListener("click", function () {
  changeButtonColor("default-btn");
});

randomColorButton.addEventListener("click", (e) => {
  changeButtonColor("Random-Color");
});

eraseButton.addEventListener("click", function () {
  changeButtonColor("erase");
});

const clearBtn = document.getElementById("clear-btn");
clearBtn.addEventListener("click", function () {
  changeButtonColor("default-btn");
  setDefaultColor()
});


document.body.onload = grid(16);
