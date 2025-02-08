// Gestione dei dropdown
document.querySelectorAll(".dropbtn").forEach(button => {
    button.addEventListener("click", function () {
        const dropdown = this.parentElement;
        const allDropdowns = document.querySelectorAll(".dropdown");

        // Chiude tutti gli altri dropdown
        allDropdowns.forEach(d => {
            if (d !== dropdown) {
                d.classList.remove("open");
            }
        });

        // Alterna l'apertura/chiusura del dropdown cliccato
        dropdown.classList.toggle("open");
    });
});

// Funzione per aprire il modal e mostrare l'immagine cliccata
function openModal(imgElement) {
    const modal = document.getElementById("imageModal");
    const modalImg = document.getElementById("modalImg");

    modal.style.display = "flex"; // Mostra il modal
    modalImg.src = imgElement.src; // Usa la stessa immagine cliccata
}

// Funzione per chiudere il modal
function closeModal() {
    document.getElementById("imageModal").style.display = "none";
}

// Chiude il modal cliccando fuori dall'immagine
window.onclick = function(event) {
    const modal = document.getElementById("imageModal");
    if (event.target === modal) {
        modal.style.display = "none";
    }
};

// Funzione per aprire/chiudere i menu
function toggleMenu(menuId) {
    const menu = document.getElementById(menuId);
    
    // Verifica se il menu è già aperto
    if (menu.style.display === "block") {
        menu.style.display = "none"; // Chiude il menu
    } else {
        menu.style.display = "block"; // Apre il menu
    }
}

// Funzione per tornare indietro
function goBack() {
    window.history.back();
}

