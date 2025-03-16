const fs = require('fs');
const path = require('path');

const nodeModulesDir = path.join(__dirname, 'node_modules');

// List of paths to check for missing 'type' field (e.g., specific packages like @contentful, @google-cloud)
const packagesToCheck = [
  '@contentful/rich-text-types',
  '@google-cloud',
  '@stackbit/cms-git'
];

// Function to recursively find and modify the JSON files
function addTypeFieldToJsonFiles(directory) {
  const files = fs.readdirSync(directory);

  files.forEach(file => {
    const filePath = path.join(directory, file);

    const stat = fs.lstatSync(filePath);
    if (stat.isDirectory()) {
      addTypeFieldToJsonFiles(filePath); // Recurse into directories
    } else if (filePath.endsWith('.json')) {
      try {
        // Read the file
        const content = fs.readFileSync(filePath, 'utf-8');
        const json = JSON.parse(content);

        // Check if the 'type' field is missing and add it
        if (!json.type) {
          console.log(`Adding 'type' field to: ${filePath}`);
          json.type = 'model'; // Add the 'type' field with a default value (you can adjust the value if needed)

          // Write the updated content back to the file
          fs.writeFileSync(filePath, JSON.stringify(json, null, 2));
        }
      } catch (err) {
        console.error(`Failed to process file: ${filePath}`, err);
      }
    }
  });
}

// Start the process for the packages
packagesToCheck.forEach(pkg => {
  const pkgDir = path.join(nodeModulesDir, pkg);
  if (fs.existsSync(pkgDir)) {
    addTypeFieldToJsonFiles(pkgDir); // Modify files within the package directory
  }
});
