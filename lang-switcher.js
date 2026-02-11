// Add language toggle to navbar and update links based on current language
(function() {
  // Check if current page is French
  const isFrench = window.location.pathname.includes('_fr.html');

  // Determine current page type
  let currentPage = 'index';
  if (window.location.pathname.includes('cv')) {
    currentPage = 'cv';
  } else if (window.location.pathname.includes('research')) {
    currentPage = 'research';
  } else if (window.location.pathname.includes('teaching')) {
    currentPage = 'teaching';
  }

  // Create language toggle HTML
  const langToggleHTML = `
    <div class="language-toggle">
      <div class="lang-switch">
        <a href="${currentPage}.html" class="${isFrench ? 'inactive' : 'active'}">EN</a><a href="${currentPage}_fr.html" class="${isFrench ? 'active' : 'inactive'}">FR</a>
      </div>
    </div>
  `;

  // Add language toggle to navbar on page load
  window.addEventListener('DOMContentLoaded', function() {
    const navbar = document.querySelector('.navbar-nav');
    if (navbar) {
      navbar.insertAdjacentHTML('afterend', langToggleHTML);
    }
  });

  // Always update navbar links based on current language
  window.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('.navbar-nav .nav-link');

    navLinks.forEach(link => {
      const href = link.getAttribute('href');
      const text = link.textContent.trim();

      if (isFrench) {
        // Map English pages to French pages
        if (href === 'index.qmd' || href === 'index.html' || text === 'Home') {
          link.setAttribute('href', 'index_fr.html');
          link.textContent = 'Accueil';
        } else if (href === 'cv.qmd' || href === 'cv.html' || text === 'CV') {
          link.setAttribute('href', 'cv_fr.html');
          link.textContent = 'CV';
        } else if (href === 'research.qmd' || href === 'research.html' || text === 'Research') {
          link.setAttribute('href', 'research_fr.html');
          link.textContent = 'Recherche';
        } else if (href === 'teaching.qmd' || href === 'teaching.html' || text === 'Teaching') {
          link.setAttribute('href', 'teaching_fr.html');
          link.textContent = 'Enseignement';
        }
      } else {
        // Ensure English pages link to English versions
        if (href === 'index.qmd' || href === 'index.html' || text === 'Accueil') {
          link.setAttribute('href', 'index.html');
          link.textContent = 'Home';
        } else if (href === 'cv.qmd' || href === 'cv.html' || text === 'CV') {
          link.setAttribute('href', 'cv.html');
          link.textContent = 'CV';
        } else if (href === 'research.qmd' || href === 'research.html' || text === 'Recherche') {
          link.setAttribute('href', 'research.html');
          link.textContent = 'Research';
        } else if (href === 'teaching.qmd' || href === 'teaching.html' || text === 'Enseignement') {
          link.setAttribute('href', 'teaching.html');
          link.textContent = 'Teaching';
        }
      }
    });
  });
})();
