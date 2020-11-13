fetch("https://icanhazdadjoke.com", {
        headers: {
            "accept": "application/json"
        }
    })
    .then(function (response) {
        console.log(response);
        if (response.status == 200) {
            return response.json();
        } else {
            throw new Error("Server is not responding properly")
        }
    })
    .then(function (data) {
        console.log(data);
        var p = document.createElement('p');
        p.innerText = data.joke;
        document.body.appendChild(p);

    })
    .catch(function (error) {
        console.error(error);
        var p = document.createElement('p');
        p.innerText = "Noget gik galt Henning"
        document.body.appendChild(p);
    });