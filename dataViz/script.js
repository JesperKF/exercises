document.addEventListener("DOMContentLoaded", function() {
    const data = {
        id: "41967",
        inQueue: "9",
        loggedAt: "2025-02-13 14:03:34",
        personel: ["Peter", "Jonas", "Dannie"],
        name: "FooBar"
    };

    function fetchData() {
        fetch('https://kea-alt-del.dk/kata-distortion/', {
            method: 'POST',
            body: JSON.stringify(data),
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok ' + response.statusText);
            }
            return response.json();
        })
        .then(data => {
            document.getElementById('inQueue').textContent = data.inQueue;
        })
        .catch((error) => {
            console.error('Error:', error);
        });
    }

    fetchData();
    setInterval(fetchData, 10000);
});