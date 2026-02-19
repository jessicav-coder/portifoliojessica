let secoes = document.querySelectorAll(".secao");

console.log("Seções encontradas:", secoes);


// ===============================
// ANIMAÇÃO DE SCROLL
// ===============================
function animar() {

    let alturaTela = window.innerHeight * 0.85;

    console.log("Altura da tela para animação:", alturaTela);

    secoes.forEach((secao, index) => {

        let distancia = secao.getBoundingClientRect().top;

        console.log(`Seção ${index + 1} distância:`, distancia);

        if (distancia < alturaTela) {

            secao.classList.add("ativo");

            console.log(`Seção ${index + 1} ativada`);

        }

    });

}

window.addEventListener("scroll", animar);

console.log("Evento de scroll ativado");

animar();


// ===============================
// FORMULÁRIO
// ===============================
let form = document.getElementById("formulario");

console.log("Formulário encontrado:", form);

form.addEventListener("submit", function(e) {

    e.preventDefault();

    console.log("Formulário enviado");

    let nome = document.getElementById("nome").value;
    let email = document.getElementById("email").value;
    let mensagem = document.getElementById("mensagem").value;

    console.log("Nome:", nome);
    console.log("Email:", email);
    console.log("Mensagem:", mensagem);

    if (nome === "" || email === "" || mensagem === "") {

        console.log("Erro: campos vazios");

        alert("Por favor, preencha todos os campos!");
        return;
    }

    console.log("Dados validados com sucesso");

    alert("Obrigada pelo contato, " + nome + "!");

    form.reset();

    console.log("Formulário limpo");
});


// ===============================
// MENU ATIVO
// ===============================
let links = document.querySelectorAll(".menu-link");

console.log("Links do menu:", links);

links.forEach((link, index) => {

    link.addEventListener("click", function() {

        console.log(`Link ${index + 1} clicado`);

        links.forEach(item => {
            item.classList.remove("ativo");
        });

        this.classList.add("ativo");

        console.log("Classe 'ativo' aplicada ao link:", this);

    });

});