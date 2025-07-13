const btn_resultado_soma = document.querySelector('#resultado-soma');
const button_soma = document.querySelector('#button-sum');
const teste_desfaio = document.querySelector('#teste-desafio');
const resposta_usuario = document.querySelector('#resposta_usuario');

// FORMULÁRIO - SOMA E RESULTADO
button_soma.addEventListener('click', function(event){
    event.preventDefault(); // Vai impedir que a página recarregue.
    console.log("Botão clicaco")

    const resultado = 427 + 628;
    const btn_soma_value = btn_resultado_soma.value; // Retorna String.
    const number_convertido = parseInt(btn_soma_value );

    // Fazer a resposta desaparecer quando clica no *Resultado.
    btn_resultado_soma.addEventListener('click', function(){
            resposta_usuario.style.display = 'none';
    })

    // Lógica
    if(resultado === number_convertido){
        resposta_usuario.style.display = 'block';
        resposta_usuario.style.color = '#228B22';
        resposta_usuario.innerHTML = "Você acertou!";
    } else{
        resposta_usuario.style.display = 'block';
        resposta_usuario.style.color = 'red';
        resposta_usuario.innerHTML = "Você errou! Tente novamente!";
    }
})


// TENTATIVA DE MENU-1
const menu = document.querySelector("#nav-mobile");
const nav_categories = document.querySelector("#nav-mobile-categories");
const img = document.querySelector("#img-principal");
menu.addEventListener('click', function(){
    const menu_mobile = nav_categories.style.display === 'block';

    if ( menu_mobile) {
        nav_categories.style.display = 'none';  // Fecha se estiver visível
        img.style.display = 'block'
    } 
    else {
        nav_categories.style.display = 'block'; // Abre se estiver escondido
        img.style.display = 'none'
    }
});

// Esconde automaticamente se a tela for maior que 825px
window.addEventListener("resize", function () { // Resize muito útil caso queria comportamentos diferentes quando a tela muda de tamanho.
  if (window.innerWidth > 825) {
    nav_categories.style.display = "none";
    img.style.display = 'block'
  }
});



