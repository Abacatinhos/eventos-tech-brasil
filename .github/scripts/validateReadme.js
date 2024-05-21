const fs = require('fs');
const path = require('path');

const readmePath = path.join(__dirname, '../../README.md');
const fileContent = fs.readFileSync(readmePath, 'utf8');

const patterns = [
    { regex: /^- ((\d{2}|\d{2}(, \d{2})+ e \d{2}|(\d{2} e \d{2}))): \[.+\]\(.+\) - _[a-zA-Z].+\/[A-Z]{2}_ !\[(presencial|híbrido)\]$/, description: "Presencial/Híbrido Events" },
    { regex: /^- ((\d{2}|\d{2}(, \d{2})+ e \d{2}|(\d{2} e \d{2}))): \[.+\]\(.+\) !\[online\]$/, description: "Online Events" },
    { regex: /^- TBA: \[.+\]\(.+\) - _[a-zA-Z].+\/[A-Z]{2}_ !\[(presencial|híbrido)\]$/, description: "To Be Announcement (Presencial/Híbrido)"},
    { regex: /^- TBA: \[.+\]\(.+\) !\[online\]$/, description: "To Be Announcement (Online Events)"},
];

const months = [
    "JANEIRO", "FEVEREIRO", "MARÇO", "ABRIL", "MAIO", "JUNHO", "JULHO",
    "AGOSTO", "SETEMBRO", "OUTUBRO", "NOVEMBRO", "DEZEMBRO", "TBA",
];

let isValid = true;

months.forEach(month => {
    const startTag = `<!-- ${month}:START -->`;
    const endTag = `<!-- ${month}:END -->`;
    const startIndex = fileContent.indexOf(startTag) + startTag.length;
    const endIndex = fileContent.indexOf(endTag);

    if (startIndex > -1 && endIndex > -1) {
        const monthContent = fileContent.substring(startIndex, endIndex).split('\n').filter(line => line.trim().length > 0);
        monthContent.forEach((line, index) => {
            if (!patterns.some(pattern => pattern.regex.test(line.trim()))) {
                console.error(`Line ${index + 1} in ${month} does not match any known patterns: ${line.trim()}`);
                isValid = false;
            }
        });
    }
});

if (!isValid) {
    console.error("README.md validation failed.");
    process.exit(1);
} else {
    console.log("README.md validated successfully.");
}
