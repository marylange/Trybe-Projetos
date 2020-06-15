window.onload = function() {
    let heading = document.getElementById("change_heading");
    heading.innerHTML = "Hello world!";
  ​
    let section = document.querySelector("section");
    section.addEventListener("mouseover", recebeMouseOver);
  ​
    function recebeMouseOver(event) {
      console.log(event);
      let selectedColor = document.querySelector(".selected");
      let elementoHTMLQueOriginouOEvento = event.target;
      selectedColor.innerHTML = elementoHTMLQueOriginouOEvento.className;
    }
  ​
    let button = document.querySelector("button");
  ​
    button.addEventListener("click", clicouEmStartNaCorrida);
    let car1 = document.querySelector(".car1");
    car1.style.marginLeft = 0;
  ​
    let car2 = document.querySelector(".car2");
    car2.style.marginLeft = 0;
  ​
    function reset(car1, car2) {
      car1.style.marginLeft = 0;
      car2.style.marginLeft = 0;
    }
  ​
    function clicouEmStartNaCorrida(evento) {
  ​
      car1.style.marginLeft = parseInt(car1.style.marginLeft) + (Math.random() * 180) + "px";
      car2.style.marginLeft = parseInt(car2.style.marginLeft) + (Math.random() * 180) + "px";
  ​
      if (parseInt(car1.style.marginLeft) > window.innerWidth) {
        alert("Carro 1 ganhou");
        reset(car1, car2);
      }
  ​
      if (parseInt(car2.style.marginLeft) > window.innerWidth) {
        alert("Carro 2 ganhou");
        reset(car1, car2);
      }
    }
  }