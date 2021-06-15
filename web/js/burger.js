window.addEventListener('DOMContentLoaded', function() {
    document.querySelector('#burger').addEventListener('click', function () {
        document.querySelector('#menu').classList.toggle('menu')
        document.querySelector('#menu').classList.toggle('is-active')
        document.querySelector('#disactivate').classList.toggle('disactivate')
    })
})
