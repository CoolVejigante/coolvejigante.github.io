

// 1. DICCIONARIO DE CONTENIDO - AQUÍ CAMBIAS LOS TEXTOS E IMÁGENES
const paginas = {
    "inicio": `
        <div class="fade-in">
            <h1>Cósmicamente Interesante</h1>
            <p>Nuesta misión es desarollar visualizaciones y softwares interactivos para ocio y futuros prospectos que construyen a nuevos caminos.</p>
         <div class="social-section">
                <span class="social-label">CONECTAR VÍA:</span>
                <div class="social-links">
                    <a href="https://www.artstation.com/theoldlegion" target="_blank" class="social-btn">Artstation</a>
                    <a href="https://github.com/CoolVejigante" target="_blank" class="social-btn">GitHub</a>
                    <a href="https://www.instagram.com/iguana3dart/?hl=es" class="social-btn">Instagram</a>
                </div>
        </div>
    `,
    "info": `
        <div class="fade-in">
            <h1>Sobre Nosotros</h1>
            <p>Iguana3D es un estudio independiende de un sola persona especializada en las siguentes areas.</p>
            <ul>
                <div class="project-card">
                <h3>Visualizacion Arquitectonica y Diseño Espacial </h3>
                <p>Diseños de maquetas y dioramas tridimensionales para una variedad de usos.</p>
            </div>
             <div class="project-card">
                <h3>Arte Conceptual</h3>
                <p>Conceptos de desarollo de software y entrenimiento para trabajos en el mundo real o para entrenimiento.</p>
            </div>
                <div class="project-card">
                <h3>Diseño de Assets</h3>
                <p>Assets opitmizados para cualquier proyecto de visualización, efectos especiales, o videojuegos.</p>
            </div>   
            </ul>
        </div>
    `,
    "showcase": `
        <div class="fade-in">
            <h1>Showcase de Proyectos</h1>
            <div class="project-card">
                <h3>Apartamento Modular Estilizado</h3>
                 <img src="sheipinsta.png" alt="IGUANA3D" width="500" height="auto">
            </div>
            <div class="project-card">
                <h3>PC con Realidad Virtual</h3>
                <img src="pctowrSPA.png" alt="IGUANA3D" width="500" height="auto">
            </div>
              <div class="project-card">
                <h3>Diorama Concepto</h3>
                <img src="dioramaspa.png" alt="IGUANA3D" width="500" height="auto">
            </div>
        </div>
    `
};

// 2. LÓGICA DEL ROUTER (No tocar a menos que sepas lo que haces)
const contentDiv = document.getElementById('app-content');
const buttons = document.querySelectorAll('.nav-btn');

function navegar(nombrePagina) {
    // Verificamos si la página existe en nuestro diccionario
    if (paginas[nombrePagina]) {
        // Inyectamos el HTML
        contentDiv.innerHTML = paginas[nombrePagina];
        
        // Guardamos el historial de navegación (opcional)
        window.history.pushState({}, "", `#${nombrePagina}`);
    }
}

// 3. LISTENERS (Escuchadores de clics)
buttons.forEach(btn => {
    btn.addEventListener('click', (e) => {
        const page = e.target.getAttribute('data-page');
        navegar(page);
    });
});

// 4. CARGA INICIAL
// Carga "Inicio" por defecto al abrir la página
window.addEventListener('DOMContentLoaded', () => {
    navegar('inicio');
});


