console.log('in js');

$(document).ready(onReady);

function onReady() {
    console.log('in jQ');
    $('#addSongBtn').on('click', addSong);
    appendAllRecords();
}

function appendAllRecords() {
    $.ajax({
        method: 'GET',
        url: '/record'
    })
        .then(function (response) {
            for (let i = 0; i < response.length; i++) {
                let formattedCost = formatNumberAsCurrency(response[i].cost);
                $('#recordList').append(`<tr>`)
                $('#recordList').append(`<td>${response[i].title}</td>`);
                $('#recordList').append(`<td>${response[i].year}</td>`);
                $('#recordList').append(`<td>${response[i].artist}</td>`);
                $('#recordList').append(`<td>${formattedCost}</td>`);
                $('#recordList').append(`</tr>`)
            }
            console.log(response);

        });
}

function addSong() {
    const newSong = {
        title: $('#titleIn').val(),
        year: $('#yearIn').val(),
        artist: $('#artistIn').val(),
        cost: $('#costIn').val()
    };
    clearInputs();
    $.ajax({
        method: 'POST',
        url: '/record',
        data: newSong
    })
    .then(function (response) {
        console.log (response);
        emptyTable();
        appendAllRecords();
    });
}

function emptyTable() {
    $('#recordList').empty();
}

function clearInputs () {
    $('input').val('');
}

// class NewSong {
//     title = $('#titleIn').val();
//     year = $('#yearIn').val();
//     artist = $('#artistIn').val();
//     cost = $('#costIn').val();
//     constructor(title, year, artist, cost) {
//         this.title = title;
//         this.year =year ;
//         this.artist =artist;
//         this.cost =cost ;
//     }// end constructor

// }// end NewSong class

function formatNumberAsCurrency(number) {
    return number.toLocaleString('en', { style: 'currency', currency: 'USD' });
}