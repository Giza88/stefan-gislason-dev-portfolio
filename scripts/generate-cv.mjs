import fs from "node:fs";
import path from "node:path";

const lines = [
  "Stefan Gislason",
  "IT Support Professional & Emerging Developer",
  "",
  "Email: stefangislason@outlook.com",
  "LinkedIn: linkedin.com/in/stefan-gislason",
  "GitHub: github.com/Giza88",
  "",
  "SUMMARY",
  "Early-career IT professional with hands-on experience in onboarding,",
  "troubleshooting, and digital systems. Built AI-driven tools and modern",
  "web projects with a user-focused, communication-first approach.",
  "",
  "EXPERIENCE",
  "Datacom - IT Intern (ANZ Application Services)",
  "Built an AI-driven newsletter aggregating RSS feeds for staff updates.",
  "",
  "CityFitness - IT Support / Customer Support",
  "Supported users with troubleshooting, access, and digital systems.",
  "",
  "PawMatch - Independent Developer",
  "Built user-facing features, UI/UX improvements, testing, deployment.",
  "",
  "SKILLS",
  "IT Support, MFA & Access Management, HTML/CSS, GitHub, AI Tools,",
  "React, Next.js, TypeScript, Communication, Problem-solving.",
];

function escapePdfText(value) {
  return value.replace(/\\/g, "\\\\").replace(/\(/g, "\\(").replace(/\)/g, "\\)");
}

const contentLines = ["BT", "/F1 12 Tf", "50 760 Td"];

lines.forEach((line, index) => {
  if (index === 0) {
    contentLines.push(`(${escapePdfText(line)}) Tj`);
  } else {
    contentLines.push("-14 Td");
    contentLines.push(`(${escapePdfText(line)}) Tj`);
  }
});

contentLines.push("ET");

const stream = contentLines.join("\n");
const streamLength = Buffer.byteLength(stream, "utf8");

const objects = [
  "1 0 obj\n<< /Type /Catalog /Pages 2 0 R >>\nendobj\n",
  "2 0 obj\n<< /Type /Pages /Kids [3 0 R] /Count 1 >>\nendobj\n",
  "3 0 obj\n<< /Type /Page /Parent 2 0 R /MediaBox [0 0 612 792] /Resources << /Font << /F1 4 0 R >> >> /Contents 5 0 R >>\nendobj\n",
  "4 0 obj\n<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica >>\nendobj\n",
  `5 0 obj\n<< /Length ${streamLength} >>\nstream\n${stream}\nendstream\nendobj\n`,
];

let pdf = "%PDF-1.4\n";
const offsets = [0];

for (const object of objects) {
  offsets.push(Buffer.byteLength(pdf, "utf8"));
  pdf += object;
}

const xrefPosition = Buffer.byteLength(pdf, "utf8");
pdf += "xref\n";
pdf += `0 ${objects.length + 1}\n`;
pdf += "0000000000 65535 f \n";

for (let index = 1; index <= objects.length; index += 1) {
  pdf += `${String(offsets[index]).padStart(10, "0")} 00000 n \n`;
}

pdf += "trailer\n";
pdf += `<< /Size ${objects.length + 1} /Root 1 0 R >>\n`;
pdf += "startxref\n";
pdf += `${xrefPosition}\n`;
pdf += "%%EOF\n";

const outputPath = path.join(process.cwd(), "public", "stefan-gislason-cv.pdf");
fs.writeFileSync(outputPath, pdf, "utf8");
console.log(`Created ${outputPath}`);
