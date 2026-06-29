// CreatorBoost AI

console.log("CreatorBoost AI Loaded Successfully!");

const button = document.querySelector(".btn");

if(button){

button.addEventListener("click", function(){

document.getElementById("tools").scrollIntoView({
    behavior: "smooth"

});

}
const promptButton = document.getElementById("generatePrompt");
const promptOutput = document.getElementById("promptOutput");

if (promptButton) {

    promptButton.addEventListener("click", function () {

        const prompts = [

`Write a professional YouTube script about earning money online in 2026.`,

`Create a viral YouTube Shorts script on AI tools for beginners.`,

`Write a high CTR thumbnail prompt for an emotional story video.`,

`Create a 30-second motivational story in Hindi.`,

`Write a blog article about the best AI tools for content creators.`

        ];

        const randomPrompt = prompts[Math.floor(Math.random() * prompts.length)];

        promptOutput.value = randomPrompt;

    });

}
