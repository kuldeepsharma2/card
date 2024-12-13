function toggleCard(card) {
    const radio = card.querySelector('.card-header input[type="radio"]'); // Find the radio button in the clicked card

    // Check if the radio button is selected
    if (radio && radio.checked) {
        const allCards = document.querySelectorAll('.card');
        allCards.forEach(c => c.classList.remove('expanded')); // Collapse all cards
        card.classList.add('expanded'); // Expand the selected card
    }
}

// Ensure clicking anywhere on a card selects its radio button
document.querySelectorAll('.card').forEach(card => {
    card.addEventListener('click', function (event) {
        const radio = this.querySelector('.card-header input[type="radio"]');
        
        // If the radio button is not already checked, select it
        if (radio && !radio.checked) {
            radio.checked = true; // Select the radio button
            toggleCard(this); // Call the toggleCard function
        }
    });
});
