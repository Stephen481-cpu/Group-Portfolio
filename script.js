// ===== Lightbox for Images =====
const galleryImages = document.querySelectorAll('.member img, .project img');
const lightbox = document.createElement('div');
lightbox.id = 'lightbox';
document.body.appendChild(lightbox);

galleryImages.forEach(img => {
  img.addEventListener('click', () => {
    lightbox.classList.add('active');
    const lightboxImg = document.createElement('img');
    lightboxImg.src = img.src;
    while (lightbox.firstChild) {
      lightbox.removeChild(lightbox.firstChild);
    }
    lightbox.appendChild(lightboxImg);
  });
});

lightbox.addEventListener('click', () => {
  lightbox.classList.remove('active');
});

// ===== Smooth Scroll for Navigation =====
document.querySelectorAll('nav ul li a').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    if (this.getAttribute('href').startsWith('#')) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    }
  });
});

// ===== Dynamic Footer Year =====
const footer = document.querySelector('footer p');
if (footer) {
  const year = new Date().getFullYear();
  footer.innerHTML = `&copy; ${year} Group Portfolio | Designed by Our Team`;
}

// ===== Optional: Project Filtering =====
// Example: Add buttons with data-category="design" etc.
const filterButtons = document.querySelectorAll('.filter-btn');
const projects = document.querySelectorAll('.project');

filterButtons.forEach(button => {
  button.addEventListener('click', () => {
    const category = button.getAttribute('data-category');
    projects.forEach(project => {
      if (category === 'all' || project.classList.contains(category)) {
        project.style.display = 'block';
      } else {
        project.style.display = 'none';
      }
    });
  });
});