// document.addEventListener("DOMContentLoaded", function() {
//     let currentPageIndex = 0; // Keep track of the current page index

//     window.addEventListener("wheel", function(event) {
//         const deltaY = event.deltaY;
//         const pages = document.querySelectorAll(".page");

//         if (deltaY > 0) {
//             // If scrolling down and there's a page below, move to the next page
//             currentPageIndex++;
//         } else if (deltaY < 0 ) {
//             // If scrolling up and there's a page above, move to the previous page
//             currentPageIndex--;
//         }

//         pages.forEach(function(page, index) {
//             const distanceFromCurrent = index - currentPageIndex;
//             page.style.opacity = Math.abs(distanceFromCurrent) < 2 ? 1 : 0; // Set opacity based on current page index and distance from current
//         });
//     });
// });


//KOYMPIA WORK KAI ABOUT POY ALLAZOYN XRWMA

document.addEventListener("DOMContentLoaded", function() {
    const darkBtn = document.getElementById("work-btn");
    const lightBtn = document.getElementById("about-btn");
    const aboutLink = document.getElementById("aboutLink");

    darkBtn.addEventListener("mouseenter", function() {
        lightBtn.style.backgroundColor='transparent';
        lightBtn.style.color='black';
        aboutLink.style.color='white';
        darkBtn.style.color='black';


    });

    darkBtn.addEventListener("mouseleave", function() {
        lightBtn.style.backgroundColor='white';
        lightBtn.style.color='black';
        aboutLink.style.color='black';
        // darkBtn.style.backgroundColor='red';

    });
    // lightBtn.addEventListener('mouseenter',function(){
    //     lightBtn.style.backgroundColor='red';
    // })
   
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
            const phrases = ["Be patient!", "Website is under construction", "@ac.webdesign"];
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
  
  