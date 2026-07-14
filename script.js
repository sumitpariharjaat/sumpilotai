// ============================
// SUMPILOT AI - SCRIPT PART 1
// ============================

// AI Prompt Generator

const promptBtn = document.getElementById("generatePrompt");

if (promptBtn) {

    promptBtn.addEventListener("click", function () {

        const topic = document.getElementById("promptTopic").value.trim();

        const output = document.getElementById("promptOutput");

        if (topic === "") {
            output.value = "Please enter a topic.";
            return;
        }

        output.value =
`Write a detailed AI prompt about "${topic}".

Include:
- High quality result
- Creative ideas
- Professional style
- Easy to understand
- SEO optimized`;

    });

}



// ============================
// YouTube Script Generator
// ============================

const scriptBtn = document.getElementById("generateScript");

if (scriptBtn) {

    scriptBtn.addEventListener("click", function () {

        const topic = document.getElementById("videoTopic").value.trim();

        const output = document.getElementById("scriptOutput");

        if (topic === "") {
            output.value = "Please enter a video topic.";
            return;
        }

        output.value =
`🎬 YouTube Script

Title:
${topic}

Introduction:
Welcome everyone...

Main Content:
Explain the topic in simple language.

Ending:
Like, Share & Subscribe.`;

    });

}
// ============================
// Thumbnail Prompt Generator
// ============================

const thumbnailBtn = document.getElementById("generateThumbnail");

if (thumbnailBtn) {

    thumbnailBtn.addEventListener("click", function () {

        const topic = document.getElementById("thumbnailTopic").value.trim();

        const output = document.getElementById("thumbnailOutput");

        if (topic === "") {
            output.value = "Please enter a thumbnail topic.";
            return;
        }

        output.value =
`Create a cinematic YouTube thumbnail for "${topic}".

Style:
- Ultra HD
- Bright colors
- High contrast
- Click-worthy
- Professional YouTube look`;

    });

}


// ============================
// Blog Generator
// ============================

const blogBtn = document.getElementById("generateBlog");

if (blogBtn) {

    blogBtn.addEventListener("click", function () {

        const topic = document.getElementById("blogTopic").value.trim();

        const output = document.getElementById("blogOutput");

        if (topic === "") {
            output.value = "Please enter a blog topic.";
            return;
        }

        output.value =
`📝 Blog Title:
${topic}

Introduction:
This article explains everything about ${topic}.

Main Points:
• Point 1
• Point 2
• Point 3

Conclusion:
Thank you for reading.`;

    });

}
// ============================
// SUMPILOT AI - SCRIPT PART 3
// ============================

console.log("✅ SumPilot AI Loaded Successfully!");


// Smooth Scroll

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function (e) {

        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        if (target) {
            target.scrollIntoView({
                behavior: "smooth"
            });
        }

    });

});


// Premium Button

const premiumBtn = document.querySelector("#pricing .btn-primary");

if (premiumBtn) {

    premiumBtn.addEventListener("click", function () {

        alert("🚀 Premium Version Coming Soon!");

    });

}


// Contact Button

const sendBtn = document.getElementById("sendMessage");

if (sendBtn) {

    sendBtn.addEventListener("click", function () {

        alert("✅ Thank you! Your message has been received.");

    });

}