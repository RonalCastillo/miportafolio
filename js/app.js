document.addEventListener('DOMContentLoaded', function () {
    iniciarApp();
    darkMode();
    // Iniciar la animación
showNextText();

});
function scrollToTop() {
    $('body,html').animate({ scrollTop: '0px' }, 1000);
  }
  
  function scrollToBottom() {
    $('body,html').animate({ scrollTop: '1000px' }, 1000);
  }
  
  function setupScrollBehavior() {
    $('.ir-arriba').click(scrollToTop);
  
    $(window).scroll(function () {
      if ($(this).scrollTop() > 0) {
        $('.ir-arriba').slideDown(600);
      } else {
        $('.ir-arriba').slideUp(600);
      }
    });
  
    $('.ir-abajo').click(scrollToBottom);
  }
  
  // Llama a setupScrollBehavior() para configurar el comportamiento de desplazamiento.
  setupScrollBehavior();
  

function iniciarApp() {

    scrollNav();
}


function scrollNav() {

    const enlaces = document.querySelectorAll('.navegacion a')

    enlaces.forEach(enlace => {
        enlace.addEventListener('click', function (e) {

            e.preventDefault();
            const seccionScroll = e.target.attributes.href.value;
            const seccion = document.querySelector(seccionScroll);
            seccion.scrollIntoView({ behavior: "smooth" });

        })
    });

};

function darkMode() {
    $(function() {
        $(".toggle").on("click", function() {
            if ($(".item").hasClass("active")) {
                $(".item").removeClass("active");
                $(this).find("a").html("<i class='fa fa-bars'></i>");
            } else {
                $(".item").addClass("active");
                $(this).find("a").html("<i class='fa fa-times'></i>");
            }
        });
    });
    const prefiereDarkMode = window.matchMedia('(prefers-color-scheme: dark)');

    function activarModoOscuro() {
        document.body.classList.add('dark__mode');
        localStorage.setItem('modo-oscuro', 'true');
    }

    function desactivarModoOscuro() {
        document.body.classList.remove('dark__mode');
        localStorage.setItem('modo-oscuro', 'false');
    }

    // Verificar las preferencias del sistema
    if (prefiereDarkMode.matches) {
        activarModoOscuro();
    } else {
        desactivarModoOscuro();
    }

    // Detectar cambios en las preferencias del sistema
    prefiereDarkMode.addEventListener('change', function () {
        if (prefiereDarkMode.matches) {
            activarModoOscuro();
        } else {
            desactivarModoOscuro();
        }
    });

    const botonDarkMode = document.querySelector('#themeSwitcher');



    // Obtener el modo de color actual de localStorage
    if (localStorage.getItem('modo-oscuro') === 'true') {
        document.body.classList.add('dark__mode');
        botonDarkMode.checked = true; // Marcar el interruptor como activado
    } else {
        document.body.classList.remove('dark__mode');
        botonDarkMode.checked = false; // Desmarcar el interruptor como desactivado
    }

    // Cambiar el modo oscuro cuando se cambie el interruptor
    botonDarkMode.addEventListener('change', function () {
        document.body.classList.toggle('dark__mode');
        localStorage.setItem('modo-oscuro', botonDarkMode.checked ? 'true' : 'false');
    });
};

const textos = document.querySelectorAll('.text');
const titulo = document.querySelector('h3');
let currentIndex = 0;

function showNextText() {
  if (currentIndex < textos.length) {
    titulo.insertAdjacentElement('afterend', textos[currentIndex]);
    setTimeout(() => {
      textos[currentIndex].style.opacity = '1';
      textos[currentIndex].style.transform = 'translateY(0)';
      currentIndex++;
      setTimeout(() => {
        textos[currentIndex - 1].style.opacity = '0';
        textos[currentIndex - 1].style.transform = 'translateY(20px)';
        showNextText();
      }, 1000);
    }, 1000);
  } else {
    currentIndex = 0;
    textos.forEach((span) => {
      span.style.opacity = '0';
      span.style.transform = 'translateY(20px)';
    });
    setTimeout(() => {
      textos[currentIndex].style.opacity = '1';
      textos[currentIndex].style.transform = 'translateY(0)';
      currentIndex++;
      setTimeout(() => {
        textos[currentIndex - 1].style.opacity = '0';
        textos[currentIndex - 1].style.transform = 'translateY(20px)';
        showNextText();
      }, 1000);
    }, 1000);
  }
}

// Iniciar la animación











