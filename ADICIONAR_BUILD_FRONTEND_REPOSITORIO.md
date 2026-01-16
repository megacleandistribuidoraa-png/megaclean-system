# 🔧 Adicionar build-frontend.js ao Repositório

## ❌ Erro Identificado

```
Error: Cannot find module '/opt/render/project/src/build-frontend.js'
```

**Causa**: O arquivo `build-frontend.js` não existe no repositório `Zentra-Tech` no GitHub.

---

## ✅ Solução: Adicionar Arquivo ao Repositório

### Opção 1: Via GitHub (Mais Simples)

#### 1. Acesse o Repositório

Vá para: `https://github.com/megacleandistribuidoraa-png/Zentra-Tech`

#### 2. Adicionar Arquivo

1. Clique em **"Add file"** → **"Create new file"**
2. Nome do arquivo: `build-frontend.js`
3. Cole o conteúdo do arquivo (veja abaixo)
4. Clique em **"Commit new file"**
5. Escreva mensagem: `feat: adicionar script de build do frontend`
6. Clique em **"Commit new file"**

#### 3. Conteúdo do build-frontend.js

Copie o conteúdo do arquivo `build-frontend.js` que está no seu projeto local e cole no GitHub.

---

### Opção 2: Via Git Local (Recomendado)

#### 1. No seu projeto local:

```bash
# Verificar se o arquivo existe localmente
ls build-frontend.js

# Se existir, copiar para o diretório do repositório Zentra-Tech
# Ou se você está no diretório correto:
git status
```

#### 2. Adicionar ao Git:

```bash
# Se você está no repositório Zentra-Tech
git add build-frontend.js
git commit -m "feat: adicionar script de build do frontend"
git push
```

#### 3. Se o arquivo está em outro lugar:

```bash
# Copiar arquivo para o repositório Zentra-Tech
cp /caminho/para/build-frontend.js ./build-frontend.js

# Adicionar ao Git
git add build-frontend.js
git commit -m "feat: adicionar script de build do frontend"
git push
```

---

## 📝 Conteúdo do build-frontend.js

Se você não tem o arquivo, aqui está o conteúdo completo:

```javascript
// ============================================
// SCRIPT DE BUILD DO FRONTEND - MEGACLEAN
// ============================================
// Este script prepara o frontend para deploy como Static Site
// Copia os arquivos e substitui a URL da API

const fs = require('fs');
const path = require('path');

// Configurações
const API_URL = process.env.API_URL || process.env.VITE_API_URL || '/api';
const SOURCE_DIR = path.join(__dirname, 'public');
const BUILD_DIR = path.join(__dirname, 'dist');

console.log('🚀 Iniciando build do frontend...');
console.log(`📡 URL da API: ${API_URL}`);

// Limpar diretório de build
if (fs.existsSync(BUILD_DIR)) {
  fs.rmSync(BUILD_DIR, { recursive: true, force: true });
}
fs.mkdirSync(BUILD_DIR, { recursive: true });

// Função para copiar arquivos recursivamente
function copyRecursive(src, dest) {
  const entries = fs.readdirSync(src, { withFileTypes: true });
  
  for (const entry of entries) {
    const srcPath = path.join(src, entry.name);
    const destPath = path.join(dest, entry.name);
    
    if (entry.isDirectory()) {
      fs.mkdirSync(destPath, { recursive: true });
      copyRecursive(srcPath, destPath);
    } else {
      fs.copyFileSync(srcPath, destPath);
    }
  }
}

// Copiar todos os arquivos
console.log('📁 Copiando arquivos...');
copyRecursive(SOURCE_DIR, BUILD_DIR);

// Substituir URL da API no config.js
const configPath = path.join(BUILD_DIR, 'js', 'config.js');
if (fs.existsSync(configPath)) {
  let configContent = fs.readFileSync(configPath, 'utf8');
  configContent = configContent.replace(
    /window\.API_BASE_URL = window\.API_BASE_URL \|\| '\/api';/,
    `window.API_BASE_URL = '${API_URL}';`
  );
  fs.writeFileSync(configPath, configContent);
  console.log('✅ Configuração da API atualizada');
}

// Substituir URLs relativas em arquivos JavaScript
console.log('🔍 Atualizando referências em arquivos JavaScript...');
const jsFiles = [];
function findJsFiles(dir) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      findJsFiles(fullPath);
    } else if (entry.name.endsWith('.js')) {
      jsFiles.push(fullPath);
    }
  }
}
findJsFiles(BUILD_DIR);

// Substituir fetch('/api por fetch usando API_BASE
jsFiles.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  
  // Substituir fetch('/api/...') por fetch(`${API_BASE}/...`)
  content = content.replace(
    /fetch\(['"]\/api\//g,
    (match) => {
      const before = content.substring(Math.max(0, content.lastIndexOf('\n', content.indexOf(match))), content.indexOf(match));
      if (before.includes('API_BASE') || before.includes('getApiUrl') || before.includes('API_BASE_URL')) {
        return match;
      }
      return `fetch(\`\${API_BASE}/`;
    }
  );
  
  // Substituir fetch('/api') (sem barra final) também
  content = content.replace(
    /fetch\(['"]\/api['"]/g,
    (match) => {
      const before = content.substring(Math.max(0, content.lastIndexOf('\n', content.indexOf(match))), content.indexOf(match));
      if (before.includes('API_BASE') || before.includes('getApiUrl') || before.includes('API_BASE_URL')) {
        return match;
      }
      return `fetch(\`\${API_BASE}\``;
    }
  );
  
  fs.writeFileSync(file, content);
});

