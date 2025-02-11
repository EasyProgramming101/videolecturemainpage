// Define playlist URLs
var playlistUrls = {
    'DataStructures': 'https://videolectures101.github.io/datastructures/',
    'Algorithms': 'https://videolectures101.github.io/algorithms/',
    'OperatingSystems': 'https://videolectures101.github.io/operatingsystems/'
};

// Get DOM elements
var topicSelector = document.getElementById('topicSelector');
var goButton = document.getElementById('goButton');

// Enable/disable button based on selection
topicSelector.addEventListener('change', function () {
    goButton.disabled = !this.value;
});

// Navigate to selected playlist
goButton.addEventListener('click', function () {
    var selectedTopic = topicSelector.value;
    if (selectedTopic && playlistUrls[selectedTopic]) {
        window.open(playlistUrls[selectedTopic], '_blank');
    }
});
