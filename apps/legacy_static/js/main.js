// Diseñado y desarrollado por ORBEN

document.addEventListener('DOMContentLoaded', () => {

    // --- Efecto Parallax del Header ---
    const parallaxHeader = document.querySelector('.parallax-header');
    if (parallaxHeader) {
        document.addEventListener('scroll', () => {
            let offset = window.pageYOffset;
            parallaxHeader.style.backgroundPositionY = offset * 0.7 + 'px';
        });
    }

    // --- Lógica de la Barra de Navegación ---
    const nav = document.querySelector('.main-nav');
    if (nav) {
        document.addEventListener('scroll', () => {
            if (window.scrollY > window.innerHeight * 0.9) { // Aparece después de scrollear el 90% del header
                nav.classList.add('scrolled');
            } else {
                nav.classList.remove('scrolled');
            }
        });
    }

    // --- Animación de Scroll para Secciones (Intersection Observer) ---
    const sections = document.querySelectorAll('.content-section');
    
    // Ocultar secciones inicialmente para que la animación funcione
    sections.forEach(section => {
        section.classList.add('hidden-section');
    });

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.remove('hidden-section');
                // Opcional: dejar de observar el elemento una vez que es visible
                // observer.unobserve(entry.target);
            }
        });
    }, {
        rootMargin: '0px',
        threshold: 0.15 // La sección se revela cuando el 15% es visible
    });

    sections.forEach(section => {
        observer.observe(section);
    });

    // --- Efecto Parallax para Texto en Secciones ---
    document.addEventListener('scroll', () => {
        const parallaxElements = document.querySelectorAll('.parallax-text');
        parallaxElements.forEach(el => {
            const speed = el.getAttribute('data-speed') || 0.1;
            const section = el.closest('.content-section');
            if (section) {
                const rect = section.getBoundingClientRect();
                // Aplicar el efecto solo cuando la sección está en el viewport
                if (rect.top < window.innerHeight && rect.bottom >= 0) {
                    const yPos = (rect.top * speed) * 1.8;
                    el.style.transform = `translateY(${yPos}px)`;
                }
            }
        });
    });

});
