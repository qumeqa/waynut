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



gsap.registerPlugin(ScrollTrigger);

gsap.from('.gsap-1', {
  scrollTrigger: '.gsap-1',
  opacity: 0,
  y: 40,
  duration: 1.5,
  ease: "power2.out",
  delay: 0.15
});

gsap.from('.gsap-2', {
  scrollTrigger: '.gsap-2',
  opacity: 0,
  y: 80,
  duration: 1.35,
  ease: "power2.out",
  delay: 0.3
});

gsap.from('.gsap-3', {
  scrollTrigger: '.gsap-3',
  opacity: 0,
  y: 120,
  duration: 1.2,
  ease: "power2.out",
  delay: 0.45
});

gsap.from('.gsap-4', {
  scrollTrigger: '.gsap-5',
  opacity: 0,
  y: 80,
  duration: 1.35,
  ease: "power2.out",
  delay: 0
});

gsap.from('.gsap-5', {
  scrollTrigger: '.gsap-5',
  opacity: 0,
  y: 120,
  duration: 1.2,
  ease: "power2.out",
  delay: 0.15
});

gsap.from('.gsap-6', {
  scrollTrigger: {
    trigger: '.gsap-6',
    start: 'top 80%', // Когда элемент на 80% экрана
  },
  opacity: 0,
  y: 80,
  duration: 1.35,
  ease: "power2.out",
  delay: 0
});

// gsap.utils.toArray('.gsap-6l').forEach((el, index) => {
//   gsap.from(el, {
//     scrollTrigger: {
//       trigger: el,
//       start: 'top bottom',
//       markers: true
//     },
//     opacity: 0,
//     x: -80,
//     duration: 1.2,
//     ease: "power2.out"
//   });
// });

// gsap.utils.toArray('.gsap-6r').forEach((el, index) => {
//   gsap.from(el, {
//     scrollTrigger: {
//       trigger: el,
//       start: 'top bottom',
//       markers: true
//     },
//     opacity: 0,
//     x: 80,
//     duration: 1.2,
//     ease: "power2.out"
//   });
// });

const track = document.getElementById('marquee-track');
const content = track.innerHTML;
track.innerHTML = content + content;



const res = document.querySelector('.res');
const resH = document.querySelector('.res-h');

window.addEventListener('scroll', () => {
  if (!res || !resH) return;

  const resRect = res.getBoundingClientRect();

  // Добавляем класс, когда верх родителя поднялся выше viewport на 100px
  if (resRect.top <= -100) {
    resH.classList.add('fixed');
  } else {
    resH.classList.remove('fixed');
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