const header = document.querySelector('header');
const scrollThreshold = 100;
window.addEventListener('scroll', () => {
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  if (scrollTop > scrollThreshold) {
    header.classList.add('show');
  }
  else {
    header.classList.remove('show');
  }
});



const menuBtns = document.querySelectorAll('.menu-btn');
const closeBtns = document.querySelectorAll('.close-btn');
const menuOverlay = document.getElementById('menu-overlay');

// открыть меню
menuBtns.forEach(btn => {
  btn.addEventListener('click', (e) => {
    e.preventDefault();
    menuOverlay.classList.add('active');
  });
});

// закрыть меню
closeBtns.forEach(btn => {
  btn.addEventListener('click', (e) => {
    e.preventDefault();
    menuOverlay.classList.remove('active');
  });
});

// клавиатура
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    menuOverlay.classList.remove('active');
  }

  if (['c', 'C', 'с', 'С'].includes(e.key)) {
    e.preventDefault();
    menuOverlay.classList.toggle('active');
  }
});



const menuBtn = document.querySelector('.menu-btn.ph-s');
const main = document.querySelector('main');

if (menuBtn && main) {
  const gap = 20;
  menuBtn.style.transition = 'none';

  window.addEventListener('scroll', () => {
    const mainRect = main.getBoundingClientRect();
    const viewportHeight = window.innerHeight;

    // Если низ main достиг низа экрана - переключаем на absolute
    if (mainRect.bottom <= viewportHeight) {
      menuBtn.style.position = 'absolute';
      menuBtn.style.bottom = `${gap}px`;
    } else {
      // Скроллим выше - возвращаем fixed
      menuBtn.style.position = 'fixed';
      menuBtn.style.bottom = `${gap}px`;
    }
  }, { passive: true });
}



const textareas = document.querySelectorAll('textarea');
const maxHeight = parseFloat(getComputedStyle(document.documentElement).fontSize) * 1.5 * 10;

const resizeAll = () => {
  textareas.forEach(textarea => {
    textarea.style.height = 'auto';
    const scrollHeight = textarea.scrollHeight;

    if (scrollHeight > maxHeight) {
      textarea.style.height = maxHeight + 'px';
      textarea.style.overflowY = 'auto';
    } else {
      textarea.style.height = scrollHeight + 'px';
      textarea.style.overflowY = 'hidden';
    }
  });
};

textareas.forEach(textarea => {
  textarea.addEventListener('input', resizeAll);
});

resizeAll();


document.querySelectorAll('.case').forEach(cas => {
  const cover = cas.dataset.cover;
  const description = cas.dataset.description;
  const name = cas.dataset.name;
  const href = cas.dataset.href;

  cas.innerHTML = `
    <a class="case-img" href="${href}">
      <img src="${cover}" alt="Превью">
    </a>
    <div class="case-d">
      <p class="g">${name}</p>
      <h4>${description}</h4>
    </div>
  `;
});



gsap.registerPlugin(ScrollTrigger);

function animateTextLines(selector, options = {}) {
  const elements = document.querySelectorAll(selector);
  const settings = { ...options };
  elements.forEach((element, elementIndex) => {
    const split = new SplitType(element, { types: 'lines' });
    gsap.from(split.lines, {
      opacity: 0,
      y: settings.y,
      duration: settings.duration,
      ease: "power2.out",
      stagger: settings.stagger,
      delay: settings.delay
    });
  });
}

gsap.from('.gsap-1', {
  scrollTrigger: '.gsap-1',
  opacity: 0,
  y: 40,
  duration: 1.4,
  ease: "power2.out",
  delay: 0.15
});

animateTextLines('.gsap-2', {
  y: 80,
  duration: 1.3,
  delay: 0.3,
  stagger: 0.15
});

animateTextLines('.gsap-3', {
  y: 40,
  duration: 1.2,
  delay: 0.45,
  stagger: 0.1
});

gsap.from('.gsap-4', {
  scrollTrigger: '.gsap-4',
  opacity: 0,
  y: 120,
  duration: 1.2,
  ease: "power2.out",
  delay: 0.6
});



const track = document.getElementById('marquee-track');
const content = track.innerHTML;
track.innerHTML = content + content;



window.addEventListener('scroll', () => {
  const header = document.querySelector('.res-h');
  const container = document.querySelector('.res');
  const rect = container.getBoundingClientRect();

  if (rect.top <= 0) {
    const scrolled = Math.abs(rect.top);
    const opacity = Math.max(0.15, 1 - (scrolled / 250) * 0.85);
    header.style.opacity = opacity;
  } else {
    header.style.opacity = 1;
  }
});



function syncForms() {
  const forms = document.querySelectorAll('.contact-form');

  forms.forEach(form => {
    form.addEventListener('input', (e) => {
      const target = e.target;
      const { name, type, value, files } = target;
      if (!name) return;

      forms.forEach(otherForm => {
        if (otherForm === form) return;

        const field = otherForm.querySelector(`[name="${name}"]`);
        if (!field) return;

        if (type === 'file') {
          field.files = files;
        } else if (field.value !== value) {
          field.value = value;
        }
      });
    });
  });
}

