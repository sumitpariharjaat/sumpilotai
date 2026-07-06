console.log("SumPilot AI Loaded Successfully!");

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
const thumbnailBtn = document.getElementById("generateThumbnail");
const thumbnailOutput = document.getElementById("thumbnailOutput");

const thumbnailPrompts = [

"Ultra realistic YouTube thumbnail, shocked Indian grandfather holding a glowing golden apple, magical energy, luxury golden SUV appearing, cinematic lighting, vibrant colors, 8K.",

"Ultra realistic businessman holding bundles of cash, futuristic AI city background, dramatic lighting, viral YouTube thumbnail, high contrast, 8K.",

"Poor boy transforming into IAS officer, emotional cinematic scene, luxury office, realistic, ultra detailed, YouTube thumbnail."

];

if(thumbnailBtn){

thumbnailBtn.addEventListener("click",function(){

const random =
thumbnailPrompts[Math.floor(Math.random()*thumbnailPrompts.length)];

thumbnailOutput.value = random;

});

}
const generateScriptBtn = document.getElementById("generateScript");
const scriptOutput = document.getElementById("scriptOutput");

if (generateScriptBtn) {

    generateScriptBtn.addEventListener("click", function () {

        const topic = document.getElementById("videoTopic").value;
        const language = document.getElementById("language").value;

        if (topic === "") {
            alert("Please enter a video topic.");
            return;
        }

        let script = "";

        if (language === "Hindi") {

            script =
`🎬 वीडियो विषय: ${topic}

नमस्कार दोस्तों!

आज की इस वीडियो में हम बात करेंगे "${topic}" के बारे में।

इस वीडियो में आप जानेंगे:
✅ यह क्या है?
✅ इसका उपयोग कैसे करें?
✅ इससे क्या फायदे होंगे?

अगर वीडियो पसंद आए तो Like करें, Share करें और Channel को Subscribe करना न भूलें।`;

        } else {

            script =
`🎬 Video Topic: ${topic}

Hello Everyone!

Today we are going to talk about "${topic}".

In this video you will learn:
✅ What it is
✅ How to use it
✅ Its benefits

If you enjoyed this video, don't forget to Like, Share and Subscribe.`;

        }

        scriptOutput.value = script;

    });

}
