window.onload = function () {
    $('#mission-warning').click(function () {
        var data = {
            message: 'No Mission Started By Flight Director'
            , timeout: 2000
        };
        document.querySelector('#no-mission-snackbar').MaterialSnackbar.showSnackbar(data);
    });
    $('#close-snackbar').click(function (){
        
    });
};