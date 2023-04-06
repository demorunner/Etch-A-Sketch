// document.body.onload = addElement;



// function addElement() {

//     // create a new div element
//     const divOne = document.createElement("div");
//     const divTwo = document.createElement("div");

//     divOne.classList.add('grid-cell');
//     divTwo.classList.add('grid-cell');

//     // add the text node to the newly created div
//     divOne.innerHTML = "div one";
//     divTwo.innerHTML = "div two"

//     // add the newly created element and its content into the DOM
//     const row = document.getElementById("div1")
//     const column = document.getElementById("div2")

//     row.appendChild(divOne);
//     column.appendChild(divTwo);

// }

// for(i = 0; i<16; i++) {

//     addElement()
// }

function grid() {

    const container = document.querySelector('.grid-container');
    const cell = document.createElement('div');
    cell.classList.add('grid-cell');
    container.appendChild(cell);
}



for (let i = 0; i < 256; i++) {
  grid()
}
