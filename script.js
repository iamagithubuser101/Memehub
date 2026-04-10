function likeMeme(button) {
    var likes = button.querySelector('span');
    likes.textContent = parseInt(likes.textContent) + 1;
}

const containers = document.querySelectorAll(".meme-container");

  containers.forEach(container => {
    const img = container.querySelector(".meme-img");
    const close = container.querySelector(".close");

    // Bild klicken → groß machen
    img.addEventListener("click", () => {
      // Optional: alle anderen schließen
      document.querySelectorAll(".meme-img").forEach(i => i.classList.remove("zoom"));
      document.querySelectorAll(".close").forEach(c => c.classList.remove("show"));

      img.classList.add("zoom");
      close.classList.add("show");
    });

    // Kreuz klicken → schließen
    close.addEventListener("click", (e) => {
      e.stopPropagation(); // verhindert, dass Bild direkt wieder aufgeht
      img.classList.remove("zoom");
      close.classList.remove("show");
    });
  });