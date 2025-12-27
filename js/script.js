document.querySelectorAll('.case').forEach(cas => {
  const cover = cas.dataset.cover;
  const description = cas.dataset.description;
  const name = cas.dataset.name;
  const categories = cas.dataset.categories ? cas.dataset.categories.split(' ') : [];
  const href = cas.dataset.href;

  const catsHTML = categories.map(cat => `<div class="cat">${cat.trim()}</div>`).join('');

  cas.innerHTML = `
    <div class="case-d">
      <div class="case-t">
        <p class="g" style="display: none;">${name}</p>
        <h2>${description}</h2>
      </div>
      <div class="cats">
        ${catsHTML}
      </div>
    </div>
    <div class="case-img">
      <a href="${href}">
        <img src="${cover}" alt="Превью">
      </a>
    </div>
  `;
});

// Дублируем контент для бесшовности
const track = document.getElementById('marqueeTrack');
const content = track.innerHTML;
track.innerHTML = content + content;

document.querySelectorAll('textarea').forEach(textarea => {
  const resize = () => {
    textarea.style.height = 'auto';
    textarea.style.height = (textarea.scrollHeight - 30) + 'px';
  };

  textarea.addEventListener('input', resize);
  resize();
});