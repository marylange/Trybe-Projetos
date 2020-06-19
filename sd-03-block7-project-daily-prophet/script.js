const artigos = document.querySelectorAll('.article-animation');
function animarArtigos() {
  this.style.animationPlayState = 'running';
}
for (let i = 0; i < artigos.length; i += 1) {
  artigos[i].addEventListener('click', animarArtigos);
}
