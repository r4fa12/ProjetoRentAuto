$(document).ready(function(){
    $('#mobile_btn').on('click',function(){
        $('#mobile_menu').toggleClass('active');
        $('#mobile_btn').fin('i').toggleClass('fa-x');
    }) 

    const sections = $('section');
    const navItems = $('.nav-item')

    $(window).on('scroll',function(){
        const header = $('header');
        let activeSectionIndex = 0;
        const scrollPosition = $(window).scrollTop() - header.outerHeight();

        if(scrollPosition <= 0){
            header.css('box-shadow','none')
        }else{
            header.css('box-shadow','5px 1px 5px rgba(0,0,0,0.1)');
        }

        sections.each(function(i){
            const section = $(this);
            const sectionTop = section.offset().top - 96;
            const sectionBottom = sectionTop + section.outerHeight();

            if(scrollPosition >= sectionTop && scrollPosition < sectionBottom){
                activeSectionIndex = i;
                return false;
            }
        })
        navItems.removeClass('active');
        $(navItems[activeSectionIndex]).addClass('active');
    })

    ScrollReveal().reveal('#banner',{
        origin: 'right',
        duration: 2000,
        distance: '20%'
    })

    ScrollReveal().reveal('.shape',{
        origin: 'right',
        duration: 2000,
        distance: '20%'
    })

    ScrollReveal().reveal('#cta',{
        origin: 'left',
        duration: 2000,
        distance: '20%'
    })

    ScrollReveal().reveal('.item',{
        origin: 'left',
        duration: 2000,
        distance: '20%'
    })

    ScrollReveal().reveal('.section-title',{
        origin: 'left',
        duration: 2000,
        distance: '20%'
    })

    ScrollReveal().reveal('.section-subtitle',{
        origin: 'left',
        duration: 2000,
        distance: '20%'
    })

    // Referências aos elementos
    const modal = document.getElementById("reservationModal");
    const btn = document.getElementById("reserva");
    const span = document.querySelector(".close");

    // Abre o modal ao clicar no botão "Reserve Agora"
    btn.onclick = function() {
        modal.style.display = "block";
    };

    // Fecha o modal ao clicar no botão de fechar (X)
    span.onclick = function() {
        modal.style.display = "none";
    };

    // Fecha o modal ao clicar fora dele
    window.onclick = function(event) {

        if (event.target == modal) {

            modal.style.display = "none";
        }
    };

    // Lógica para capturar os dados do formulário
    document.getElementById("reservationForm").addEventListener("submit", function(event) {
        event.preventDefault(); // Impede o envio padrão do formulário

        const vehicleType = document.getElementById("vehicleType").value;
        const startDate = document.getElementById("startDate").value;
        const endDate = document.getElementById("endDate").value;

        console.log(`Veículo selecionado: ${vehicleType}`);
        console.log(`Data de início: ${startDate}`);
        console.log(`Data de fim: ${endDate}`);

        // Fechar o modal após a submissão
         modal.style.display = "none";
    });

    document.getElementById("reservationForm").addEventListener("submit", function(event) {
        event.preventDefault(); // Impede o envio padrão do formulário
      
        // Captura os valores selecionados
        const vehicleType = document.getElementById("vehicleType").value;
      
        // Redireciona para a página correspondente com base na categoria
        switch (vehicleType) {
          case "car":
            window.location.href = "reservaCarro.html";
            break;
          case "motorcycle":
            window.location.href = "reservaMoto.html";
            break;
          case "truck":
            window.location.href = "reservaCaminhao.html";
            break;
          default:
            alert("Por favor, selecione uma categoria válida.");
        }
      });


    // Referências aos elementos
    const verificationModal = document.getElementById("verificationModal"); // Modal
    const openVerificationModal = document.getElementById("openVerificationModal"); // Botão para abrir o modal
    const closeVerificationModal = document.querySelector(".close"); // Botão de fechar (X)
    const verificationForm = document.getElementById("verificationForm"); // Formulário
    const verificationMessage = document.getElementById("verificationMessage"); // Mensagem de verificação

    // Abre o modal ao clicar no botão com ícone
    openVerificationModal.onclick = function (event) {
        event.preventDefault(); // Impede o comportamento padrão do link
        verificationModal.style.display = "block"; // Exibe o modal
    };

    // Fecha o modal ao clicar no botão de fechar (X)
    closeVerificationModal.onclick = function () {
        verificationModal.style.display = "none"; // Oculta o modal
    };

    // Fecha o modal ao clicar fora dele
    window.onclick = function (event) {
        if (event.target === verificationModal) {
            verificationModal.style.display = "none"; // Oculta o modal
        }
    };

    // Lógica para exibir "Documento verificado"
    verificationForm.addEventListener("submit", function (event) {
        event.preventDefault(); // Impede o envio padrão do formulário

        // Exibe a mensagem de verificação
        verificationMessage.style.display = "block";

        // Opcionalmente, você pode limpar os campos do formulário
        verificationForm.reset();
    });

});