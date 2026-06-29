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
const scriptBtn = document.getElementById("generateScript");
const scriptOutput = document.getElementById("scriptOutput");

const scripts = [

`Title:
Top 5 AI Tools That Will Save You Hours Every Day

Intro:
Welcome back! Today we'll discover five amazing AI tools that can save your time and increase productivity.

Point 1:
ChatGPT for writing.

Point 2:
Canva AI for design.

Point 3:
CapCut AI for video editing.

Ending:
Like, Share and Subscribe for more AI tips!`,

`Title:
How to Earn Money Online in 2026

Intro:
Online earning is easier than ever with AI.

Point 1:
Freelancing

Point 2:
YouTube Automation

Point 3:
Affiliate Marketing

Ending:
Subscribe for daily online earning tips.`

];

if(scriptBtn){

scriptBtn.addEventListener("click",function(){

const randomScript =
scripts[Math.floor(Math.random()*scripts.length)];

scriptOutput.value = randomScript;

});

}
