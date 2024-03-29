const memeGenerateBtn = document.querySelector(".meme-generate-btn");
const memeImage = document.querySelector(".meme-generator img");
const memeTitle = document.querySelector(".meme-title");
const memeAuthor = document.querySelector(".meme-author");

const updateDetails = (url, title, author) => {
    memeImage.setAttribute("src", url);
    memeTitle.innerHTML = title;
    memeAuthor.innerHTML = `Meme Created By : ${author}`;
}
const generateMeme = () =>{
    fetch("https://meme-api.com/gimme/wholesomememes")
    .then((response)=> response.json())
    .then(data => {
        updateDetails(data.url, data.title, data.author);
    });
};

memeGenerateBtn.addEventListener('click', generateMeme);