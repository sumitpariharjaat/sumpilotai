console.log("CreatorBoost AI Loaded Successfully!");

const button = document.querySelector(".btn");

if (button) {
    button.addEventListener("click", function (e) {
        e.preventDefault();

        document.getElementById("tools").scrollIntoView({
            behavior: "smooth"
        });
    });
}
const generateBtn = document.getElementById("generatePrompt");
const output = document.getElementById("promptOutput");

const prompts = [
"Write a viral YouTube script about AI earning.",
"Create a cinematic thumbnail prompt for a luxury car.",
"Write a motivational story in Hindi.",
"Generate a YouTube Shorts script on ChatGPT.",
"Create a thumbnail prompt with dramatic lighting.",
"Write a blog about online earning in 2026.",
"Generate an Instagram caption for AI tools.",
"Create a viral video idea for YouTube."
];

if(generateBtn){
generateBtn.addEventListener("click",function(){

const random =
prompts[Math.floor(Math.random()*prompts.length)];

output.value = random;

});
}
