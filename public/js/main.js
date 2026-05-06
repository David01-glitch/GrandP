document.addEventListener('click', (e) => {
  const btn = e.target.closest('.read-more');
  if (!btn) return;
  const card = btn.closest('.card');
  const expanded = card.querySelector('.expanded');
  if (!expanded) return;
  const isOpen = expanded.classList.toggle('open');
  btn.textContent = isOpen ? 'Show Less' : 'Read More';
});

const form = document.querySelector('form#contactForm');
if (form) {
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    document.getElementById('formMsg').textContent =
      'Thanks! Your message has been noted. We will reply to you soon.';
    form.reset();
  });
}
