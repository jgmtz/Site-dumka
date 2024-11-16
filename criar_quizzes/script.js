document.getElementById("menuButton").addEventListener("click", function() {
    this.classList.toggle("active");
    document.getElementById("menuList").classList.toggle("active");
});

function toggleTheme() {
    document.body.classList.toggle("White-mode");
    document.querySelector(".nav_bar").classList.toggle("White-mode");
    document.getElementById("menuList").classList.toggle("White-mode");
    document.querySelectorAll(".menu_line").forEach(line => line.classList.toggle("White-mode"));
    document.querySelector(".button_change").classList.toggle("White-mode");
    document.querySelectorAll("#menuList li a").forEach(link => link.classList.toggle("White-mode"));
    document.querySelectorAll(".h1_titulo, .nav_body p").forEach(element => {
        element.classList.toggle("White-mode");
    
    });
    document.querySelectorAll(".h1_titulo").classList.toggle("White-mode")
}
document.addEventListener('DOMContentLoaded', () => {
    const imageInput = document.getElementById('image');
    const preview = document.getElementById('preview');

    imageInput.addEventListener('change', (event) => {
        const file = event.target.files[0];

        if (file) {
            const reader = new FileReader();
            reader.onload = (e) => {
                preview.src = e.target.result;
                preview.style.display = 'block';
            };
            reader.readAsDataURL(file);
        } else {
            preview.style.display = 'none';
            preview.src = '';
        }
    });
});
document.querySelector('.button_registro2').addEventListener('click', (e) => {
    e.preventDefault();

    // Captura os valores dos inputs
    const pergunta = document.querySelector('.textarea_pergunta').value;
    const alternativas = Array.from(document.querySelectorAll('.input_alternativa')).map(input => input.value);
    const resposta = Array.from(document.querySelectorAll('input[type="radio"]')).find(radio => radio.checked);

    if (!pergunta || alternativas.some(alt => !alt) || !resposta) {
        alert('Por favor, preencha todos os campos e selecione a resposta correta!');
        return;
    }

    alert('Quizz enviado com sucesso!');
});
