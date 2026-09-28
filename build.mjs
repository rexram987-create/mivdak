import {mkdir,cp,copyFile,rm} from "node:fs/promises";
await rm("public",{recursive:true,force:true});await mkdir("public/vendor/pdfjs",{recursive:true});await mkdir("public/vendor/tesseract",{recursive:true});await mkdir("public/vendor/tesseract/lang",{recursive:true});
for(const f of ["index.html","private.js","sw.js","manifest.webmanifest","icon.svg"])await copyFile(f,"public/"+f);
await copyFile("node_modules/pdfjs-dist/build/pdf.min.mjs","public/vendor/pdfjs/pdf.min.mjs");await copyFile("node_modules/pdfjs-dist/build/pdf.worker.min.mjs","public/vendor/pdfjs/pdf.worker.min.mjs");
await copyFile("node_modules/tesseract.js/dist/tesseract.min.js","public/vendor/tesseract/tesseract.min.js");await cp("node_modules/tesseract.js-core","public/vendor/tesseract/core",{recursive:true});await cp("node_modules/@tesseract.js-data/eng/4.0.0","public/vendor/tesseract/lang",{recursive:true});
console.log("Mivdak public build with local PDF/OCR assets prepared.");
