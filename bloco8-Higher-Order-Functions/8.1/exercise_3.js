let click = 0;

function count() {
  const clickCount = document.getElementById('resultado');
  click += 1;
  clickCount.innerText = click;
  return clickCount;
}