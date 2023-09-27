const coverLetterPart = document.querySelector(".cover-letter");

const sectionsPresentation = document.querySelectorAll(".section-presentation");
const visiblePartCoverLetter = document.querySelector(".visible-cover-letter");
const invisiblePartCoverLetter = document.querySelector(".invisible-cover-letter");
const crossCoverLetter = document.querySelector(".cross-cover-letter");
let coverLetter = 1;
const visiblePartCV = document.querySelector(".visible-cv");
const invisiblePartCV = document.querySelector(".invisible-cv");
const crossCV = document.querySelector(".cross-cv");
let cv = 1;

let invisiblePartCoverLetterStyle = getComputedStyle(invisiblePartCoverLetter);
let invisiblePartCoverLetterHeight = parseInt(invisiblePartCoverLetterStyle.height) + parseInt(invisiblePartCoverLetterStyle.paddingBottom) + parseInt(invisiblePartCoverLetterStyle.paddingTop);
let invisiblePartCVStyle = getComputedStyle(invisiblePartCV);
let invisiblePartCVHeight = parseInt(invisiblePartCVStyle.height) + parseInt(invisiblePartCVStyle.paddingBottom) + parseInt(invisiblePartCVStyle.paddingTop);

coverLetterPart.style.marginTop = `-${invisiblePartCVHeight - 20}px`;


sectionsPresentation.forEach(section => {
    section.addEventListener("click", () => {
        if (section.classList.contains("cover-letter")) {
            if (coverLetter === 1) {
                crossCoverLetter.style.transform = "translate(-50%, -50%) rotate(90deg)";
                invisiblePartCoverLetter.style.clipPath = "inset(0 0 0 0)";
                section.style.marginBottom = `35px`;
                visiblePartCoverLetter.style.borderRadius = "20px 20px 0 0";
                coverLetter = 2;
            } else {
                crossCoverLetter.style.transform = "translate(-50%, -50%)";
                invisiblePartCoverLetter.style.clipPath = "inset(0 0 100% 0)";
                section.style.marginBottom = "0";
                visiblePartCoverLetter.style.borderRadius = "20px";
                coverLetter = 1;
            }
        };
        if (section.classList.contains("cv")) {
            if (cv === 1) {
                crossCV.style.transform = "translate(-50%, -50%) rotate(90deg)";
                invisiblePartCV.style.clipPath = "inset(0 0 0 0)";
                section.style.marginBottom = `${invisiblePartCVHeight + 20}px`;
                visiblePartCV.style.borderRadius = "20px 20px 0 0";
                cv = 2;
            } else {
                crossCV.style.transform = "translate(-50%, -50%)";
                invisiblePartCV.style.clipPath = "inset(0 0 100% 0)";
                section.style.marginBottom = `0`;
                visiblePartCV.style.borderRadius = "20px";
                cv = 1;
            };
        };
    });
});