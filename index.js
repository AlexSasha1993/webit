document.addEventListener('DOMContentLoaded', function () {
  let openModalBtn = document.getElementById('openModalBtn');
  let modal = document.querySelector('.main');

  openModalBtn.addEventListener('click', function () {
    modal.style.display = 'block';
  });

  document.addEventListener('click', function (event) {
    // Если клик был совершен вне модального окна, то скрываем его
    if (!modal.contains(event.target) && event.target !== openModalBtn) {
      modal.style.display = 'none';
    }
  });
});
