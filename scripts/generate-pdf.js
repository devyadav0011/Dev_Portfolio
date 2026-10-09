// Script to generate a standards-compliant PDF resume for Dev Kumar
const fs = require('fs');
const path = require('path');

function createPdf() {
  const content = [
    "%PDF-1.4",
    "1 0 obj",
    "<< /Type /Catalog /Pages 2 0 R >>",
    "endobj",
    "2 0 obj",
    "<< /Type /Pages /Kids [3 0 R] /Count 1 >>",
    "endobj",
    "3 0 obj",
    "<< /Type /Page /Parent 2 0 R /MediaBox [0 0 595.28 841.89] /Resources << /Font << /F1 4 0 R /F2 5 0 R >> >> /Contents 6 0 R >>",
    "endobj",
    "4 0 obj",
    "<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica-Bold >>",
    "endobj",
    "5 0 obj",
    "<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica >>",
    "endobj"
  ];

  // PDF Text stream
  const textStream = `
BT
/F1 22 Tf
50 790 Td
(DEV KUMAR) Tj
ET
BT
/F1 11 Tf
50 770 Td
(Developer | Founder of NIMBLUX | B.Tech CSE Student) Tj
ET
BT
/F2 9.5 Tf
50 752 Td
(Agra, UP, India  |  dev@nimblux.xyz  |  github.com/devyadav0011  |  linkedin.com/in/devxcoder) Tj
ET
BT
/F1 12 Tf
50 720 Td
(EDUCATION) Tj
ET
BT
/F1 10 Tf
50 702 Td
(FET Agra College - B.Tech in Computer Science & Engineering) Tj
ET
BT
/F2 9.5 Tf
50 688 Td
(2025 - 2029  |  Agra, Uttar Pradesh) Tj
ET
BT
/F2 9 Tf
50 674 Td
(Coursework: Data Structures, Algorithms, Software Engineering, Web Systems, AI Fundamentals.) Tj
ET
BT
/F1 12 Tf
50 642 Td
(LEADERSHIP & STARTUP EXPERIENCE) Tj
ET
BT
/F1 10 Tf
50 624 Td
(Founder - NIMBLUX (nimblux.xyz)) Tj
ET
BT
/F2 9.5 Tf
50 610 Td
(2024 - Present) Tj
ET
BT
/F2 9 Tf
50 596 Td
(- Founded and grew an active tech student community to 5000+ members across digital platforms.) Tj
ET
BT
/F2 9 Tf
50 582 Td
(- Directed the flagship ORVIX Hackathon with 600+ teams participating across engineering colleges.) Tj
ET
BT
/F2 9 Tf
50 568 Td
(- Established campus ambassador programs and conducted tech bootcamps on Web Dev & Git.) Tj
ET
BT
/F1 12 Tf
50 536 Td
(FEATURED PROJECTS) Tj
ET
BT
/F1 10 Tf
50 518 Td
(CareerLense (careerlense.xyz) - AI Resume Analyzer & ATS Platform) Tj
ET
BT
/F2 9 Tf
50 504 Td
(- Engineered an AI platform providing resume analysis, score breakdowns, and career suggestions.) Tj
ET
BT
/F2 9 Tf
50 490 Td
(- Next.js App Router, TypeScript, Tailwind CSS, OpenAI LLM API, Node.js, PostgreSQL) Tj
ET
BT
/F1 10 Tf
50 468 Td
(Gemini Watermark Remover - Open Source Computer Vision Tool) Tj
ET
BT
/F2 9 Tf
50 454 Td
(- Automated Python utility leveraging OpenCV inpainting to clean watermarks from AI media.) Tj
ET
BT
/F2 9 Tf
50 440 Td
(- Python, OpenCV Inpainting, NumPy, Image Processing, Open Source) Tj
ET
BT
/F1 10 Tf
50 418 Td
(WallPC / Nimwall - 4K Desktop Wallpaper Platform) Tj
ET
BT
/F2 9 Tf
50 404 Td
(- Zero-ad wallpaper discovery portal with high-resolution curation and responsive design.) Tj
ET
BT
/F2 9 Tf
50 390 Td
(- React, Next.js, Tailwind CSS, REST APIs, Image Optimization) Tj
ET
BT
/F1 12 Tf
50 358 Td
(TECHNICAL SKILLS) Tj
ET
BT
/F2 9 Tf
50 340 Td
(Languages: TypeScript, JavaScript, Python, HTML5, CSS3, SQL) Tj
ET
BT
/F2 9 Tf
50 326 Td
(Frontend: React 19, Next.js (App Router), Tailwind CSS v4, Framer Motion) Tj
ET
BT
/F2 9 Tf
50 312 Td
(Backend & DB: Node.js, Express, Next.js API Routes, PostgreSQL, MongoDB, RESTful APIs) Tj
ET
BT
/F2 9 Tf
50 298 Td
(AI & Vision: OpenAI API, Gemini API, OpenCV Inpainting, NLP, Speech Recognition) Tj
ET
BT
/F2 9 Tf
50 284 Td
(Tools & Ecosystem: Git, GitHub, Vercel, VS Code, Postman, Linux CLI) Tj
ET
`;

  const streamLength = Buffer.byteLength(textStream, 'utf8');

  const streamObj = [
    "6 0 obj",
    `<< /Length ${streamLength} >>`,
    "stream",
    textStream.trim(),
    "endstream",
    "endobj"
  ];

  const allObjs = [...content, ...streamObj];

  let body = "%PDF-1.4\n";
  const xref = ["xref", "0 7", "0000000000 65535 f "];

  let offset = body.length;

  for (let i = 1; i < allObjs.length; i += 3) {
    // We calculate offsets
  }

  // Construct standard valid PDF buffer cleanly:
  const pdfBody = `%PDF-1.4
1 0 obj
<< /Type /Catalog /Pages 2 0 R >>
endobj
2 0 obj
<< /Type /Pages /Kids [3 0 R] /Count 1 >>
endobj
3 0 obj
<< /Type /Page /Parent 2 0 R /MediaBox [0 0 595.28 841.89] /Resources << /Font << /F1 4 0 R /F2 5 0 R >> >> /Contents 6 0 R >>
endobj
4 0 obj
<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica-Bold >>
endobj
5 0 obj
<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica >>
endobj
6 0 obj
<< /Length ${Buffer.byteLength(textStream.trim())} >>
stream
${textStream.trim()}
endstream
endobj
xref
0 7
0000000000 65535 f 
0000000009 00000 n 
0000000058 00000 n 
0000000115 00000 n 
0000000266 00000 n 
0000000340 00000 n 
0000000409 00000 n 
trailer
<< /Size 7 /Root 1 0 R >>
startxref
${409 + Buffer.byteLength(textStream.trim()) + 60}
%%EOF
`;

  return Buffer.from(pdfBody);
}

const pdfBuffer = createPdf();
const publicDir = path.join(__dirname, '..', 'public');
fs.writeFileSync(path.join(publicDir, 'dev-yadav-resume.pdf'), pdfBuffer);
fs.writeFileSync(path.join(publicDir, 'dev-kumar-resume.pdf'), pdfBuffer);
console.log('PDF resume successfully written to public/dev-yadav-resume.pdf and public/dev-kumar-resume.pdf');
