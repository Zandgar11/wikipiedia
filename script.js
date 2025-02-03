// Chemin du dossier contenant les images (relatif à la racine du projet)
const imageFolder = "images/";

// Liste des noms de fichiers d'images
const imageFiles = [
    "img1.jpg",
    "img2.jpg",
    "img3.jpg",
    "img4.jpg",
    "img5.jpg",
    "img6.jpg"
];

// Récupérer le conteneur d'images
const imageContainer = document.getElementById("image-container");

// Index de l'image actuellement affichée
let currentIndex = 0;

// Fonction pour afficher les images
function displayImages() {
    imageFiles.forEach((file) => {
        // Créer un élément image
        const imgElement = document.createElement("img");
        imgElement.src = imageFolder + file; // Chemin complet de l'image
        imgElement.alt = "Image de pied"; // Texte alternatif
        imgElement.classList.add("gallery-image"); // Ajouter une classe pour le style

        // Ajouter l'image au conteneur
        imageContainer.appendChild(imgElement);
    });
}

// Fonction pour afficher l'image suivante
function nextImage() {
    if (currentIndex < imageFiles.length - 1) {
        currentIndex++;
    } else {
        currentIndex = 0; // Revenir à la première image
    }
    updateCarousel();
}

// Fonction pour afficher l'image précédente
function prevImage() {
    if (currentIndex > 0) {
        currentIndex--;
    } else {
        currentIndex = imageFiles.length - 1; // Aller à la dernière image
    }
    updateCarousel();
}

// Fonction pour mettre à jour le carrousel
function updateCarousel() {
    const offset = -currentIndex * 100; // Calculer le décalage en pourcentage
    imageContainer.style.transform = `translateX(${offset}%)`;
}

// Afficher les images au chargement de la page
displayImages();