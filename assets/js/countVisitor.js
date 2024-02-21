function sendRequest() {
    var isVisited = localStorage.getItem("isVisited");
    if (isVisited === null) {
        // Define the URL
        const url = "https://school-manage-d1fd337d5df2.herokuapp.com/api/etqan_visitors/increment";

        // Use fetch API to call the URL
        fetch(url)
            .then(response => {
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                localStorage.setItem("isVisited", "true");
                return response.json();
            })
            .then(data => {
                console.log(data);
            })
            .catch(error => {
                console.error('There was a problem with your fetch operation:', error);
            });
    } else {
        console.log("already visited");
        const url = "https://school-manage-d1fd337d5df2.herokuapp.com/api/etqan_visitors";
        fetch(url)
            .then(response => {
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                return response.json();
            })
            .then(data => {
                console.log(data);
            })
            .catch(error => {
                console.error('There was a problem with your fetch operation:', error);
            });
    }
}



// on page load
window.addEventListener("load", function () {
    sendRequest();
})