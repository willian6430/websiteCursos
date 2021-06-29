function animateFrom(elem, direction) {
  direction = direction || 1;
  var x = 0,
      y = direction * 100;

      //Los que tengan ademas la clase gs_reveal_fromLeft
      if(elem.classList.contains("gs_reveal_fromLeft")) {
    x = -100;
    y = 0;
    //Los que tengan ademas la clase gs_reveal_fromRight
  }else if(elem.classList.contains("gs_reveal_fromRight")) {
    x = 100;
    y = 0;
  }else if(elem.classList.contains("gs_reveal_fromDown")){
    x = 0;
    y = 100;
  }else if(elem.classList.contains("titulo")){
    x = 200;
    y = 0;
  }

  
//Esto se aplica a todos los elementos que tienen la clase .reveal
  elem.style.transform = "translate(" + x + "px, " + y + "px)";
  elem.style.opacity = "0";
  gsap.fromTo(elem, {x: x, y: y, autoAlpha: 0}, {
    duration: 1.50, 
    x: 0,
    y: 0, 
    autoAlpha: 1, 
    ease: "expo", 
    overwrite: "auto"
  });
    }

    //Funcion para ocultar los elentos
    function hide(elem) {
  gsap.set(elem, {autoAlpha: 0});
}

//Desde aqui inicia todo 
document.addEventListener("DOMContentLoaded", function() {
  gsap.registerPlugin(ScrollTrigger);
  
  //Se refiere a todos los elementos que tienen la clase .gs_reveal
  gsap.utils.toArray(".gs_reveal").forEach(function(elem) {
    hide(elem); // assure that the element is hidden when scrolled into view
    
    //Crea la funcion ScrollTrigger
    ScrollTrigger.create({
      trigger: elem,
      //Cuando entra
      onEnter: function() { animateFrom(elem) }, 
      //Cuando entra por atras
      onEnterBack: function() { animateFrom(elem, -1) },
      //cuando sale
      onLeave: function() { hide(elem) } // assure that the element is hidden when scrolled into view
    });
  });
});

//Animacion de la barra del menu al hacer scroll

const showAnim = gsap.from('.menu-bar', { 
  yPercent: -100,
  paused: true,
  duration: 0.2
}).progress(1);

ScrollTrigger.create({
  start: "top top",
  end: 99999,
  onUpdate: (self) => {
    self.direction === -1 ? showAnim.play() : showAnim.reverse()
  }
});

//animacion de el menu hamburguesa

let enlacesHeader = document.querySelectorAll(".enlaces-header")[0];
let semaforo = true;

document.querySelectorAll(".hamburger")[0].addEventListener("click", function(){

  if(semaforo){
    document.querySelectorAll(".hamburger")[0].style.color = "#fff";
    semaforo = false;
  }else{
    document.querySelectorAll(".hamburger")[0].style.color = "#000";
    semaforo = true;

  }
  enlacesHeader.classList.toggle("menu-dos");
});

let variable = document.querySelectorAll(".enlace");
console.log(variable);
variable[0].addEventListener("click", function(){
  enlacesHeader.classList.remove("menu-dos");
  document.querySelectorAll(".hamburger")[0].style.color = "#000";
  semaforo = true;
});

variable[1].addEventListener("click", function(){
  enlacesHeader.classList.remove("menu-dos");
  document.querySelectorAll(".hamburger")[0].style.color = "#000";
  semaforo = true;
});

variable[2].addEventListener("click", function(){
  enlacesHeader.classList.remove("menu-dos");
  document.querySelectorAll(".hamburger")[0].style.color = "#000";
  semaforo = true;
});

variable[3].addEventListener("click", function(){
  enlacesHeader.classList.remove("menu-dos");
  document.querySelectorAll(".hamburger")[0].style.color = "#000";
  semaforo = true;
});

variable[4].addEventListener("click", function(){
  enlacesHeader.classList.remove("menu-dos");
  document.querySelectorAll(".hamburger")[0].style.color = "#000";
  semaforo = true;
});