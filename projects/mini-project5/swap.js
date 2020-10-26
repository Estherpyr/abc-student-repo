// swap images to NYU pics

var images = [
    "https://i.gifer.com/Orx.gif",
    "https://i.gifer.com/1FaO.gif",
    "https://i.gifer.com/OxhA.gif",
    "https://i.gifer.com/CVX.gif",
    "https://i.gifer.com/650.gif",
    "https://i.gifer.com/4Y8h.gif",
    "https://i.gifer.com/655.gif",
    "https://i.gifer.com/Orx.gif"
];

window.onload = replaceImages;

function replaceImages() {
    for (var i in document.images) {
        var targetImage = document.images[i];
        var randomImage = images[Math.floor(Math.random() * images.length)];
        var height = targetImage.height;
        var width = targetImage.width;

        targetImage.src = randomImage;
        targetImage.height = height;
        targetImage.width = width;
    }
}
