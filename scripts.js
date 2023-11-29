<<<<<<< HEAD
/*!* Start Bootstrap - Stylish Portfolio v6.0.6 (https://startbootstrap.com/theme/stylish-portfolio)
* Copyright 2013-2023 Start Bootstrap* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-stylish-portfolio/blob/master/LICENSE)
<script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
*/

// Js do quem somos

//
document.addEventListener("DOMContentLoaded", function () {
    var menuToggle = document.getElementById("menu-toggle");
    var sidebarWrapper = document.getElementById("sidebar-wrapper");

    menuToggle.addEventListener("mousehouver", function () {
        sidebarWrapper.style.left = sidebarWrapper.style.left === "0px" ? "-250px" : "0px";
    });

    // Close menu when clicking outside
    document.addEventListener("mousehouver", function (event) {
        if (!menuToggle.contains(event.target) && !sidebarWrapper.contains(event.target)) {
            sidebarWrapper.style.left = "-250px";
        }
    });

});

document.addEventListener('DOMContentLoaded', function () {
        const form = document.querySelector('form');

        form.addEventListener('submit', function (event) {
            event.preventDefault();

            // aqui seria colocado a lógica para enviar os dados do formulário para o servidor
            // Por exemplo, usando a função fetch() para uma API ou um backend

            // Exemplo de exibição de mensagem de sucesso
            const successMessage = document.createElement('div');
            successMessage.classList.add('alert', 'alert-success');
            successMessage.innerHTML = '<strong>Sucesso!</strong> Cadastro realizado com sucesso! Em breve entraremos em contato com você.';

            form.parentNode.insertBefore(successMessage, form.nextSibling);

            // Limpar os campos do formulário após o envio
            form.reset();
        });
});

function cadastrar() {
    // adicionar lógica para processar os dados do formulário e exibir a mensagem de sucesso.

    // Exemplo de exibição da mensagem (substitua isso pela sua lógica real):
    const mensagemDiv = document.getElementById('mensagem');
    const mensagemTexto = document.getElementById('mensagemTexto');

    mensagemTexto.innerText = 'Cadastro realizado com sucesso! Em breve entraremos em contato com você.';
    mensagemDiv.classList.remove('hidden');
}

window.onscroll = function () {
    scrollFunction();
  };
  
  function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      document.getElementById("scrollBtn").style.display = "block";
    } else {
      document.getElementById("scrollBtn").style.display = "none";
    }
  }
  
  function scrollToTop() {
    document.body.scrollTop = 0; // Para navegadores Safari
    document.documentElement.scrollTop = 0; // Para outros navegadores
  }
=======
/*!
* Start Bootstrap - Stylish Portfolio v6.0.6 (https://startbootstrap.com/theme/stylish-portfolio)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-stylish-portfolio/blob/master/LICENSE)
*/
window.addEventListener('DOMContentLoaded', event => {

    const sidebarWrapper = document.getElementById('sidebar-wrapper');
    let scrollToTopVisible = false;
    // Closes the sidebar menu
    const menuToggle = document.body.querySelector('.menu-toggle');
    menuToggle.addEventListener('click', event => {
        event.preventDefault();
        sidebarWrapper.classList.toggle('active');
        _toggleMenuIcon();
        menuToggle.classList.toggle('active');
    })

    // Closes responsive menu when a scroll trigger link is clicked
    var scrollTriggerList = [].slice.call(document.querySelectorAll('#sidebar-wrapper .js-scroll-trigger'));
    scrollTriggerList.map(scrollTrigger => {
        scrollTrigger.addEventListener('click', () => {
            sidebarWrapper.classList.remove('active');
            menuToggle.classList.remove('active');
            _toggleMenuIcon();
        })
    });

    function _toggleMenuIcon() {
        const menuToggleBars = document.body.querySelector('.menu-toggle > .fa-bars');
        const menuToggleTimes = document.body.querySelector('.menu-toggle > .fa-xmark');
        if (menuToggleBars) {
            menuToggleBars.classList.remove('fa-bars');
            menuToggleBars.classList.add('fa-xmark');
        }
        if (menuToggleTimes) {
            menuToggleTimes.classList.remove('fa-xmark');
            menuToggleTimes.classList.add('fa-bars');
        }
    }

    // Scroll to top button appear
    document.addEventListener('scroll', () => {
        const scrollToTop = document.body.querySelector('.scroll-to-top');
        if (document.documentElement.scrollTop > 100) {
            if (!scrollToTopVisible) {
                fadeIn(scrollToTop);
                scrollToTopVisible = true;
            }
        } else {
            if (scrollToTopVisible) {
                fadeOut(scrollToTop);
                scrollToTopVisible = false;
            }
        }
    })
})

function fadeOut(el) {
    el.style.opacity = 1;
    (function fade() {
        if ((el.style.opacity -= .1) < 0) {
            el.style.display = "none";
        } else {
            requestAnimationFrame(fade);
        }
    })();
};

function fadeIn(el, display) {
    el.style.opacity = 0;
    el.style.display = display || "block";
    (function fade() {
        var val = parseFloat(el.style.opacity);
        if (!((val += .1) > 1)) {
            el.style.opacity = val;
            requestAnimationFrame(fade);
        }
    })();
};
>>>>>>> ba85e5ac000f13b8104e1e002eae341ee34f2091
