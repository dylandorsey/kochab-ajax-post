console.log('in js');

$(document).ready(onReady);

function onReady () {
    console.log('in jQ');
    appendAllRecords();
}

function appendAllRecords() {
    $.ajax({
        method: 'GET',
        url: '/records'
    })
    .then( function (response){
        for (let i = 0; i < response.length; i++) {
            let formattedCost = formatNumberAsCurrency(response[i].cost);
            $('#recordList').append(`<tr>`)
            $('#recordList').append(`<td>${response[i].title}</li>`);
            $('#recordList').append(`<td>${response[i].year}</p>`);
            $('#recordList').append(`<td>${response[i].artist}</p>`);
            $('#recordList').append(`<td>${formattedCost}</p>`);
            $('#recordList').append(`</td>`)
        }
        console.log(response);

    });
}

function formatNumberAsCurrency (number) {
    return number.toLocaleString('en', { style: 'currency', currency: 'USD'}).slice(0,-3);
}