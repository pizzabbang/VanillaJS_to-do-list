const images = ["alps.jpg", "abstract.jpg", "sea.jpg"];

const chosenImage = images[Math.floor(Math.random() * images.length)];

const bgImage = document.createElement("img");
bgImage.className = "backgroundImg";

bgImage.src = `img/${chosenImage}`;

document.body.prepend(bgImage);
