// Chemin du dossier contenant les images (relatif à la racine du projet)
const imageFolder = "images/";

// Liste des noms de fichiers d'images (à adapter selon vos fichiers)
const imageFiles = [
    "img1.jpg",
    "img2.jpg",
    "img3.jpg",
    "img4.jpg",
    "img5.jpg",
    "img6.jpg",
    "img7.jpg"
];

// Récupérer le conteneur d'images
const imageContainer = document.getElementById("image-container");

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

        // Ajouter un séparateur après chaque image
        const hrElement = document.createElement("hr");
        imageContainer.appendChild(hrElement);
    });
}

// Appeler la fonction pour afficher les images
displayImages();