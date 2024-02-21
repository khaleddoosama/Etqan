// function to store in local storage
function storeInLocalStorage() {
}

// function to send request
function sendRequest() {
    var isVisited = localStorage.getItem("isVisited");
    if (isVisited === null) {
        // send to this url 'https://school-manage-d1fd337d5df2.herokuapp.com/etqan_visitors/increment' type = 'get'
        fetch('https://school-manage-d1fd337d5df2.herokuapp.com/etqan_visitors/increment', {
            method: 'GET',
        }).then(response => {
            return response.json();
        })
    } else {
        console.log("already visited");
        console.log(isVisited);
    }
}

// on page load
window.onload = function() {
    sendRequest();
}