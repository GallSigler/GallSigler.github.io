// Navigation Triggers
const projectsBtn = document.getElementById("projects");
const writingBtn = document.getElementById("writing");
const journalismBtn = document.getElementById("journalism-btn");
const academicBtn = document.getElementById("academic-btn");
const globalBackBtn = document.getElementById("global-back-btn");

// View Container DOM Nodes
const lowerDrawer = document.getElementById("dynamic-lower-drawer");
const projectsContent = document.getElementById("projects-content");
const writingMenu = document.getElementById("writing-menu");
const journalismContent = document.getElementById("journalism-content");
const academicContent = document.getElementById("academic-content");

// Global Navigation State Tracker
let currentView = "closed"; 

function clearAllViews() {
    projectsContent.classList.add("invisible");
    writingMenu.classList.add("invisible");
    journalismContent.classList.add("invisible");
    academicContent.classList.add("invisible");
}

// Top Menu Operations
projectsBtn.addEventListener("click", function() {
    clearAllViews();
    lowerDrawer.classList.remove("invisible");
    lowerDrawer.classList.add("visible");
    projectsContent.classList.remove("invisible");
    currentView = "projects";
});

writingBtn.addEventListener("click", function() {
    clearAllViews();
    lowerDrawer.classList.remove("invisible");
    lowerDrawer.classList.add("visible");
    writingMenu.classList.remove("invisible");
    currentView = "writing-main";
});

// Deep Submenu Controls (Journalism / Academic)
journalismBtn.addEventListener("click", function() {
    clearAllViews();
    journalismContent.classList.remove("invisible");
    currentView = "journalism-list";
});

academicBtn.addEventListener("click", function() {
    clearAllViews();
    academicContent.classList.remove("invisible");
    currentView = "academic-list";
});

// Dynamic Back Navigation Handler Block
globalBackBtn.addEventListener("click", function() {
    if (currentView === "projects" || currentView === "writing-main") {
        lowerDrawer.classList.remove("visible");
        lowerDrawer.classList.add("invisible");
        clearAllViews();
        currentView = "closed";
    } else if (currentView === "journalism-list" || currentView === "academic-list") {
        clearAllViews();
        writingMenu.classList.remove("invisible");
        currentView = "writing-main";
    }
});

/* Cat Generator Module */
const randomPhotoBtn = document.getElementById("random-photo-btn");
const photoDisplayArea = document.getElementById("photo-display-area");

randomPhotoBtn.addEventListener("click", function() {
    const totalPhotosInFolder = 18; 
    const randomNumber = Math.floor(Math.random() * totalPhotosInFolder) + 1;
    const chosenPhoto = `gal${randomNumber}.jpg`;    
    
    photoDisplayArea.innerHTML = `
        <div style="margin-top: 15px; display: flex; justify-content: center; align-items: center; width: 100%;">
            <img src="gal-photos/${chosenPhoto}" alt="Cat Photo" style="width: 110px; height: 110px; object-fit: cover; border: 1px solid rgba(0,0,0,0.1); border-radius: 10px; box-shadow: 0 4px 12px rgba(0,0,0,0.05); display: block;">
        </div>
    `;
});