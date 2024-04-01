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

    darkBtn.addEventListener("mouseenter", function() {
        lightBtn.style.backgroundColor='transparent';
        lightBtn.style.color='white';

    });

    darkBtn.addEventListener("mouseleave", function() {
        lightBtn.style.backgroundColor='white';
        lightBtn.style.color='black';
    });

    // lightBtn.addEventListener("mouseenter", function() {
    //     darkBtn.classList.add("light-btn");
    // });

    // lightBtn.addEventListener("mouseleave", function() {
    //     darkBtn.classList.remove("light-btn");
    // });
});

// const sections = document.querySelectorAll('section');

// sections.forEach(section => {
//     section.addEventListener('wheel', event => {
//         event.preventDefault();
//         const deltaY = event.deltaY;
//         const sectionIndex = Array.from(sections).indexOf(section);
//         const nextSection = sections[sectionIndex + (deltaY > 0 ? 1 : -1)];
//         if (nextSection) {
//             nextSection.scrollIntoView({ behavior: 'smooth' });
//         }
//     });
// });
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
  