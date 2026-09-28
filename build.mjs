import {mkdir,cp,copyFile} from "node:fs/promises";
await mkdir("vendor/pdfjs",{recursive:true});await mkdir("vendor/tesseract",{recursive:true});
await copyFile("node_modules/pdfjs-dist/build/pdf.min.mjs","vendor/pdfjs/pdf.min.mjs");await copyFile("node_modules/pdfjs-dist/build/pdf.worker.min.mjs","vendor/pdfjs/pdf.worker.min.mjs");
await copyFile("node_modules/tesseract.js/dist/tesseract.min.js","vendor/tesseract/tesseract.min.js");await cp("node_modules/tesseract.js-core","vendor/tesseract/core",{recursive:true});
console.log("Local PDF/OCR browser assets prepared.");
