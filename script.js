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
        lightBtn.style.color='white';
        aboutLink.style.color='white';


    });

    darkBtn.addEventListener("mouseleave", function() {
        lightBtn.style.backgroundColor='white';
        lightBtn.style.color='black';
        aboutLink.style.color='black';

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

            // const text = document.querySelector('.typingAnimation');
            // // const phrase = text.textContent;
            // const phrases = ["Building websites","Responsive design","Application development"];
            // let index = 0;
            // console.log(phrases[2]);

            
            // function showLetter() {
               
            //         if (index <= phrases[i].length) {
            //             text.textContent = phrases[i].slice(0, index);
            //             index++;
            //             setTimeout(showLetter, 70);
            //         } else {
            //             index = phrases[i].length;
            //             setTimeout(removeLetter, 70);
            //         }
            //     }
                    
            
        
            // function removeLetter() {
            // if (index >= 0) {
            //     text.textContent = phrases[i].slice(0, index);
            //     index--;
            //     setTimeout(removeLetter, 70);
            // } else {
            //     index = 0;
            //     setTimeout(showLetter, 70);
            // }
            // }
        
            // showLetter();



            //paradeigmata 



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

//             const text = document.querySelector('.typingAnimation');
//             const phrases = ["Building websites", "Responsive design", "Application development"];
//             let index = 0;
//             let currentPhraseIndex = 0;

//             function showLetter() {
//                 if (index <= phrases[currentPhraseIndex].length) {
//                     text.textContent = phrases[currentPhraseIndex].slice(0, index);
//                     index++;
//                     setTimeout(showLetter, 100);
//                 } else {
//                     index = 0;
//                      // Move to the next phrase
//                     setTimeout(removeLetter, 1000); // Delay before erasing
//                 }
                
//             }

//             function removeLetter() {
//                 if (index >= 0) {
//                     text.textContent = phrases[currentPhraseIndex].slice(0, index);
//                     index--;
//                     setTimeout(removeLetter, 100);
//                 } else {
//                     index = 0;
//                     setTimeout(showLetter, 100);
//                     currentPhraseIndex = (currentPhraseIndex + 1) % phrases.length;
//                 }
//             }

// showLetter();
//TELEIES 

// document.addEventListener("DOMContentLoaded", function() {
//     const dots = document.querySelectorAll(".dot");
  
//     // Function to set active dot based on scroll position
//     function setActiveDot() {
//         const currentPage = getCurrentPage();
//         dots.forEach((dot, index) => {
//           dot.classList.remove("active");
//         });
//         dots[currentPage].classList.add("active");
//       }
    
  
//     // Function to get the current page based on scroll position
//     function getCurrentPage() {
//       const scrollPosition = window.scrollY;
//       const windowHeight = window.innerHeight;
//       const totalHeight = document.body.clientHeight;
//       const totalPages = dots.length;
//       const scrollPercentage = (scrollPosition + windowHeight / 2) / totalHeight;
//       return Math.floor(scrollPercentage * totalPages);
//     }
  
//     // Set active dot on initial page load
//     setActiveDot();
  
//     // Update active dot on scroll
//     window.addEventListener("scroll", setActiveDot);
//   });
  