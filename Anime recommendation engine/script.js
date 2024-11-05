document.getElementById("recommendation-button").addEventListener("click", function(event) {
    event.preventDefault();
    
    // Hide intro and button
    document.querySelector(".intro").classList.add("hidden");
    
    // Show question box
    document.getElementById("question-box").classList.remove("hidden");
});

document.getElementById.("question-form").addEventListener("submit", function(event) {
    event.preventDefault();
    
    const genre = document.getElementById("genre").value;
    const yearRange = document.getElementById("year-range").value;
    const episodeCount = document.getElementById("episode-count").value;
    
    // This is where you'd process the user's input and generate a recommendation.
    alert(`Рекомендація для жанру: ${genre}, діапазон років: ${yearRange}, кількість серій: ${episodeCount}`);
});


