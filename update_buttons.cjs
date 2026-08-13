const fs = require('fs');
const path = require('path');

function walk(dir) {
  let results = [];
  const list = fs.readdirSync(dir);
  list.forEach(file => {
    file = path.join(dir, file);
    const stat = fs.statSync(file);
    if (stat && stat.isDirectory()) {
      results = results.concat(walk(file));
    } else if (file.endsWith('.tsx') || file.endsWith('.ts')) {
      results.push(file);
    }
  });
  return results;
}

const files = walk(path.join(__dirname, 'src'));

let replacedCount = 0;

for (const file of files) {
  let content = fs.readFileSync(file, 'utf8');
  let original = content;

  // Primary large buttons
  content = content.replace(/className="inline-flex items-center gap-2 rounded-full bg-brand-gradient px-8 py-4 text-base font-bold text-white shadow-glow transition-all hover:scale-105"/g, 'className="btn btn-primary btn-lg"');
  content = content.replace(/className="inline-flex items-center gap-2 rounded-full bg-brand-gradient px-8 py-4 text-base font-bold text-white shadow-glow hover:scale-105 transition-transform"/g, 'className="btn btn-primary btn-lg"');
  content = content.replace(/className="inline-flex items-center gap-2 rounded-full bg-brand-gradient px-8 py-4 text-base font-bold text-white shadow-glow hover:scale-105 transition-all shrink-0"/g, 'className="btn btn-primary btn-lg shrink-0"');
  
  // Primary medium buttons
  content = content.replace(/className="inline-flex items-center gap-1.5 rounded-full bg-brand-gradient px-5 py-2.5 text-sm font-bold text-white shadow-glow transition-all hover:scale-105"/g, 'className="btn btn-primary btn-md"');
  content = content.replace(/className="inline-flex items-center rounded-full bg-brand-gradient px-5 py-2.5 text-sm font-medium text-white shadow-glow"/g, 'className="btn btn-primary btn-md"');
  content = content.replace(/className="rounded-full bg-brand-gradient px-5 py-2.5 text-sm font-medium text-white shadow-glow"/g, 'className="btn btn-primary btn-md"');

  // Primary small buttons
  content = content.replace(/className="inline-flex items-center rounded-full bg-brand-gradient px-4 py-1.5 text-xs font-bold text-white shadow-md"/g, 'className="btn btn-primary btn-sm"');
  content = content.replace(/className="inline-flex items-center rounded-full bg-brand-gradient px-3 py-1 text-xs font-bold text-white shadow-md"/g, 'className="btn btn-primary btn-sm"');
  content = content.replace(/className="mt-6 inline-flex items-center rounded-full bg-brand-gradient px-6 py-2.5 text-xs font-bold text-white shadow-glow"/g, 'className="btn btn-primary btn-sm mt-6"');

  // Secondary buttons
  content = content.replace(/className="rounded-full border border-border bg-background px-5 py-2.5 text-sm font-medium hover:bg-accent"/g, 'className="btn btn-secondary btn-md"');
  
  if (content !== original) {
    fs.writeFileSync(file, content);
    replacedCount++;
  }
}

console.log(`Updated buttons in ${replacedCount} files.`);
