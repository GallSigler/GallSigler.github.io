// Tasks
// fix button hover inherit delay 

// SCRIPT
const projects = document.getElementById("projects")
const resume = document.getElementById("resume")
const writing = document.getElementById("writing")
const writingJournalism = document.getElementById("writing-journalism")
const writingAcademic = document.getElementById("writing-academic")
const writingBlock = document.getElementById("writing-text")
const projectsBlock = document.getElementById("project-text")


//function to open a new page
function pageMove(path){
    window.open(path, '_blank');
}


let writingcounter=0; 
let projectscounter=0; 

//FIRST BUTTONS LOGIC
const buttonsContainer=document.getElementById("buttons-container"); 

buttonsContainer.addEventListener("click", function(e){ 
    //console.log(e.target + "click"); 
    const temp = e.target.getAttribute('id'); 
    //console.log(temp);

    // RESUME TREATMENT
    if (temp=="resume"){
        pageMove("resume-2026.pdf");
    }

    // WRITING TREATMENT 

    if (temp=="writing"){

        //First remove visibility of projects if it is on
        if (projectsBlock.classList.contains("visible")){
            projectsBlock.classList.remove("visible");
            projectsBlock.classList.add("invisible");
            projectscounter=0;    
        }

        writingcounter+=1; 

        if (writingcounter==1){
            //when it first happens make visible
            writingBlock.classList.remove("invisible");
            writingBlock.classList.add("visible");
        }

        if (writingcounter==2){
            //when you click 2 times it becomes invisible again and resets
            writingBlock.classList.remove("visible");
            writingBlock.classList.add("invisible");
            writingcounter=0; 
        }
        console.log(writingcounter);
    }

    // PROJECTS TREATMENT

    if (temp=="projects"){

        //First remove visibility of writing if it is on
        if (writingBlock.classList.contains("visible")){
            writingBlock.classList.remove("visible");
            writingBlock.classList.add("invisible");
            writingcounter=0;    
        }

        projectscounter+=1; 

        if (projectscounter==1){
            //when it first happens make visible
            projectsBlock.classList.remove("invisible");
            projectsBlock.classList.add("visible");
        }

        if (projectscounter==2){
            //when you click 2 times it becomes invisible again and resets
            projectsBlock.classList.remove("visible");
            projectsBlock.classList.add("invisible");
            projectscounter=0; 
        }
        console.log(projectscounter);
    }
})

// BACK BUTTONS LOGIC 

const backWriting=document.getElementById("writing-back-button")

backWriting.addEventListener("click", function() {
    console.log("back clicked");
    writingBlock.classList.remove("visible");
    writingBlock.classList.add("invisible");
    writingcounter=0; 
}
)

// MOUSE HOVER/LEAVE LOGIC 

resume.addEventListener("mouseover", function(e) {
    //console.log(e.target + "hover");
    const temp = e.target.getAttribute('id'); 
    //console.log(temp); 
    e.target.style.background = '#FADADD'; 
    e.target.style.fontWeight = 'bold'; 
}
)

resume.addEventListener("mouseleave", function(e) {
    //console.log(e.target + "leave");
    const temp = e.target.getAttribute('id'); 
    //console.log(temp); 
    e.target.style.background = 'white'; 
    e.target.style.fontWeight = 'normal'; 
}
)

writing.addEventListener("mouseover", function(e) {
    //console.log(e.target + "hover");
    const temp = e.target.getAttribute('id'); 
    //console.log(temp); 
    e.target.style.background = '#FADADD'; 
    e.target.style.fontWeight = 'bold'; 
}
)

writing.addEventListener("mouseleave", function(e) {
    //console.log(e.target + "leave");
    const temp = e.target.getAttribute('id'); 
    //console.log(temp); 
    e.target.style.background = 'white'; 
    e.target.style.fontWeight = 'normal'; 
}
)

projects.addEventListener("mouseover", function(e) {
    //console.log(e.target + "hover");
    const temp = e.target.getAttribute('id'); 
    //console.log(temp); 
    e.target.style.background = '#FADADD'; 
    e.target.style.fontWeight = 'bold'; 
}
)

projects.addEventListener("mouseleave", function(e) {
    //console.log(e.target + "leave");
    const temp = e.target.getAttribute('id'); 
    //console.log(temp); 
    e.target.style.background = 'white'; 
    e.target.style.fontWeight = 'normal'; 
}
)

// BUTTONS EMBEDDED IN WRITING

writingAcademic.addEventListener("mouseover", function(e) {
    //console.log(e.target + "hover");
    const temp = e.target.getAttribute('id'); 
    //console.log(temp); 
    e.target.style.background = '#FADADD'; 
    e.target.style.fontWeight = 'bold'; 
}
)

writingAcademic.addEventListener("mouseleave", function(e) {
    //console.log(e.target + "leave");
    const temp = e.target.getAttribute('id'); 
    //console.log(temp); 
    e.target.style.background = 'white'; 
    e.target.style.fontWeight = 'normal'; 
}
)

writingJournalism.addEventListener("mouseover", function(e) {
    //console.log(e.target + "hover");
    const temp = e.target.getAttribute('id'); 
    //console.log(temp); 
    e.target.style.background = '#FADADD'; 
    e.target.style.fontWeight = 'bold'; 
}
)

writingJournalism.addEventListener("mouseleave", function(e) {
    //console.log(e.target + "leave");
    const temp = e.target.getAttribute('id'); 
    //console.log(temp); 
    e.target.style.background = 'white'; 
    e.target.style.fontWeight = 'normal'; 
}
)

const journalismPublications = document.getElementById("journalism-publications");

writingJournalism.addEventListener("click", function() {
    if (journalismPublications.classList.contains("invisible")) {
        journalismPublications.classList.remove("invisible");
        journalismPublications.classList.add("visible");
    } else {
        journalismPublications.classList.remove("visible");
        journalismPublications.classList.add("invisible");
    }
});