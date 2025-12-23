const comicContainer = document.getElementById("container");

function fetchLatestComic() {
    fetch("https://xkcd.now.sh/?comic=latest")
    .then(function (response){
        if(!response.ok) {
            throw new Error("Network response was not OK");
        }
        return response.json();
    })
    .then(function (data) {
        console.log(data);

        const img = document.createElement("img");
        img.src = data.img;
        img.alt = data.alt || data.title;
        img.width = data.width;
        img.height = data.height;

        comicContainer.innerHTML = "";
        comicContainer.appendChild(img);
    })
    .catch(function (error){
        console.error(error);

        comicContainer.textContent =
        "Sorry, something went wrong while loading the comic.";
    });
}

fetchLatestComic();