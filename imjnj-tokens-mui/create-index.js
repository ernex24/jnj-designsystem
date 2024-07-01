import fs from 'fs';
import path from 'path';

// Function to recursively get all files in a directory
const getFilesRecursively = (dir) => {
  let results = [];
  const list = fs.readdirSync(dir);

  list.forEach((file) => {
    file = path.resolve(dir, file);
    const stat = fs.statSync(file);

    if (stat && stat.isDirectory()) {
      results = results.concat(getFilesRecursively(file));
    } else {
      results.push(file);
    }
  });

  return results;
};

// Function to get all directories within a directory
const getDirectories = (source) =>
  fs.readdirSync(source, { withFileTypes: true })
    .filter(dirent => dirent.isDirectory())
    .map(dirent => path.join(source, dirent.name));

// Function to convert file name to PascalCase and remove hyphens
const toPascalCase = (str) => {
  return str
    .replace(/[-_](.)/g, (_, group1) => group1.toUpperCase()) // Convert -a to A
    .replace(/^(.)/, (_, group1) => group1.toUpperCase()); // Convert first character to uppercase
};

// Define the base directory
const baseDir = path.join(process.cwd(), 'public', 'theme');

// Get all subdirectories within the base directory
const directories = getDirectories(baseDir);

// Generate index.js in each subdirectory
directories.forEach(dir => {
  const files = getFilesRecursively(dir).filter(file => {
    const ext = path.extname(file).toLowerCase();
    return ['.js', '.woff2', '.svg', '.jpg', '.jpeg', '.png'].includes(ext);
  });

  const exportStatements = files
    .filter(file => path.basename(file) !== 'index.js')
    .map(file => {
      const relativePath = `./${path.relative(dir, file).replace(/\\/g, '/')}`;
      const fileName = path.basename(file, path.extname(file));
      const moduleName = toPascalCase(fileName);
      return `export { default as ${moduleName} } from '${relativePath}';`;
    })
    .join('\n');

  const indexPath = path.join(dir, 'index.js');
  fs.writeFileSync(indexPath, exportStatements);
  console.log(`Created ${indexPath}`);
});

// Generate main index.js file in the base directory
const mainFiles = getFilesRecursively(baseDir).filter(file => {
  const ext = path.extname(file).toLowerCase();
  const isDirectFile = path.dirname(file) === baseDir;
  return isDirectFile && ['.js', '.css', '.ico'].includes(ext);
});

const mainExportStatements = directories
  .map(dir => {
    const dirName = path.basename(dir);
    return `export * from './${dirName}';`;
  })
  .concat(mainFiles.filter(file => path.basename(file) !== 'index.js').map(file => {
    const relativePath = `./${path.relative(baseDir, file).replace(/\\/g, '/')}`;
    const fileName = path.basename(file, path.extname(file));
    const moduleName = toPascalCase(fileName);
    if (file.endsWith('.js')) {
      return `export { default as ${moduleName} } from '${relativePath}';`;
    }
    // Handle non-JS files (e.g., CSS, ICO)
    return `import '${relativePath}';`;
  }))
  .join('\n');

const mainIndexPath = path.join(baseDir, 'index.js');
fs.writeFileSync(mainIndexPath, mainExportStatements);
console.log(`Created ${mainIndexPath}`);

// Specific handling for icons-react folder
const iconsReactDir = path.join(baseDir, 'icons-react', 'build');

// Generate index.js for both cjs and esm folders
['cjs', 'esm'].forEach(format => {
  const formatDir = path.join(iconsReactDir, format);
  const files = getFilesRecursively(formatDir).filter(file => {
    return ['.js'].includes(path.extname(file).toLowerCase());
  });

  const exportStatements = files
    .filter(file => path.basename(file) !== 'index.js')
    .map(file => {
      const relativePath = `./${path.relative(formatDir, file).replace(/\\/g, '/')}`;
      const fileName = path.basename(file, path.extname(file));
      const moduleName = toPascalCase(fileName);
      return `export { default as ${moduleName} } from '${relativePath}';`;
    })
    .join('\n');

  const indexPath = path.join(formatDir, 'index.js');
  fs.writeFileSync(indexPath, exportStatements);
  console.log(`Created ${indexPath} for ${format} format`);
});

// Generate main index.js file in icons-react/build
const iconsReactIndexPath = path.join(iconsReactDir, 'index.js');
const iconsReactExportStatements = ['cjs', 'esm']
  .map(format => {
    return `export * from './${format}';`;
  })
  .join('\n');

fs.writeFileSync(iconsReactIndexPath, iconsReactExportStatements);
console.log(`Created ${iconsReactIndexPath}`);
