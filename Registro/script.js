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
    const roleSelect = document.getElementById('role');
    const extraFieldContainer = document.getElementById('extraFieldContainer');

    // Define os campos extras para cada perfil
    const extraFields = {
        usuario: {
            inputType: 'date',
            name: 'dataNascimento',
            placeholder: 'Data de nascimento'
        },
        professor: {
            inputType: 'tel',
            name: 'telefone',
            placeholder: 'Telefone'
        },
        curador: {
            inputType: 'tel',
            name: 'telefone',
            placeholder: 'Telefone'
        }
    };

    // Evento de mudança no select de perfil
    roleSelect.addEventListener('change', () => {
        const selectedRole = roleSelect.value;

        // Limpa o campo extra anterior, se houver
        extraFieldContainer.innerHTML = '';

        // Adiciona o campo extra correspondente ao perfil selecionado
        if (extraFields[selectedRole]) {
            const fieldData = extraFields[selectedRole];
            
            const input = document.createElement('input');
            input.setAttribute('type', fieldData.inputType);
            input.setAttribute('id', fieldData.name);
            input.setAttribute('name', fieldData.name);
            input.setAttribute('placeholder', fieldData.placeholder);
            input.required = true;

            extraFieldContainer.appendChild(input);
        }
    });
});
