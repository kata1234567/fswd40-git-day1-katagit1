/*function createTable() {
    rn = window.prompt("Input number of rows", 1);
    cn = window.prompt("Input number of columns", 1);

    for (var r = 0; r < parseInt(rn, 10); r++) {
        var x = document.getElementById('myTable').insertRow(r);
        for (var c = 0; c < parseInt(cn, 10); c++) {
            var y = x.insertCell(c);
            y.innerHTML = "Row-" + r + " Column-" + c;
        }
    }
}

*/


function createTable() {
    var row = parseInt(prompt("Enter number of rows"), 10),
        column = parseInt(prompt("Enter number of columns"), 10);

    for (var i = 0; i < row; i++) {
        var newRow = document.getElementById("myTable").insertRow(-1);
        for (var j = 0; j < column; j++)
            newRow.insertCell(j).innerHTML = "Row-" + i + "Column-" + j;
    }
}