// Substituir URLs relativas em arquivos HTML (scripts inline)
console.log('🔍 Atualizando referências em arquivos HTML...');
const htmlFiles = [];
function findHtmlFiles(dir) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      findHtmlFiles(fullPath);
    } else if (entry.name.endsWith('.html')) {
      htmlFiles.push(fullPath);
    }
  }
}
findHtmlFiles(BUILD_DIR);

// Substituir referências inline de /api em scripts HTML
htmlFiles.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  
  // Substituir fetch('/api por fetch usando window.API_BASE_URL
  // Apenas dentro de tags <script>
  content = content.replace(
    /(<script[^>]*>)([\s\S]*?)(<\/script>)/gi,
    (match, openTag, scriptContent, closeTag) => {
      // Não processar se já tem type="module" ou src (script externo)
      if (openTag.includes('src=') || openTag.includes('type="module"')) {
        return match;
      }
      
      let newContent = scriptContent;
      // Substituir fetch('/api/...')
      newContent = newContent.replace(
        /fetch\(['"]\/api\//g,
        (m) => {
          const before = newContent.substring(0, newContent.indexOf(m));
          if (before.includes('API_BASE_URL') || before.includes('getApiUrl')) {
            return m;
          }
          return `fetch(\`\${window.API_BASE_URL || '/api'}/\``;
        }
      );
      
      newContent = newContent.replace(
        /fetch\(['"]\/api['"]/g,
        (m) => {
          const before = newContent.substring(0, newContent.indexOf(m));
          if (before.includes('API_BASE_URL') || before.includes('getApiUrl')) {
            return m;
          }
          return `fetch(\`\${window.API_BASE_URL || '/api'}\``;
        }
      );
      
      return openTag + newContent + closeTag;
    }
  );
  
  fs.writeFileSync(file, content);
});

console.log(`✅ Build concluído! Arquivos em: ${BUILD_DIR}`);
console.log(`📦 Pronto para deploy no Render como Static Site`);
console.log(`\n💡 Para testar localmente:`);
console.log(`   cd dist && npx serve .`);
console.log(`\n💡 Para deploy no Render:`);
console.log(`   1. Configure a variável de ambiente API_URL`);
console.log(`   2. Aponte o Static Site para a pasta 'dist'`);
```

---

## ✅ Após Adicionar o Arquivo

1. **Aguardar** o Render detectar a mudança (auto-deploy)
2. **Ou fazer Manual Deploy** no Render
3. **Verificar logs** - deve funcionar agora

---

## 📋 Checklist

- [ ] Arquivo `build-frontend.js` adicionado ao repositório
- [ ] Arquivo está na raiz do repositório (mesmo nível do `package.json`)
- [ ] Commit feito e push enviado
- [ ] Render detectou a mudança (ou Manual Deploy feito)
- [ ] Build funcionou

---

**Ação**: Adicione o arquivo `build-frontend.js` ao repositório `Zentra-Tech` no GitHub!
