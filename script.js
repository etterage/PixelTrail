const grid = document.getElementById("grid");

function createGrid() {

    grid.innerHTML = "";

    for (i = 0; i < 16 * 16; i++) {
        const cell = document.createElement("div");
        cell.classList.add("cell");
        cell.style.backgroundColor = "white";
        cell.style.border = "1px solid #ddd";

        grid.style.gridTemplateColumns = "repeat(16, 1fr)";
        grid.style.gridTemplateRows = "repeat(16, 1fr)";
        grid.appendChild(cell);
    }

}

createGrid();