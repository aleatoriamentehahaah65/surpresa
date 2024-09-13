const toggleThemeButton = document.getElementById('toggleTheme');
const startButton = document.getElementById('startButton');
const gallerySection = document.getElementById('gallerySection');
const endMessage = document.getElementById('endMessage');

// Alternância de tema
toggleThemeButton.addEventListener('click', function() {
    document.body.classList.toggle('dark-mode');
    toggleThemeButton.classList.toggle('dark-mode');
    document.querySelectorAll('.next-button').forEach(button => {
        button.classList.toggle('dark-mode');
    });

    if (document.body.classList.contains('dark-mode')) {
        toggleThemeButton.textContent = '☀️';
    } else {
        toggleThemeButton.textContent = '🌙';
    }
});

// Começar a jornada
startButton.addEventListener('click', function() {
    startButton.style.display = 'none'; // Esconder o botão "Começar"
    gallerySection.style.display = 'block'; // Mostrar a galeria
    showImage('image1'); // Mostrar a primeira imagem
});

// Mostrar a imagem atual e esconder as outras
function showImage(imageId) {
    const allImages = document.querySelectorAll('.image-container');
    allImages.forEach(img => img.style.display = 'none');
    document.getElementById(imageId).style.display = 'block';
}

// Desbloquear imagens ao clicar no botão "Próxima"
document.querySelectorAll('.next-button').forEach(button => {
    button.addEventListener('click', function() {
        const nextImageId = this.getAttribute('data-next');
        showImage(nextImageId);

        // Se a próxima imagem for a mensagem final
        if (nextImageId === 'endMessage') {
            gallerySection.style.display = 'none'; // Esconder a galeria
            endMessage.style.display = 'block'; // Mostrar mensagem final
        }
    });
});



