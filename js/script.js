document.querySelectorAll('.mag').forEach(mag => {
  const cover = mag.dataset.cover;
  const title = mag.dataset.title;
  const href = mag.dataset.href;
  mag.innerHTML = `
    <div class="mag-cv">
      <a href="${href}">
        <div class="mag-img">
          <img src="${cover}" alt="Обложка" data-tilt>
        </div>
      </a>
    </div>
    <!--<h4>${title}</h4>-->`;
});