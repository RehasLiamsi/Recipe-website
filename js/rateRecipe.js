function validateForm() {
    const ratingInput = document.getElementById("rating");
    const feedbackInput = document.getElementById("feedback");
    const ratingError = document.getElementById("ratingError");
    const feedbackError = document.getElementById("feedbackError");

    let valid = true;

    if (ratingInput.value < 0 || ratingInput.value > 10) {
        valid = false;
        ratingError.textContent = "Rating must be between 0 and 10";
    } else {
        ratingError.textContent = "";
    }

    if (feedbackInput.value.trim() === "") {
        valid = false;
        feedbackError.textContent = "Feedback is required";
    } else {
        feedbackError.textContent = "";
    }

    return valid;
}