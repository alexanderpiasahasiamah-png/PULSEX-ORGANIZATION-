function analyze() {
    const input = document.getElementById("userInput").value;
    const response = document.getElementById("response");

    if (input.trim() === "") {
        response.innerHTML = "Please enter your symptoms.";
        return;
    }

    response.innerHTML = "Possible causes may include infection, stress, fatigue, or minor illness. Please consult a healthcare professional for accurate diagnosis.";
}
