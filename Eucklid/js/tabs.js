window.addEventListener('DOMContentLoaded', function (){
  document.querySelectorAll('.plan__steps__btn').forEach(function(tabsBtn){
    tabsBtn.addEventListener('click', function(event){
      const path = event.currentTarget.dataset.path;

      // удалили активный класс для дива
      document.querySelectorAll('.plan__cards').forEach(function(tabContent) {
        tabContent.classList.remove('plan__cards-active');
      });

      // добавили активный класс текущему диву
      document.querySelector(`[data-target="${path}"]`).classList.add('plan__cards-active');

      // удалили также активный класс всем табам
      document.querySelectorAll('.plan__steps__btn').forEach(function(tabBtn) {
        tabBtn.classList.remove('step__active');
      });

      // добавили активный класс табу, куда нажали
      this.classList.add('step__active');
    });
  });
});
