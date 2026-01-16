// ============================================
// SCRIPT PARA CORRIGIR ACESSOS DOM SEM VERIFICAÇÃO
// ============================================
// Este script identifica e corrige padrões comuns de acesso DOM sem verificação

const fs = require('fs');
const path = require('path');

const PAGES_DIR = path.join(__dirname, '../public/js/pages');

// Padrões a corrigir
const patterns = [
  {
    // document.getElementById('id').textContent = ...
    regex: /document\.getElementById\((['"])([^'"]+)\1\)\.textContent\s*=/g,
    replacement: (match, quote, id) => {
      return `((${match.replace(/\.textContent\s*=/, '')}) || {}).textContent =`;
    },
    better: (match, quote, id) => {
      const varName = id.replace(/[^a-zA-Z0-9]/g, '_') + 'El';
      return `const ${varName} = document.getElementById(${quote}${id}${quote});\n    if (${varName}) ${varName}.textContent =`;
    }
  },
  {
    // document.getElementById('id').innerHTML = ...
    regex: /document\.getElementById\((['"])([^'"]+)\1\)\.innerHTML\s*=/g,
    replacement: (match, quote, id) => {
      return `((${match.replace(/\.innerHTML\s*=/, '')}) || {}).innerHTML =`;
    },
    better: (match, quote, id) => {
      const varName = id.replace(/[^a-zA-Z0-9]/g, '_') + 'El';
      return `const ${varName} = document.getElementById(${quote}${id}${quote});\n    if (${varName}) ${varName}.innerHTML =`;
    }
  },
  {
    // document.getElementById('id').value = ...
    regex: /document\.getElementById\((['"])([^'"]+)\1\)\.value\s*=/g,
    replacement: (match, quote, id) => {
      return `((${match.replace(/\.value\s*=/, '')}) || {}).value =`;
    },
    better: (match, quote, id) => {
      const varName = id.replace(/[^a-zA-Z0-9]/g, '_') + 'El';
      return `const ${varName} = document.getElementById(${quote}${id}${quote});\n    if (${varName}) ${varName}.value =`;
    }
  },
  {
    // document.getElementById('id').style.display = ...
    regex: /document\.getElementById\((['"])([^'"]+)\1\)\.style\.(\w+)\s*=/g,
    replacement: (match, quote, id, prop) => {
      return `((${match.replace(/\.style\.\w+\s*=/, '')}) || {}).style.${prop} =`;
    },
    better: (match, quote, id, prop) => {
      const varName = id.replace(/[^a-zA-Z0-9]/g, '_') + 'El';
      return `const ${varName} = document.getElementById(${quote}${id}${quote});\n    if (${varName}) ${varName}.style.${prop} =`;
    }
  }
];

function fixFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  let modified = false;
  const originalContent = content;

  // Aplicar correções simples primeiro (padrões mais seguros)
  patterns.forEach(({ regex, better }) => {
    const matches = [...content.matchAll(new RegExp(regex.source, 'g'))];
    if (matches.length > 0) {
      // Processar de trás para frente para não alterar índices
      for (let i = matches.length - 1; i >= 0; i--) {
        const match = matches[i];
        const before = content.substring(0, match.index);
        const after = content.substring(match.index + match[0].length);
        
        // Verificar se já tem verificação próxima
        const contextBefore = before.substring(Math.max(0, before.length - 100));
        if (!contextBefore.includes('if (') && !contextBefore.includes('const ') && !contextBefore.includes('let ')) {
          const replacement = better(match[0], match[1], match[2], match[3]);
          content = before + replacement + after;
          modified = true;
        }
      }
    }
  });

  if (modified && content !== originalContent) {
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`✅ Corrigido: ${path.basename(filePath)}`);
    return true;
  }
  
  return false;
}

// Processar todos os arquivos
const files = fs.readdirSync(PAGES_DIR);
let fixed = 0;

files.forEach(file => {
  if (file.endsWith('.js')) {
    const filePath = path.join(PAGES_DIR, file);
    if (fixFile(filePath)) {
      fixed++;
    }
  }
});

console.log(`\n✅ ${fixed} arquivo(s) corrigido(s)`);
console.log('💡 Revisar manualmente os arquivos para garantir que as correções estão corretas');
