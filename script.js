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

const containers = document.querySelectorAll(".meme-container");

  containers.forEach(container => {
    const img = container.querySelector(".meme-img");
    const close = container.querySelector(".close");
    
    img.addEventListener("click", () => {
      document.querySelectorAll(".meme-img").forEach(i => i.classList.remove("zoom"));
      document.querySelectorAll(".close").forEach(c => c.classList.remove("show"));

      img.classList.add("zoom");
      close.classList.add("show");
    });

    close.addEventListener("click", (e) => {
      e.stopPropagation();
      img.classList.remove("zoom");
      close.classList.remove("show");
    });
  });