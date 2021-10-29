const container = document.getElementById("container");

// Function using DOM manipulation to create squares for our grid
function makeRows(rows, cols) {
  container.style.setProperty('--grid-rows', rows);
  container.style.setProperty('--grid-cols', cols);
  for (c = 0; c < (rows * cols); c++) {
    let cell = document.createElement("div");
    // cell.innerText = (c + 1);
    cell.addEventListener("mouseenter", function() {
        cell.style.backgroundColor = 'black';
    });
    container.appendChild(cell).className = "grid-item";
  };
};

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
    let sign = prompt("Would you like to make a new grid layout? [Max is 100]", '16')

    if (sign > 0 && sign < 101) {
        deleteRows();
        makeRows(sign, sign);
    }
} 


makeRows(16, 16);