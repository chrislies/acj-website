const { exec } = require("child_process");
const path = require("path");
const fs = require("fs");

const inputDirectory = "public/images";
const outputDirectory = "public/compressed_images";

// Create the output directory if it doesn't exist
if (!fs.existsSync(outputDirectory)) {
  fs.mkdirSync(outputDirectory);
}

exec(
  `for file in ${inputDirectory}/*; do cwebp "$file" -o "${outputDirectory}/$(basename "$file" | cut -f 1 -d '.').webp"; done`,
  (error, stdout, stderr) => {
    if (error) {
      console.error(`Error: ${error.message}`);
      return;
    }
    if (stderr) {
      console.error(`Error: ${stderr}`);
      return;
    }
    console.log(stdout);
  }
);
