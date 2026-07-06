console.log("SumPilot AI Loaded Successfully!");

// Hero Button Scroll
const heroBtn = document.querySelector(".btn");

if (heroBtn) {
    heroBtn.addEventListener("click", function (e) {
        e.preventDefault();

        const tools = document.getElementById("tools");

        if (tools) {
            tools.scrollIntoView({
                behavior: "smooth"
            });
        }
    });
}

// AI Prompt Generator
const generatePromptBtn = document.getElementById("generatePrompt");
const promptOutput = document.getElementById("promptOutput");

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

if (generatePromptBtn) {

    generatePromptBtn.addEventListener("click", function () {

        const randomPrompt =
            prompts[Math.floor(Math.random() * prompts.length)];

        promptOutput.value = randomPrompt;

    });

}

// YouTube Script Generator
const generateScriptBtn = document.getElementById("generateScript");
const scriptOutput = document.getElementById("scriptOutput");

if (generateScriptBtn) {

    generateScriptBtn.addEventListener("click", function () {

        const topic = document.getElementById("videoTopic").value;
        const language = document.getElementById("language").value;

        if (topic.trim() === "") {
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

✅ Benefits

Don't forget to Like, Share and Subscribe.`;

        }

        scriptOutput.value = script;

    });

}
