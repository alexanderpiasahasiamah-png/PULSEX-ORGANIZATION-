async function analyze() {
    const input = document.getElementById("userInput").value;
    const response = document.getElementById("response");

    if (!input.trim()) {
        response.innerHTML = "Please enter your symptoms.";
        return;
    }

    response.innerHTML = "Analyzing...";

    const res = await fetch("http://localhost:5000/analyze", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ message: input })
    });

    const data = await res.json();
    response.innerHTML = data.reply;
}
