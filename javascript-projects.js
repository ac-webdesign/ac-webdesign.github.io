

// OPEN PROJECTS IN NEW WINDOW
function openMemoryWindow() {
    window.open('memory-game.html', '_blank');
}

function openSlotsWindow(){
    window.open('slots-game.html', '_blank');

}
function openRouletteWindow(){
    window.open('roulette.html', '_blank');

}

function openMillionaireWindow(){
    window.open('quiz-game.html', '_blank');

}

//BURGER MENU OPEN

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