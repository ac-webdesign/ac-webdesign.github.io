
//KOYMPIA WORK KAI GITHUB 

document.addEventListener("DOMContentLoaded", function() {
    const darkBtn = document.getElementById("work-btn");
    const lightBtn = document.getElementById("about-btn");
    const darkIcon = document.getElementById('dark-icon');
    const lightIcon = document.getElementById('light-icon');

    darkBtn.addEventListener("mouseenter", function() {
        lightBtn.style.backgroundColor='transparent';
        lightBtn.style.color='white';
        darkBtn.style.color='black';
        darkIcon.style.display= 'none';
        lightIcon.style.display='block';


    });

    darkBtn.addEventListener("mouseleave", function() {
        lightBtn.style.backgroundColor='white';
        lightBtn.style.color='black';
        darkBtn.style.color='white'
        darkIcon.style.display='block'
        lightIcon.style.display='none'
    });
   
   
});


//SOCIAL ICONS LINKS TO NEW TAB


            const icons = document.querySelectorAll('.icon');

            // Add click event listener to each icon
            icons.forEach(icon => {
                icon.addEventListener('click', () => {
                    // Get the data-link attribute value
                    const link = icon.getAttribute('data-link');
                    // Open the link in a new tab
                    window.open(link, '_blank');
                });
            });


//TYPING ANIMATION


            const text = document.querySelector('.typingAnimation');
            const phrases = ["I am Alexander,", "frontend developer", "UX/UI designer"];
            let currentPhraseIndex = 0;

            // const phrase = text.textContent;
            let index = 0;
        
            function showLetter() {
            if (index <= phrases[currentPhraseIndex].length) {
                text.textContent = phrases[currentPhraseIndex].slice(0, index);
                index++;
                setTimeout(showLetter, 100);
            } else {
                index = phrases[currentPhraseIndex].length;
                setTimeout(removeLetter, 100);
            }
            }
        
            function removeLetter() {
            if (index >= 0) {
                text.textContent = phrases[currentPhraseIndex].slice(0, index);
                index--;
                setTimeout(removeLetter, 50);
            } else {
                index = 0;
                setTimeout(showLetter, 50);
                currentPhraseIndex = (currentPhraseIndex + 1) % phrases.length;
            }
            }
        
            showLetter();


//TELEIES 


    const dots = document.querySelectorAll(".dot");
  
    // Function to set active dot based on scroll position
    function setActiveDot() {
        const currentPage = getCurrentPage();
        dots.forEach((dot, index) => {
          dot.classList.remove("active");
        });
        dots[currentPage].classList.add("active");
      }
        
  
    // Function to get the current page based on scroll position
    function getCurrentPage() {
        // Get the scroll position of the window
        const scrollPosition = window.scrollY;
        const pageHeight = window.innerHeight;
        const currentPageIndex = Math.floor(scrollPosition / pageHeight);
        
       
        return currentPageIndex;
    }
    const currentPageIndex = getCurrentPage();

    setActiveDot();
  
    // Update active dot on scroll
    window.addEventListener("scroll", setActiveDot);
  

    //PROJECTS SLIDES 

    const slides = document.querySelectorAll(".slides .slide");
    let slideIndex =0;
    let intervalID=null;


    document.addEventListener("DOMContentLoaded", initializeSlider); 

    function initializeSlider(){

        if(slides.length>0){
            slides[slideIndex].classList.add("displaySlide");
            intervalID=setInterval(nextSlide,5000);
        }
    
    }

    function showSlide(index){


            if(index >= slides.length){
                slideIndex=0;
            }
            else if(index<0){
                slideIndex=slides.length-1;
            }
            slides.forEach(slide =>{
                slide.classList.remove("displaySlide");
            });
            slides[slideIndex].classList.add("displaySlide");
    }

    function prevSlide(){
        clearInterval(intervalID);
        slideIndex--;
        showSlide(slideIndex);
    }

    function nextSlide(){

        clearInterval(intervalID);
        slideIndex++;
        showSlide(slideIndex);
        intervalID = setInterval(nextSlide, 5000);
    }


    // BURGER MENU NAVIGATION - MOBILE

    document.getElementById('burger-menu').addEventListener('click', function() {
        this.classList.toggle('open'); 
        document.getElementById('nav-menu').classList.toggle('open'); 
      });

    const navLinks = document.querySelectorAll('.nav-mob');

    navLinks.forEach(link=>{
        link.addEventListener('click',function(){
            document.getElementById('burger-menu').classList.remove('open');
            document.getElementById('nav-menu').classList.remove('open');
            
        })
    })

    