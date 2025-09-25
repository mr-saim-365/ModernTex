import sharp from "sharp";
import fs from "fs";
import path from "path";

const inputDir = "./src/assets/Man";
const outputDir = "./src/assets/Man-webp";

if (!fs.existsSync(outputDir)) fs.mkdirSync(outputDir);

fs.readdirSync(inputDir).forEach(file => {
  if (/\.(jpg|jpeg|png)$/i.test(file)) {
    const inputPath = path.join(inputDir, file);
    const outputPath = path.join(outputDir, file.replace(/\.(jpg|jpeg|png)$/i, ".webp"));

    sharp(inputPath)
      .webp({ quality: 75 })
      .toFile(outputPath)
      .then(() => console.log(`✅ Converted: ${file} → ${path.basename(outputPath)}`))
      .catch(err => console.error(`❌ Error converting ${file}:`, err));
  }
});
