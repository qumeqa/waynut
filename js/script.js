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

//форма заявок
document.getElementById('name').addEventListener('input', function () {
  this.value = this.value.replace(/[^А-Яа-яA-Za-z\s]/g, '');
});

document.getElementById('phone').addEventListener('input', function () {
  this.value = this.value.replace(/[^0-9+\-\s()]/g, '');
});

const phoneInput = document.getElementById('phone');

phoneInput.addEventListener('input', () => {
  phoneInput.value = phoneInput.value.replace(/[^0-9+]/g, '');
});

document.getElementById('contact-form').addEventListener('submit', async (e) => {
  e.preventDefault();

  const formName = document.getElementById('name');
  const formCompany = document.getElementById('company');
  const formEmail = document.getElementById('email');
  const formPhone = document.getElementById('phone');
  const formComment = document.getElementById('comment');
  const fileInput = document.getElementById('file-input');

  const formData = new FormData();
  formData.append('name', formName.value.trim());
  formData.append('company', formCompany.value.trim());
  formData.append('email', formEmail.value.trim());
  formData.append('phone', formPhone.value.trim());
  formData.append('comment', formComment.value.trim());

  // Добавляем файлы
  if (fileInput.files.length > 0) {
    for (let file of fileInput.files) {
      formData.append('files', file);
    }
  }

  try {
    const response = await fetch('http://127.0.0.1:5001/send-form', {
      method: 'POST',
      body: formData
    });

    if (response.ok) {
      alert('Заявка отправлена');
      e.target.reset();
    } else {
      let error = {};
      try {
        error = await response.json();
      } catch {}
      alert('Ошибка: ' + JSON.stringify(error.errors || error));
    }
  } catch (err) {
    alert('Ошибка сети');
    console.error(err);
  }
});
