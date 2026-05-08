async function getQuote() {
    try {
        const response = await fetch("https://api.quotable.io/random");
        const data = await response.json();

        document.getElementById("quote").textContent = `"${data.content}"`;
        document.getElementById("author").textContent = `- ${data.author}`;
    } catch (error) {
        document.getElementById("quote").textContent =
            "Failed to fetch quote.";
    }
}

// Load a quote initially
getQuote();