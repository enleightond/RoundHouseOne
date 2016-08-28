//creating the table to populate with data
function columnHeaders(arr) {
    var columnSet = [];
    var headerTr$ = $('<tr/>');

    for (var i = 0; i < arr.length; i++) {
        var row = arr[i];
        for (var key in row) {
            if ($.inArray(key, columnSet) == -1) {
                columnSet.push(key);
                headerTr$.append($('<th/>').html(key));
            }
        }
    }
    $("#jsonTable").append(headerTr$);

    return columnSet;
};

// grabbing the JSON data with jquery
$.getJSON("convertcsv.json", function (data) {
    var columns = columnHeaders(data);

    for (var i = 0; i < data.length; i++) {
        var row$ = $('<tr/>');
        for (var j = 0; j < columns.length; j++) {
            var cellValue = data[i][columns[j]];

            if (cellValue == null) { cellValue = ""; }

            row$.append($('<td/>').html(cellValue));
        }
        $("#jsonTable").append(row$);
    }
});