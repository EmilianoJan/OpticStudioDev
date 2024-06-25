

document.addEventListener("DOMContentLoaded", function() {
    const container = document.querySelector('.img-container');
    const image = document.getElementById('zoom-image');
    let scale = 1;

    image.addEventListener('click', function() {
        if (scale === 1) {
            scale = 3; // Adjust the zoom level as needed
            image.style.transform = `scale(${scale})`;
            image.style.cursor = 'zoom-out';
        } else {
            scale = 1;
            image.style.transform = 'scale(1)';
            image.style.cursor = 'zoom-in';
        }
    });

    container.addEventListener('mousemove', function(e) {
        if (scale > 1) {
            const rect = container.getBoundingClientRect();
            const offsetX = ((e.clientX - rect.left) / rect.width) * 100;
            const offsetY = ((e.clientY - rect.top) / rect.height) * 100;
            image.style.transformOrigin = `${offsetX}% ${offsetY}%`;
        }
    });
});

function sortTable(columnIndex) {
    const table = document.querySelector('.styled-table tbody');
    const rows = Array.from(table.rows);

    rows.sort((rowA, rowB) => {
        const cellA = rowA.cells[columnIndex].innerText.toLowerCase();
        const cellB = rowB.cells[columnIndex].innerText.toLowerCase();

        return cellA.localeCompare(cellB);
    });

    rows.forEach(row => table.appendChild(row));
    
}

document.addEventListener("DOMContentLoaded", function() {
    const headerCell = document.querySelector('.styled-table thead tr th');
    headerCell.addEventListener('click', () => sortTable(0));
});