document.addEventListener('DOMContentLoaded', () => {
  new SimpleBar(document.body);
});

const menuBtn = document.getElementById('menu-btn');
const closeBtn = document.getElementById('close-btn');
const menuOverlay = document.getElementById('menu-overlay');

menuBtn.addEventListener('click', (e) => {
  e.preventDefault();
  menuOverlay.classList.add('active');
});

closeBtn.addEventListener('click', (e) => {
  e.preventDefault();
  menuOverlay.classList.remove('active');
});

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    menuOverlay.classList.remove('active');
  }
  if (e.key === 'c' || e.key === 'C' || e.key === 'с' || e.key === 'С') {
    e.preventDefault();
    menuOverlay.classList.toggle('active');
  }
});



document.querySelectorAll('textarea').forEach(textarea => {
  const resize = () => {
    textarea.style.height = 'auto';
    textarea.style.height = (textarea.scrollHeight - 50) + 'px';
  };

  textarea.addEventListener('input', resize);
  resize();
});



document.querySelectorAll('.case').forEach(cas => {
  const cover = cas.dataset.cover;
  const description = cas.dataset.description;
  const name = cas.dataset.name;
  const href = cas.dataset.href;

  cas.innerHTML = `
    <div class="case-img">
      <a href="${href}">
        <img src="${cover}" alt="Превью">
      </a>
    </div>
    <div class="case-d">
      <p class="g">${name}</p>
      <h4>${description}</h4>
    </div>
  `;
});



// Дублируем контент для бесшовности
const track = document.getElementById('marquee-track');
const content = track.innerHTML;
track.innerHTML = content + content;



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
      } catch { }
      alert('Ошибка: ' + JSON.stringify(error.errors || error));
    }
  } catch (err) {
    alert('Ошибка сети');
    console.error(err);
  }
});

//драг и дроп
const fileLabel = document.querySelector('.file-label');
const fileInput = document.getElementById('file-input');
const fileList = document.querySelector('.file-list');

// Предотвращаем стандартное поведение
['dragenter', 'dragover', 'dragleave', 'drop'].forEach(eventName => {
  fileLabel.addEventListener(eventName, preventDefaults, false);
});

function preventDefaults(e) {
  e.preventDefault();
  e.stopPropagation();
}

// Визуальная обратная связь
['dragenter', 'dragover'].forEach(eventName => {
  fileLabel.addEventListener(eventName, () => {
    fileLabel.style.background = 'var(--btn-d-h)';
  });
});

['dragleave', 'drop'].forEach(eventName => {
  fileLabel.addEventListener(eventName, () => {
    fileLabel.style.background = '';
  });
});

// Обработка drop
fileLabel.addEventListener('drop', (e) => {
  const files = e.dataTransfer.files;
  handleFiles(files);
});

// Обработка обычного выбора
fileInput.addEventListener('change', (e) => {
  handleFiles(e.target.files);
});

function handleFiles(files) {
  fileList.innerHTML = '';
  [...files].forEach(file => {
    const fileItem = document.createElement('div');
    fileItem.textContent = file.name;
    fileItem.className = 'file-item';
    fileList.appendChild(fileItem);
  });
}