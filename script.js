function likeMeme(button) {
    var likes = button.querySelector('span');
    likes.textContent = parseInt(likes.textContent) + 1;
}

function uploadMeme(event) {
    const file = event.target.files[0];
    if (!file) return;

    const container = document.querySelector(".memes");
    var newMeme = document.createElement("div");
    newMeme.classList.add("meme-container");

    var img = document.createElement("img");
    img.classList.add("meme-img");
    img.src = URL.createObjectURL(file);

    var close = document.createElement("span");
    close.classList.add("close");
    close.innerHTML = "&times;";

    var likeButton = document.createElement("button");
    likeButton.classList.add("lk_btn");
    likeButton.innerHTML = "&#128077<span>0</span>";
    likeButton.addEventListener("click", () => likeMeme(likeButton));

    newMeme.appendChild(img);
    newMeme.appendChild(close);
    newMeme.appendChild(likeButton);
    container.appendChild(newMeme);
}

alert("Pleas note that this website is currently under construction");

document.addEventListener("click", (e) => {
  const img = e.target.closest(".meme-img");

  // Bild geklickt → Overlay öffnen
  if (img) {
    const overlay = document.createElement("div");
    overlay.classList.add("overlay");

    const bigImg = document.createElement("img");
    bigImg.src = img.src;

    const close = document.createElement("span");
    close.classList.add("close");
    close.innerHTML = "&times;";

    overlay.appendChild(bigImg);
    overlay.appendChild(close);
    document.body.appendChild(overlay);

    // schließen bei Klick auf ✖
    close.addEventListener("click", () => {
      overlay.remove();
    });

    // schließen bei Klick auf Hintergrund
    overlay.addEventListener("click", (event) => {
      if (event.target === overlay) {
        overlay.remove();
      }
    });
  }
});