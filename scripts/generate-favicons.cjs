const sharp = require('sharp');
const toIco = require('to-ico');
const fs = require('fs/promises');
const path = require('path');

async function generateFavicons() {
  const svgPath = path.join(__dirname, '../public/favicon.svg');
  const publicDir = path.join(__dirname, '../public');

  console.log('Reading SVG from:', svgPath);

  // Read SVG
  const svgBuffer = await fs.readFile(svgPath);

  // Generate PNG outputs
  console.log('Generating apple-touch-icon.png (180x180)...');
  await sharp(svgBuffer, { density: 300 })
    .resize(180, 180)
    .png()
    .toFile(path.join(publicDir, 'apple-touch-icon.png'));

  console.log('Generating favicon-192.png (192x192)...');
  await sharp(svgBuffer, { density: 300 })
    .resize(192, 192)
    .png()
    .toFile(path.join(publicDir, 'favicon-192.png'));

  console.log('Generating favicon-512.png (512x512)...');
  await sharp(svgBuffer, { density: 300 })
    .resize(512, 512)
    .png()
    .toFile(path.join(publicDir, 'favicon-512.png'));

  // Generate favicon.ico (multi-resolution)
  console.log('Generating favicon.ico (16x16, 32x32, 48x48)...');
  const ico16 = await sharp(svgBuffer, { density: 300 })
    .resize(16, 16)
    .png()
    .toBuffer();

  const ico32 = await sharp(svgBuffer, { density: 300 })
    .resize(32, 32)
    .png()
    .toBuffer();

  const ico48 = await sharp(svgBuffer, { density: 300 })
    .resize(48, 48)
    .png()
    .toBuffer();

  const icoBuffer = await toIco([ico16, ico32, ico48]);
  await fs.writeFile(path.join(publicDir, 'favicon.ico'), icoBuffer);

  console.log('');
  console.log('Favicons generated successfully!');
  console.log('Generated files:');
  console.log('  - public/favicon.ico');
  console.log('  - public/apple-touch-icon.png');
  console.log('  - public/favicon-192.png');
  console.log('  - public/favicon-512.png');
}

generateFavicons().catch((err) => {
  console.error('Error generating favicons:', err);
  process.exit(1);
});
