// cursus


var title = document.getElementById("title-cursus");
var paragraphe = document.getElementById("texte-cursus");
var image = document.getElementById("image-cursus");
var lienEcole = document.getElementById("lien-ecole");


function plateforme() {
    paragraphe.innerHTML = "Après mon retour à Marseille, j'ai décidé de refaire une formation en informatique. On m'a recommandé une formation gratuite en informatique : Le Bachelor IT à La Plateforme. <br>La première année se fait à 100% en présentiel. On apprend les bases de l'informatique avec une pédagogie en mode projet. Qui nous permet d'apprendre en allant chercher les informations sois-même. ";
    title.innerHTML = "Le Bachelor IT : La Plateforme. 2022 - Maintenant";
    image.src = "image/laplateforme.jpg";
    image.alt = "école la plateforme";
    lienEcole.href = "https://www.laplateforme.io/";
}

function bellepierre() {
    paragraphe.innerHTML = "Après l'obtention du Bac, j'ai décidé de partir vivre à La Réunion pour rejoindre une partie de ma famille et commencé mes études supérieurs à leurs côtés. J'ai donc était accepté au Lycée Bellepierre grâce à parcoursup. <br>Le premier semestre j'ai appris des bases en réseau informatique et en programmation web. Puis au deuxième semestre j'ai choisi l'option SLAM (Solution logiciel application métier), qui m'a permis d'en apprendre plus sur la programmation logiciel (notamment en Visual Basic)";
    title.innerHTML = "Le BTS SIO : Lycée Bellepierre. 2021 - 2022";
    image.src = "image/bellepierre.jpg";
    image.alt = "Lycée Bellepierre";
    lienEcole.href = "https://etab.ac-reunion.fr/lyc-bellepierre/";
  }

  function chatelier() {
    paragraphe.innerHTML = "Après le collège, j'ai décidé de continuer l'école avec un Bac Professionel en Système Numérique, car j'étais déjà passionnées par les nouvelles technologies et l'informatique. <br>J'ai pû apprendre les bases des systèmes d'exploitation et des réseaux informatiques. C'est d'ailleurs pendant mes années au lycée que j'ai pû m'intéresser à la programmation, ce qui m'a pousser à apprendre des bases en autodidacte car la programmation informatique n'était pas dans le cursus.";
    title.innerHTML = "Le BAC PRO SN : Lycée Le Chatelier. 2018-2021";
    image.src = "image/lechatelier.jpg"
    image.alt = "Lycée Le Chatelier";
    lienEcole.href = "https://www.site.ac-aix-marseille.fr/lyc-chatelier/spip/";
  }



// navbar et menu 

   
  document.addEventListener('DOMContentLoaded', function() {
    let button = document.querySelector('.button-menu');
    let menu = document.querySelector('.menu');
    let width = screen.width;

    let divContainer = document.getElementById('nav-js');
    let links = divContainer.getElementsByTagName('a');

    console.log(width);

    button.addEventListener('click', function() {
      if (button.src.match("image/bars-solid.svg")) {
        if(width < 1024) {
          menu.style.left = '0%';
          button.src = "image/xmark-solid.svg";
        }else{
          menu.style.left = '88.2%';
          button.src = "image/xmark-solid.svg";
        }
      } else{
        menu.style.left = '200%';
        button.src = "image/bars-solid.svg";
      
      }
      
    });

    for (let i = 0; i < links.length; i++) {
      links[i].addEventListener('click', function(event) {
        menu.style.left = '200%';
        button.src = "image/bars-solid.svg"; 

        let targetElement = document.querySelector(links[i].getAttribute('href'));
        targetElement.scrollIntoView({
          behavior: 'smooth'
        });


      });
    }


  });


// projets


  let slideIndex = 1;
  let description = document.getElementById("descri-projet");
  showSlides(slideIndex);
  
  function plusSlides(n) {
    showSlides(slideIndex += n);
  }
  
  function currentSlide(n) {
    showSlides(slideIndex = n);
  }
  
  function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");

    if (n > slides.length) {
      slideIndex = 1
    }    

    if (n < 1) {
      slideIndex = slides.length
    }

    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
    }

    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    }

    slides[slideIndex-1].style.display = "block";  
    dots[slideIndex-1].className += " active";

    switch(slideIndex) {
      case 1 :
        description.innerHTML = "Le pendu est un projet effectué en solo à l'école La Plateforme <br>C'est un jeu de pendu classique, on y a tous joué depuis l'enfance. <br>Et c'est en fait le premier jeu que j'ai réalisé en codant. <br> Etant passionné de jeux-vidéos,  je pense en réalisé d'autres quand j'en aurais l'occasion.</p>";
        break;
      case 2:
        description.innerHTML = "myDiscord est un projet effectué en duo à l'école La Plateforme. <br>Il consistait à faire une application de messagerie textuelle entre deux personne à distance en utilisant le système de socket <br> Ce projet m'a enrichie sur le plan technique comme mental, car cela m'a appris à ne pas baisser les bras dans la difficulté d'un projet comme celui-là.";
        break;
      case 3:
        description.innerHTML = "C'est le projet que vous visitiez actuellement !<br>Ce portfolio est un projet que j'ai réalisé en solo en étant à l'école La Plateforme. </p>";
        break;
      default :
        description.innerHTML = "test4"
        break;
    }



  }

