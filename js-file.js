const container = document.getElementById("container");
let defaultGridSize = 16;

// Function using DOM manipulation to create squares for our grid
function makeRows(input = defaultGridSize) {
  let gridSize = input ** 2;
  
  // Create our columns and rows with 1 fraction unit each
  container.style.gridTemplateColumns = `repeat(${input}, 1fr)`;
  container.style.gridTemplateRows = `repeat(${input}, 1fr)`;

  // Create our grid items 
  for (let i = 1; i <= gridSize; i++) {
    let cell = document.createElement("div");
    cell.style.height = `${(960 / input) - 2}px`;
    cell.style.width = `${(960 / input) - 2}px`;
    cell.addEventListener("mouseenter", function() {
      cell.style.backgroundColor = 'black';
    });
    container.appendChild(cell).className = "grid-item";
  }
}

function deleteRows() {
    var items = document.querySelectorAll(".grid-item");
    for(var i = 0; i < items.length; i++) {
            container.removeChild(items[i])
    }
}

function clearBoard() {
    var items = document.querySelectorAll(".grid-item");
    for(var i = 0; i < items.length; i++) {
            items[i].style.backgroundColor = 'grey';
    }
    
    let input = prompt("Would you like to make a new grid layout? [Choose from 1 to 100!]", '16')

    if (input > 0 && input < 101) {
        deleteRows();
        makeRows(input);
    } else {
      console.log('Board cleared, but not resized.')
    }
} 


makeRows();