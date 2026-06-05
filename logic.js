const projects = document.getElementById("projects")
const writing = document.getElementById("writing")
const resume = document.getElementById("resume")
const writingJournalism = document.getElementById("writing-journalism")
const writingAcademic = document.getElementById("writing-academic")
const writingBlock = document.getElementById("writing-text")
const projectsBlock = document.getElementById("project-text")
const journalismPublications = document.getElementById("journalism-publications")
const academicPublications = document.getElementById("academic-publications")

function pageMove(path){
    window.open(path, '_blank');
}

let writingcounter=0; 
let projectscounter=0; 

const buttonsContainer=document.getElementById("buttons-container"); 

buttonsContainer.addEventListener("click", function(e){ 
    const temp = e.target.getAttribute('id'); 

    if (temp=="writing"){
        if (projectsBlock.classList.contains("visible")){
            projectsBlock.classList.remove("visible");
            projectsBlock.classList.add("invisible");
            projectscounter=0;    
        }

        writingcounter+=1; 

        if (writingcounter==1){
            writingBlock.classList.remove("invisible");
            writingBlock.classList.add("visible");
        }

        if (writingcounter==2){
            writingBlock.classList.remove("visible");
            writingBlock.classList.add("invisible");
            writingcounter=0; 
            journalismPublications.classList.remove("visible");
            journalismPublications.classList.add("invisible");
            academicPublications.classList.remove("visible");
            academicPublications.classList.add("invisible");
        }
    }

    if (temp=="projects"){
        if (writingBlock.classList.contains("visible")){
            writingBlock.classList.remove("visible");
            writingBlock.classList.add("invisible");
            writingcounter=0;    
            journalismPublications.classList.remove("visible");
            journalismPublications.classList.add("invisible");
            academicPublications.classList.remove("visible");
            academicPublications.classList.add("invisible");
        }

        projectscounter+=1; 

        if (projectscounter==1){
            projectsBlock.classList.remove("invisible");
            projectsBlock.classList.add("visible");
        }

        if (projectscounter==2){
            projectsBlock.classList.remove("visible");
            projectsBlock.classList.add("invisible");
            projectscounter=0; 
        }
    }
})

resume.addEventListener("click", function(e) {
    e.preventDefault();
    pageMove("resume-2026.pdf");
})

const backWriting=document.getElementById("writing-back-button")
backWriting.addEventListener("click", function() {
    writingBlock.classList.remove("visible");
    writingBlock.classList.add("invisible");
    writingcounter=0; 
    journalismPublications.classList.remove("visible");
    journalismPublications.classList.add("invisible");
    academicPublications.classList.remove("visible");
    academicPublications.classList.add("invisible");
})

const backProjects=document.getElementById("project-back-button")
backProjects.addEventListener("click", function() {
    projectsBlock.classList.remove("visible");
    projectsBlock.classList.add("invisible");
    projectscounter=0;
})

writing.addEventListener("mouseover", function(e) {
    e.target.style.background = '#FADADD'; 
    e.target.style.fontWeight = 'bold'; 
})

writing.addEventListener("mouseleave", function(e) {
    e.target.style.background = 'white'; 
    e.target.style.fontWeight = 'normal'; 
})

projects.addEventListener("mouseover", function(e) {
    e.target.style.background = '#FADADD'; 
    e.target.style.fontWeight = 'bold'; 
})

projects.addEventListener("mouseleave", function(e) {
    e.target.style.background = 'white'; 
    e.target.style.fontWeight = 'normal'; 
})

writingAcademic.addEventListener("mouseover", function(e) {
    e.target.style.background = '#FADADD'; 
    e.target.style.fontWeight = 'bold'; 
})

writingAcademic.addEventListener("mouseleave", function(e) {
    e.target.style.background = 'white'; 
    e.target.style.fontWeight = 'normal'; 
})

writingJournalism.addEventListener("mouseover", function(e) {
    e.target.style.background = '#FADADD'; 
    e.target.style.fontWeight = 'bold'; 
})

writingJournalism.addEventListener("mouseleave", function(e) {
    e.target.style.background = 'white'; 
    e.target.style.fontWeight = 'normal'; 
})

writingJournalism.addEventListener("click", function() {
    academicPublications.classList.remove("visible");
    academicPublications.classList.add("invisible");
    if (journalismPublications.classList.contains("invisible")) {
        journalismPublications.classList.remove("invisible");
        journalismPublications.classList.add("visible");
    } else {
        journalismPublications.classList.remove("visible");
        journalismPublications.classList.add("invisible");
    }
});

writingAcademic.addEventListener("click", function() {
    journalismPublications.classList.remove("visible");
    journalismPublications.classList.add("invisible");
    if (academicPublications.classList.contains("invisible")) {
        academicPublications.classList.remove("invisible");
        academicPublications.classList.add("visible");
    } else {
        academicPublications.classList.remove("visible");
        academicPublications.classList.add("invisible");
    }
});


// --- STANDALONE RANDOM PHOTO SELECTOR SYSTEM ---
const randomPhotoBtn = document.getElementById("random-photo-btn");
const photoDisplayArea = document.getElementById("photo-display-area");

// String names matching the exact filenames saved inside your 'gal-photos' folder directory
const photoGallery = [
    "photo1.png",
    "photo2.png",
    "photo3.png",
    "photo4.png",
    "photo5.png"
];

randomPhotoBtn.addEventListener("mouseover", function(e) {
    e.target.style.background = '#FADADD'; 
    e.target.style.fontWeight = 'bold'; 
});

randomPhotoBtn.addEventListener("mouseleave", function(e) {
    e.target.style.background = 'white'; 
    e.target.style.fontWeight = 'normal'; 
});

randomPhotoBtn.addEventListener("click", function() {
    const totalPhotosInFolder = 12; 
    const randomNumber = Math.floor(Math.random() * totalPhotosInFolder) + 1;
    const chosenPhoto = `gal${randomNumber}.jpg`;    
    
    photoDisplayArea.innerHTML = `
        <div style="margin-top: 15px; display: flex; justify-content: center;">
            <img src="gal-photos/${chosenPhoto}" alt="Random Selection" style="width: 110px; height: 110px; object-fit: cover; border: 1px solid rgba(0,0,0,0.3); border-radius: 10px; box-shadow: 0 4px 8px rgba(0,0,0,0.15);">
        </div>
    `;
});