syncForms();

/* ===============================
   ФИЛЬТРАЦИЯ ПОЛЕЙ
================================ */
document.addEventListener('input', (e) => {
  if (e.target.name === 'name') {
    e.target.value = e.target.value.replace(/[^А-Яа-яA-Za-z\s]/g, '');
  }

  if (e.target.name === 'phone') {
    e.target.value = e.target.value.replace(/[^0-9+]/g, '');
  }
});

/* ===============================
   ОТПРАВКА ФОРМЫ
================================ */
function initFormSubmit() {
  const forms = document.querySelectorAll('.contact-form');

  forms.forEach(form => {
    form.addEventListener('submit', async (e) => {
      e.preventDefault();

      const formData = new FormData(form);
      if (sharedFiles) {
        [...sharedFiles].forEach(file => {
          formData.append('files', file);
        });
      }

      try {
        const response = await fetch('http://127.0.0.1:5001/send-form', {
          method: 'POST',
          body: formData
        });

        if (response.ok) {
          showToast('Заявка отправлена!', 5000, 'success');
          forms.forEach(f => f.reset());
          clearFileLists();
          document.querySelectorAll('input[type="file"]').forEach(input => {
            updateFileLabelText(input);
          });
        } else {
          alert('Ошибка отправки');
        }
      } catch (err) {
        alert('Ошибка сети');
        console.error(err);
      }
    });
  });
}

initFormSubmit();

/* ===============================
   DRAG & DROP ФАЙЛОВ
================================ */
document.querySelectorAll('.file-upload').forEach(upload => {
  const fileLabel = upload.querySelector('.file-label');
  const fileInput = upload.querySelector('input[type="file"]');
  const fileList = upload.querySelector('.file-list');

  fileLabel.addEventListener('click', () => {
    fileInput.click();
  });



  const preventDefaults = (e) => {
    e.preventDefault();
    e.stopPropagation();
  };

  ['dragenter', 'dragover', 'dragleave', 'drop'].forEach(eventName => {
    fileLabel.addEventListener(eventName, preventDefaults);
  });

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

  fileLabel.addEventListener('drop', (e) => {
    fileInput.files = e.dataTransfer.files;
    updateAllFileLists(fileInput.files);
    updateFileLabelText(fileInput);
  });



  fileInput.addEventListener('change', () => {
    updateAllFileLists(fileInput.files);
    updateFileLabelText(fileInput);
  });


});

let sharedFiles = null;

function updateAllFileLists(files) {
  sharedFiles = files;

  document.querySelectorAll('.file-list').forEach(list => {
    list.innerHTML = '';
    [...files].forEach(file => {
      const item = document.createElement('div');
      item.className = 'file-item';
      list.appendChild(item);
    });
  });
}

function updateFileLabelText(fileInput) {
  const labelTexts = document.querySelectorAll('.file-label-text');
  const files = fileInput.files;

  labelTexts.forEach(labelText => {
    if (!files || files.length === 0) {
      labelText.innerHTML = `
        <span style="font-size: 2rem; font-weight: 300; line-height: 80%">+</span>
        Прикрепить файл
      `;
    } else if (files.length === 1) {
      labelText.textContent = files[0].name;
    } else {
      labelText.textContent = `Файлов: ${files.length}`;
    }
  });
}

function clearFileLists() {
  document.querySelectorAll('.file-list').forEach(list => {
    list.innerHTML = '';
  });
}



//уведомление
function showToast(message, duration = 5000, type = 'success') {
  const container = document.getElementById('toast-container');
  const toast = document.createElement('div');
  toast.classList.add('toast');

  // Можно менять цвет в зависимости от типа
  if (type === 'error') toast.style.backgroundColor = '#f44336';
  if (type === 'success') toast.style.backgroundColor = '#4caf50';

  toast.textContent = message;
  container.appendChild(toast);

  // Анимация появления
  setTimeout(() => toast.classList.add('show'), 10);

  // Автоудаление через duration
  setTimeout(() => {
    toast.classList.remove('show');
    setTimeout(() => toast.remove(), 300); // после анимации скрытия
  }, duration);
}



// Функция для синхронизации высоты
function syncFooterHeight() {
  const footer = document.querySelector('.footer');
  const fakeFooter = document.querySelector('.fake-footer');

  if (footer && fakeFooter) {
    const footerHeight = footer.offsetHeight;
    fakeFooter.style.height = footerHeight + 'px';
  }
}

// Синхронизируем высоту при загрузке страницы
syncFooterHeight();

// Синхронизируем высоту при изменении размера окна
window.addEventListener('resize', syncFooterHeight);

// Опционально: синхронизация при изменении содержимого (если футер динамический)
const observer = new ResizeObserver(syncFooterHeight);
const footer = document.querySelector('.footer');
if (footer) {
  observer.observe(footer);
}