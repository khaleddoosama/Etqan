// function to store in local storage
function storeInLocalStorage() {
}

// function to send request
function sendRequest() {
    var isVisited = localStorage.getItem("isVisited");
    if (isVisited === null) {
        // send to this url 'https://school-manage-d1fd337d5df2.herokuapp.com/etqan_visitors/increment'
        $.ajax({
            url: 'https://school-manage-d1fd337d5df2.herokuapp.com/etqan_visitors/increment',
            type: 'GET',
            success: function (response) {
                console.log(response);
                localStorage.setItem("isVisited", 1);
            },
            error: function (error) {
                console.log(error);
            }
        });
    } else {
        console.log("already visited");
        console.log(isVisited);
    }
}

// on page load
$(document).ready(function () {
    sendRequest();
});