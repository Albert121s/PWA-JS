document.addEventListener("DOMContentLoaded", () => {
    const mainContent = document.getElementById("main-content");

    const renderHome = () => {
        mainContent.innerHTML = `
            <h1 class="title">Cat Memes Gallery</h1>
            <div class="gallery">
                <img src="/images/meme1.jpg" alt="Meme 1">
                <img src="/images/meme2.jpg" alt="Meme 2">
                <img src="/images/meme3.jpg" alt="Meme 3">
            </div>
        `;
    };

    const renderAbout = () => {
        mainContent.innerHTML = `
            <h1 class="title">About Cat Memes App</h1>
            <p>This app is a simple PWA for viewing and sharing cat memes.</p>
        `;
    };

    const renderAddMeme = () => {
        mainContent.innerHTML = `
            <h1 class="title">Add a New Meme</h1>
            <form id="add-meme-form">
                <label for="meme-url">Meme URL:</label>
                <input type="url" id="meme-url" required>
                <label for="meme-desc">Description:</label>
                <input type="text" id="meme-desc" required>
                <button type="submit">Add Meme</button>
            </form>
        `;
        document.getElementById("add-meme-form").addEventListener("submit", (event) => {
            event.preventDefault();
            const url = document.getElementById("meme-url").value;
            const desc = document.getElementById("meme-desc").value;
            alert(`Meme added: ${desc}`);
        });
    };

    document.getElementById("home-link").addEventListener("click", renderHome);
    document.getElementById("about-link").addEventListener("click", renderAbout);
    document.getElementById("add-meme-link").addEventListener("click", renderAddMeme);

    renderHome();
});
