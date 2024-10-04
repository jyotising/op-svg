const fs = require('fs');
const path = require('path');

// Directory where your icons (React components) are stored
const iconsDir = path.join(__dirname, 'src/components/icons');
// Output file for the index
const indexPath = path.join(__dirname, 'src/index.js');

// Read the files from the icons directory
fs.readdir(iconsDir, (err, files) => {
  if (err) {
    console.error('Error reading icons directory:', err);
    return;
  }

  // Filter out non-JS files or index.js if already exists
  const iconFiles = files.filter((file) => file.endsWith('.js'));

  // Create export statements
  const exportStatements = iconFiles.map((file) => {
    const componentName = path.basename(file, '.js'); // Remove .js extension
    return `export { default as ${componentName} } from './components/icons/${componentName}';`;
  });

  // Write the export statements to the index.js file
  fs.writeFile(indexPath, exportStatements.join('\n'), (err) => {
    if (err) {
      console.error('Error writing index file:', err);
    } else {
      console.log('Index file generated successfully!');
    }
  });
});
