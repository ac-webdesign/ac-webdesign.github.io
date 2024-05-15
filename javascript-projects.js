
//POPUP WINDOW WHEN OPENING THE PROJECT

function openPopup(popupId) {
    var popup = document.getElementById(popupId);
    var width = 500;
    var height = 400;
    var left = (screen.width - width) / 2;
    var top = (screen.height - height) / 2;
    var options = 'width=' + width + ',height=' + height + ',top=' + top + ',left=' + left;
    window.open('', '_blank', options).document.write(popup.innerHTML);
}

// Attach event listeners to thumbnails
document.getElementById('thumbnail1').addEventListener('click', function() {
    openPopup('popup1');
});
document.getElementById('thumbnail2').addEventListener('click', function() {
    openPopup('popup2');
});

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

