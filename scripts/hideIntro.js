var button = document.getElementById('enter');
var intro = document.getElementById('intro');
var music = document.getElementById('music');

button.onclick = function() {
    music.play();
    window.scrollTo(0, 0);
    anime({
        targets: '#intro',
        translateY: '-100%',
        opacity: 0,
        duration: 1500,
        easing: 'easeOutQuad'
    });
    // intro.style.display = 'none';
}