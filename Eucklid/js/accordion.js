
window.addEventListener('DOMContentLoaded', function() {

    var first_svg = document.getElementById('fst__qn')
    var second_svg = document.getElementById('scnd__qn')
    var third_svg = document.getElementById('thrd__qn')
    var fourth_svg = document.getElementById('forth__qn')
    var fifth_svg = document.getElementById('fith__qn')
    var first_path = document.querySelector('.first_path')
    var second_path = document.querySelector('.second_path')
    var third_path = document.querySelector('.third_path')
    var fourth_path = document.querySelector('.fourth_path')
    var fifth_path = document.querySelector('.fifth_path')
// 1
    document.querySelector('.first__question').addEventListener('click', function () {
        // Поворот svg
        second_svg.classList.remove('active_svg')
        third_svg.classList.remove('active_svg')
        fourth_svg.classList.remove('active_svg')
        fifth_svg.classList.remove('active_svg')
        first_svg.classList.toggle('active_svg')
        // Заполнение цветом Эллипса
        document.querySelector('.first_ellipse').classList.toggle('filled__svg')
        document.querySelector('.second_ellipse').classList.remove('filled__svg')
        document.querySelector('.fourth_ellipse').classList.remove('filled__svg')
        document.querySelector('.fifth_ellipse').classList.remove('filled__svg')
        document.querySelector('.third_ellipse').classList.remove('filled__svg')
        // Заполнение цветом Креста
        first_path.classList.toggle('filled__path')
        second_path.classList.remove('filled__path')
        third_path.classList.remove('filled__path')
        fourth_path.classList.remove('filled__path')
        fifth_path.classList.remove('filled__path')
    })
// 2
    document.querySelector('.second__question').addEventListener('click', function () {
        // Поворот svg
        first_svg.classList.remove('active_svg')
        third_svg.classList.remove('active_svg')
        fourth_svg.classList.remove('active_svg')
        fifth_svg.classList.remove('active_svg')
        second_svg.classList.toggle('active_svg')
        // Заполнение цветом Эллипса
        document.querySelector('.first_ellipse').classList.remove('filled__svg')
        document.querySelector('.third_ellipse').classList.remove('filled__svg')
        document.querySelector('.fourth_ellipse').classList.remove('filled__svg')
        document.querySelector('.fifth_ellipse').classList.remove('filled__svg')
        document.querySelector('.second_ellipse').classList.toggle('filled__svg')
        // Заполнение цветом Креста
        first_path.classList.remove('filled__path')
        third_path.classList.remove('filled__path')
        fourth_path.classList.remove('filled__path')
        fifth_path.classList.remove('filled__path')
        second_path.classList.toggle('filled__path')
    })
// 3
      document.querySelector('.third__question').addEventListener('click', function () {
        // Поворот svg
        first_svg.classList.remove('active_svg')
        second_svg.classList.remove('active_svg')
        fourth_svg.classList.remove('active_svg')
        fifth_svg.classList.remove('active_svg')
        third_svg.classList.toggle('active_svg')
        // Заполнение цветом Эллипса
        document.querySelector('.first_ellipse').classList.remove('filled__svg')
        document.querySelector('.second_ellipse').classList.remove('filled__svg')
        document.querySelector('.fourth_ellipse').classList.remove('filled__svg')
        document.querySelector('.fifth_ellipse').classList.remove('filled__svg')
        document.querySelector('.third_ellipse').classList.toggle('filled__svg')
        // Заполнение цветом Креста
        third_path.classList.toggle('filled__path')
        second_path.classList.remove('filled__path')
        first_path.classList.remove('filled__path')
        fourth_path.classList.remove('filled__path')
        fifth_path.classList.remove('filled__path')
    })
// 4
      document.querySelector('.fourth__question').addEventListener('click', function () {
        // Поворот svg
        first_svg.classList.remove('active_svg')
        second_svg.classList.remove('active_svg')
        third_svg.classList.remove('active_svg')
        fifth_svg.classList.remove('active_svg')
        fourth_svg.classList.toggle('active_svg')
        // Заполнение цветом Эллипса
        document.querySelector('.first_ellipse').classList.remove('filled__svg')
        document.querySelector('.second_ellipse').classList.remove('filled__svg')
        document.querySelector('.third_ellipse').classList.remove('filled__svg')
        document.querySelector('.fifth_ellipse').classList.remove('filled__svg')
        document.querySelector('.fourth_ellipse').classList.toggle('filled__svg')
        // Заполнение цветом Креста
        second_path.classList.remove('filled__path')
        third_path.classList.remove('filled__path')
        first_path.classList.remove('filled__path')
        fifth_path.classList.remove('filled__path')
        fourth_path.classList.toggle('filled__path')
    })
// 5
      document.querySelector('.fifth__question').addEventListener('click', function () {
        // Поворот svg
        first_svg.classList.remove('active_svg')
        second_svg.classList.remove('active_svg')
        third_svg.classList.remove('active_svg')
        fourth_svg.classList.remove('active_svg')
        fifth_svg.classList.toggle('active_svg')
        // Заполнение цветом Эллипса
        document.querySelector('.first_ellipse').classList.remove('filled__svg')
        document.querySelector('.second_ellipse').classList.remove('filled__svg')
        document.querySelector('.third_ellipse').classList.remove('filled__svg')
        document.querySelector('.fourth_ellipse').classList.remove('filled__svg')
        document.querySelector('.fifth_ellipse').classList.toggle('filled__svg')
        // Заполнение цветом Креста
        second_path.classList.remove('filled__path')
        third_path.classList.remove('filled__path')
        fourth_path.classList.remove('filled__path')
        first_path.classList.remove('filled__path')
        fifth_path.classList.toggle('filled__path')
    })
})


