// ==========================================
// SumPilot AI
// Main JavaScript File
// Version 1.0
// ==========================================

console.log("SumPilot AI Loaded Successfully");

// ==========================================
// GET ELEMENTS
// ==========================================

const generatePromptBtn = document.getElementById("generatePrompt");
const promptOutput = document.getElementById("promptOutput");

const generateScriptBtn = document.getElementById("generateScript");
const scriptOutput = document.getElementById("scriptOutput");

const generateThumbnailBtn = document.getElementById("generateThumbnail");
const thumbnailOutput = document.getElementById("thumbnailOutput");

const generateBlogBtn = document.getElementById("generateBlog");
const blogOutput = document.getElementById("blogOutput");

// ==========================================
// FREE PLAN LIMIT
// ==========================================

let freeUses = 2;

function checkLimit() {

    if (freeUses <= 0) {

        alert("Free limit finished. Upgrade to Premium.");

        return false;
    }

    freeUses--;

    return true;

}

// ==========================================
// AI PROMPTS
// ==========================================

const prompts = [

"Write a viral YouTube video about AI.",

"Create an Instagram Reel script.",

"Write a motivational Hindi story.",

"Generate a luxury car thumbnail prompt.",

"Create a business advertisement prompt.",

"Write an AI blog outline.",

"Generate an educational YouTube script idea.",

"Create a cinematic movie trailer prompt."

];
// ==========================================
// YOUTUBE SCRIPTS
// ==========================================

const scripts = [

`Title: Top 5 AI Tools

Intro:
Today we will explore the best AI tools that can save hours every day.

Point 1:
ChatGPT

Point 2:
Canva AI

Point 3:
CapCut AI

Ending:
Like, Share and Subscribe!`,

`Title: Earn Money Online

Intro:
Let's discover AI-powered online income ideas.

Point 1:
Freelancing

Point 2:
YouTube

Point 3:
Affiliate Marketing

Ending:
Subscribe for more earning tips.`

];

// ==========================================
// THUMBNAIL PROMPTS
// ==========================================

const thumbnails = [

"Ultra realistic YouTube thumbnail, golden sports car, cinematic lighting, 8K, dramatic colors.",

"Indian businessman holding cash, AI futuristic city background, viral thumbnail, HDR.",

"Poor boy becoming IAS officer, emotional, realistic, ultra detailed, YouTube thumbnail."

];

// ==========================================
// BLOGS
// ==========================================

const blogs = [

`Artificial Intelligence is changing the future of work.
AI tools help creators generate content faster, improve productivity and save time.`,

`Online earning in 2026 is growing rapidly.
YouTube, freelancing and AI tools are creating new opportunities for everyone.`

];

// ==========================================
// RANDOM GENERATOR
// ==========================================

function randomItem(array){

return array[Math.floor(Math.random()*array.length)];

}
// AI Prompt Generator
function generatePrompt() {
    let topic = document.getElementById("topic").value;

    if (topic === "") {
        alert("कृपया अपना topic लिखें");
        return;
    }

    let result = 
    "आपके topic: " + topic + 
    " के लिए एक शानदार AI prompt:\n\n" +
    "Create a detailed, creative and professional content about " + topic +
    ". Make it engaging, unique and high quality.";

    document.getElementById("output").innerText = result;
}


// YouTube Script Generator
function generateScript() {
    let title = document.getElementById("title").value;

    if (title === "") {
        alert("कृपया video title लिखें");
        return;
    }

    let script =
    "Video Title: " + title + "\n\n" +
    "Introduction:\nआज हम बात करेंगे " + title + " के बारे में।\n\n" +
    "Main Content:\nइस विषय पर पूरी जानकारी और रोचक बातें।\n\n" +
    "Ending:\nअगर आपको वीडियो पसंद आया तो Like और Subscribe करें।";

    document.getElementById("output").innerText = script;
}
function generateBlog() {
    alert("AI Blog Writer जल्द ही आपका blog तैयार करेगा!");
}


function generateThumbnail() {
    alert("AI Thumbnail Prompt Generator शुरू हो गया!");
}


function generateCaption() {
    alert("AI Caption Generator शुरू हो गया!");
}