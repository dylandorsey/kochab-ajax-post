console.log('in js');

$(document).ready(onReady);

function onReady () {
    console.log('in jQ');
    appendAllRecords();
}

function appendAllRecords() {
    $.ajax({
        type: 'GET',
        url: '/records'
    })
    .then( function (response){
        for (let i = 0; i < response.length; i++) {
            let formattedCost = formatNumberAsCurrency(response[i].cost);
            $('#recordList').append(`<li>${response[i].title}</li>`);
            $('#recordList').append(`<p>Year: ${response[i].year}</p>`);
            $('#recordList').append(`<p>Artist: ${response[i].artist}</p>`);
            $('#recordList').append(`<p>Cost: $${formattedCost}</p>`);
        }
        console.log(response);

    });
}

function formatNumberAsCurrency (number) {
    return number.toLocaleString('USD');
}