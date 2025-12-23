function fetchLatestComic() {
    fetch("https://xkcd.now.sh/?comic=latest")
    .then(function (response){
        if(!response.ok) {
            throw new Error("Not Working");
        }
        return response.json();
    })
    .then(function (data) {
        console.log(data);

        const img = document.createElement("img");
        img.src = data.img;
        img.alt = data.alt || data.title;

        comicContainer.appendChild(img);
    })
    .catch(function (error){
        console.error(error);

        comicContainer.textContent =
        "Sorry, something went wrong while loading the comic.";
    });
}

fetchLatestComic();