document.addEventListener('DOMContentLoaded', () => {
    // 1. Inject Header
    const headerPlaceholder = document.getElementById('header-placeholder');
    if (headerPlaceholder) {
        headerPlaceholder.outerHTML = `
        <header class="header" id="mainHeader">
            <div class="container nav-container">
                <a href="index.html" class="logo-link" id="logoLink">
                    <img src="assets/logo_simples.png" alt="Logo Espaço Redoma" class="logo-img" id="logoImage">
                </a>
                
                <button class="menu-toggle" id="menuToggle" aria-label="Abrir Menu">
                    <span></span>
                    <span></span>
                    <span></span>
                </button>
                
                <nav class="nav-menu" id="navMenu">
                    <li class="nav-item" id="menu-home"><a href="index.html" id="navHome">Início</a></li>
                    <li class="nav-item" id="menu-about"><a href="sobre.html" id="navAbout">Sobre Nós</a></li>
                    <li class="nav-item" id="menu-rooms"><a href="coworking.html" id="navRooms">Planos & Salas</a></li>
                    <li class="nav-item" id="menu-contact"><a href="contatos.html" id="navContact">Contato</a></li>
                </nav>
            </div>
        </header>
        `;
        
        // Highlight active page
        const currentPage = window.location.pathname.split('/').pop() || 'index.html';
        if (currentPage === 'index.html' || currentPage === '') {
            document.getElementById('menu-home')?.classList.add('active');
        } else if (currentPage === 'sobre.html') {
            document.getElementById('menu-about')?.classList.add('active');
        } else if (currentPage === 'coworking.html') {
            document.getElementById('menu-rooms')?.classList.add('active');
        } else if (currentPage === 'contatos.html') {
            document.getElementById('menu-contact')?.classList.add('active');
        }

        // Setup Header Behavior (mobile menu + scroll)
        const menuToggle = document.getElementById('menuToggle');
        const navMenu = document.getElementById('navMenu');
        const header = document.getElementById('mainHeader');

        if (menuToggle && navMenu) {
            menuToggle.addEventListener('click', () => {
                navMenu.classList.toggle('active');
                menuToggle.classList.toggle('open');
                const spans = menuToggle.getElementsByTagName('span');
                if (navMenu.classList.contains('active')) {
                    spans[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
                    spans[1].style.opacity = '0';
                    spans[2].style.transform = 'rotate(-45deg) translate(6px, -6px)';
                } else {
                    spans[0].style.transform = 'none';
                    spans[1].style.opacity = '1';
                    spans[2].style.transform = 'none';
                }
            });
        }

        if (header) {
            window.addEventListener('scroll', () => {
                if (window.scrollY > 50) {
                    header.classList.add('scrolled');
                } else {
                    header.classList.remove('scrolled');
                }
            });
        }
    }

    // 2. Inject Footer
    const footerPlaceholder = document.getElementById('footer-placeholder');
    if (footerPlaceholder) {
        footerPlaceholder.outerHTML = `
        <footer class="footer" id="mainFooter">
            <div class="container">
                <div class="footer-grid">
                    <div class="footer-brand" id="footerBrand">
                        <h3>Espaço Redoma</h3>
                        <p>Coworking exclusivo para psicólogos e terapeutas. Um ambiente projetado para fornecer segurança, aconchego e profissionalismo aos seus atendimentos.</p>
                        <div class="footer-socials" id="footerSocials">
                            <a href="https://www.instagram.com/espacoredoma.slz/" class="footer-social-link" target="_blank" aria-label="Instagram"><i class="fa-brands fa-instagram"></i></a>
                            <a href="https://www.facebook.com/espaco.redoma/" class="footer-social-link" target="_blank" aria-label="Facebook"><i class="fa-brands fa-facebook"></i></a>
                            <a href="#" class="footer-social-link" aria-label="LinkedIn"><i class="fa-brands fa-linkedin"></i></a>
                        </div>
                    </div>
                    <div class="footer-nav" id="footerNav">
                        <h4>Links Rápidos</h4>
                        <ul class="footer-links">
                            <li><a href="index.html">Início</a></li>
                            <li><a href="sobre.html">Sobre Nós</a></li>
                            <li><a href="coworking.html">Planos & Salas</a></li>
                            <li><a href="contatos.html">Contato</a></li>
                        </ul>
                    </div>
                    <div class="footer-contact" id="footerContact">
                        <h4>Contato</h4>
                        <ul class="footer-links" style="font-weight: 300;">
                            <li><i class="fa-solid fa-location-dot" style="margin-right: 8px; color: var(--color-secondary-light);"></i> Patio Jardins - sala 827, Av. Jerônimo de Albuquerque, 38 - Vinhais, São Luís/MA</li>
                            <li><i class="fa-solid fa-phone" style="margin-right: 8px; color: var(--color-secondary-light);"></i> (98) 98518-7196</li>
                            <li><i class="fa-solid fa-envelope" style="margin-right: 8px; color: var(--color-secondary-light);"></i> contato@espacoredomaslz.com.br</li>
                        </ul>
                    </div>
                </div>
                <div class="footer-bottom" id="footerBottom">
                    <p>&copy; 2026 Espaço Redoma. Todos os direitos reservados.</p>
                    <p>Desenvolvido com carinho para a Psicologia.</p>
                </div>
            </div>
        </footer>
        `;
    }

    // 3. Inject WhatsApp Floating Button (if placeholder exists)
    const whatsappPlaceholder = document.getElementById('whatsapp-placeholder');
    if (whatsappPlaceholder) {
        whatsappPlaceholder.outerHTML = `
        <a href="https://wa.me/5598985187196?text=Olá,%20gostaria%20de%20saber%20mais%20sobre%20as%20salas%20do%20Espaço%20Redoma!" class="whatsapp-float" target="_blank" id="whatsappFloat" aria-label="Fale conosco no WhatsApp">
            <i class="fa-brands fa-whatsapp"></i>
        </a>
        `;
    }
});
