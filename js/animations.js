$(document).ready(function () {

    // Animación de entrada para los elementos
    function animateOnScroll() {
        $('.faq-item').each(function (index) {
            const $this = $(this);
            setTimeout(function () {
                $this.addClass('animate-in');
            }, index * 100);
        });
    }

    // Efectos de hover mejorados
    $('.question').hover(
        function () {
            $(this).find('.toggle-icon').addClass('hover-effect');
            $(this).addClass('question-hover');
        },
        function () {
            $(this).find('.toggle-icon').removeClass('hover-effect');
            $(this).removeClass('question-hover');
        }
    );

    // Animación suave para el toggle
    $('.toggle').change(function () {
        const $question = $(this).next('.question');
        const $answer = $question.next('.answer');
        const $icon = $question.find('.toggle-icon');

        if (this.checked) {
            // Abrir
            $answer.slideDown(400, 'easeOutQuart');
            $icon.addClass('rotated');
            $question.addClass('active');

            // Cerrar otros FAQs
            $('.toggle').not(this).prop('checked', false);
            $('.toggle').not(this).next('.question').removeClass('active')
                .find('.toggle-icon').removeClass('rotated');
            $('.toggle').not(this).next('.question').next('.answer').slideUp(300);

        } else {
            // Cerrar
            $answer.slideUp(300);
            $icon.removeClass('rotated');
            $question.removeClass('active');
        }
    });

    // Efecto de pulso en el icono principal
    function pulseIcon() {
        $('.icon-container').addClass('pulse');
        setTimeout(function () {
            $('.icon-container').removeClass('pulse');
        }, 1000);
    }

    // Pulso cada 5 segundos
    setInterval(pulseIcon, 5000);

    // Animación de entrada del footer
    function animateFooter() {
        $('.footer').addClass('footer-animate');
    }

    setTimeout(animateFooter, 1000);

    // Efectos de partículas flotantes (opcional)
    function createFloatingParticles() {
        for (let i = 0; i < 5; i++) {
            const particle = $('<div class="floating-particle"></div>');
            $('body').append(particle);

            particle.css({
                position: 'fixed',
                width: '4px',
                height: '4px',
                background: 'var(--primary-color)',
                borderRadius: '50%',
                opacity: '0.3',
                pointerEvents: 'none',
                left: Math.random() * window.innerWidth + 'px',
                top: window.innerHeight + 'px',
                zIndex: '-1'
            });

            particle.animate({
                top: '-10px',
                left: '+=' + (Math.random() * 200 - 100) + 'px'
            }, {
                duration: Math.random() * 3000 + 2000,
                easing: 'linear',
                complete: function () {
                    particle.remove();
                }
            });
        }
    }

    // Crear partículas cada 3 segundos
    setInterval(createFloatingParticles, 3000);

    // Smooth scroll para enlaces internos
    $('a[href^="#"]').click(function (e) {
        e.preventDefault();
        const target = $($(this).attr('href'));
        if (target.length) {
            $('html, body').animate({
                scrollTop: target.offset().top - 100
            }, 600, 'easeInOutQuart');
        }
    });

    // Efecto de typing para el título
    function typeWriter(element, text, speed = 100) {
        let i = 0;
        element.text('');

        function type() {
            if (i < text.length) {
                element.text(element.text() + text.charAt(i));
                i++;
                setTimeout(type, speed);
            }
        }

        type();
    }

    // Aplicar efecto de typing al título principal
    const titleText = $('.main-title').text();
    setTimeout(function () {
        typeWriter($('.main-title'), titleText, 80);
    }, 500);

    // Gestión de estado activo para FAQs
    $('.faq-item').each(function (index) {
        $(this).attr('data-index', index);
    });

    // Animación de entrada escalonada
    $('.faq-item').each(function (index) {
        $(this).css({
            'animation-delay': (index * 0.1) + 's'
        });
    });

    // Efecto parallax suave en el scroll
    $(window).scroll(function () {
        const scrolled = $(this).scrollTop();
        const parallax = $('.card-main');
        const speed = scrolled * 0.5;

        parallax.css('transform', 'translateY(' + speed + 'px)');
    });

    // Iniciializar animaciones
    animateOnScroll();
});

// Estilos CSS adicionales para las animaciones
const additionalStyles = `
<style>
.hover-effect {
    animation: bounce 0.6s ease-in-out;
}

.pulse {
    animation: pulse 1s ease-in-out;
}

.footer-animate {
    animation: fadeInUp 0.8s ease-out;
}

.question-hover {
    transform: scale(1.02);
}

.rotated {
    transform: rotate(180deg) !important;
}

@keyframes bounce {
    0%, 20%, 60%, 100% { transform: translateY(0) rotate(180deg); }
    40% { transform: translateY(-10px) rotate(180deg); }
    80% { transform: translateY(-5px) rotate(180deg); }
}

@keyframes pulse {
    0% { transform: scale(1); }
    50% { transform: scale(1.1); }
    100% { transform: scale(1); }
}

.floating-particle {
    animation: float 2s ease-in-out infinite;
}

@keyframes float {
    0%, 100% { transform: translateY(0px); }
    50% { transform: translateY(-20px); }
}
</style>
`;

$('head').append(additionalStyles);

