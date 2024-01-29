alert("Este não é um site oficial, apenas uma copia feita como objeto de estudo");
/* 
Objetivo 1 - Quando o usuário clicar no botao de selecção de plataformas deve abrir as caixas com os botões de seleção de plataforma.
    Passo 1 - Pegar o botão de seleção de plataforma no JS para poder verificar quando o usuário clicar em cima dele.
    Passo 2 - Pegar o elemento do conteúdo pque precisa ser mostrado.
    Passo 3 - Pegar o clique do usuário no JS.
    Passo 4 - Quando o usuário clicar, adicionar a classe ativo na listagme da plataforma dentro do botão para que o conteúdo apareça.

Objetivo 2 - Caso a lista de botões de plataformas já esteja aparecendo o usuário no botão de fechar, o conteúdo deve ser escondido.
    Passo 1 - Verificar se o botão já está aberto, se sim, deveremos remover a classe ativa para que ele esconda o conteúdo novamente.
     */

const botao = document.querySelector(".btn-plataforma");


const elementoPlataformas = document.querySelector(".btn-plataforma .plataformas");


botao.addEventListener("click", () => {
    elementoPlataformas.classList.toggle("ativo");
    });