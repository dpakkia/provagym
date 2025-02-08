function toggleFullScreen() {
    const container = document.getElementById("fullscreenContainer");
    const content = document.getElementById("contentContainer");

    if (container.style.display === "block") {
        closeFullScreen();
    } else {
        fetch("sport-gallery.html") // Assicurati che il file esista nella stessa cartella
            .then(response => {
                if (!response.ok) {
                    throw new Error("Errore nel caricamento della pagina");
                }
                return response.text();
            })
            .then(data => {
                content.innerHTML = data;
                container.style.display = "block";
                container.classList.add("fade-in");
            })
            .catch(error => {
                content.innerHTML = "<p style='color:red;'>Errore nel caricamento del contenuto.</p>";
                console.error("Errore:", error);
            });
    }
}

function closeFullScreen() {
    document.getElementById("fullscreenContainer").style.display = "none";
}
