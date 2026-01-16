# 💻 Exemplos de Código - Migração Zentra Tech

## 📋 Exemplos Práticos para Implementação

---

## 1. Configuração de Branding Neutra

### `config/branding.js` (Novo arquivo)

```javascript
// config/branding.js
module.exports = {
  // Nomes configuráveis
  appName: process.env.APP_NAME || 'Sistema de Gestão',
  brandName: process.env.BRAND_NAME || 'Zentra Tech',
  companyName: process.env.COMPANY_NAME || 'Zentra Tech Solutions',
  
  // Contato
  supportEmail: process.env.SUPPORT_EMAIL || 'suporte@zentratech.com.br',
  website: process.env.WEBSITE_URL || 'https://zentratech.com.br',
  
  // Cores (configuráveis por cliente no futuro)
  primaryColor: process.env.PRIMARY_COLOR || '#0d9488',
  secondaryColor: process.env.SECONDARY_COLOR || '#0f766e',
  
  // Assets
  logoUrl: process.env.LOGO_URL || '/logo.png',
  faviconUrl: process.env.FAVICON_URL || '/icon.svg',
  
  // Textos
  tagline: process.env.TAGLINE || 'Sistema completo de gestão empresarial',
  copyright: process.env.COPYRIGHT || `© ${new Date().getFullYear()} Zentra Tech — Todos os direitos reservados`,
};
```

### Uso no `server.js`

```javascript
// server.js
const branding = require('./config/branding');

// Antes:
const ADMIN_NAME = process.env.ADMIN_NAME || 'Administrador MegaClean';

// Depois:
const ADMIN_NAME = process.env.ADMIN_NAME || `Administrador ${branding.brandName}`;

// Mensagens de erro também:
res.status(500).json({ 
  error: 'Erro interno do servidor',
  support: branding.supportEmail 
});
```

---

## 2. Frontend - Configuração Dinâmica

### `public/js/branding-config.js` (Novo arquivo)

```javascript
// public/js/branding-config.js
window.BRANDING = {
  appName: window.APP_NAME || 'Sistema de Gestão',
  brandName: window.BRAND_NAME || 'Zentra Tech',
  companyName: window.COMPANY_NAME || 'Zentra Tech Solutions',
  primaryColor: window.PRIMARY_COLOR || '#0d9488',
  logoUrl: window.LOGO_URL || '/logo.png',
  
  // Helper para atualizar título
  updateTitle: function(pageName) {
    document.title = `${pageName} - ${this.appName}`;
  },
  
  // Helper para atualizar copyright
  updateCopyright: function() {
    const year = new Date().getFullYear();
    return `© ${year} ${this.companyName} — Todos os direitos reservados`;
  }
};
```

### Uso no HTML

```html
<!-- public/index.html -->
<head>
  <!-- Configuração de branding -->
  <script>
    window.APP_NAME = 'Sistema de Gestão';
    window.BRAND_NAME = 'Zentra Tech';
    window.COMPANY_NAME = 'Zentra Tech Solutions';
  </script>
  <script src="/js/branding-config.js"></script>
  
  <title id="page-title">Login - Sistema de Gestão</title>
</head>

<body>
  <!-- ... -->
  
  <h1 id="brand-title">ZENTRA TECH</h1>
  
  <p class="footer-text" id="copyright">
    <!-- Será preenchido pelo JavaScript -->
  </p>
  
  <script>
    // Atualizar copyright dinamicamente
    document.getElementById('copyright').textContent = window.BRANDING.updateCopyright();
  </script>
</body>
```

---

## 3. Substituição de Referências no Código

### Exemplo: `server.js`

```javascript
// ANTES:
const ADMIN_NAME = process.env.ADMIN_NAME || 'Administrador MegaClean';
console.log('🚀 Servidor MegaClean rodando...');

// DEPOIS:
const branding = require('./config/branding');
const ADMIN_NAME = process.env.ADMIN_NAME || `Administrador ${branding.brandName}`;
console.log(`🚀 Servidor ${branding.brandName} rodando...`);
```

### Exemplo: `public/index.html`

```html
<!-- ANTES: -->
<title>MegaClean — Login</title>
<h1 class="brand-title">MEGACLEAN</h1>
<p class="footer-text">© 2024 MegaClean — Todos os direitos reservados</p>

<!-- DEPOIS: -->
<title id="page-title">Login - Sistema de Gestão</title>
<h1 class="brand-title" id="brand-title">ZENTRA TECH</h1>
<p class="footer-text" id="copyright"></p>

<script>
  // Preencher dinamicamente
  document.getElementById('brand-title').textContent = window.BRANDING.brandName.toUpperCase();
  document.getElementById('copyright').textContent = window.BRANDING.updateCopyright();
</script>
```

### Exemplo: `public/app.html`

```html
<!-- ANTES: -->
<title>MegaClean - Sistema de Gestão</title>
<p>Carregando MegaClean...</p>
<h1>MEGACLEAN</h1>

<!-- DEPOIS: -->
<title id="app-title">Sistema de Gestão</title>
<p id="loading-text">Carregando...</p>
<h1 id="sidebar-brand">ZENTRA TECH</h1>

<script>
  // Atualizar dinamicamente
  document.getElementById('app-title').textContent = `${window.BRANDING.appName} - ${window.BRANDING.brandName}`;
  document.getElementById('loading-text').textContent = `Carregando ${window.BRANDING.brandName}...`;
  document.getElementById('sidebar-brand').textContent = window.BRANDING.brandName.toUpperCase();
</script>
```

---

## 4. Variáveis de Ambiente - `.env.example`

```bash
# ============================================
# CONFIGURAÇÃO - ZENTRA TECH API
# ============================================

# Servidor
PORT=3000
NODE_ENV=production
HOST=0.0.0.0

# Banco de Dados
MONGODB_URI=mongodb+srv://user:pass@cluster.mongodb.net/database?retryWrites=true&w=majority

# Autenticação Admin
ADMIN_USER=admin
ADMIN_PASS=senha_forte_aqui
ADMIN_NAME=Administrador Zentra Tech
ADMIN_TOKEN=token_forte_e_seguro_aqui

# Branding (Configurável)
APP_NAME=Sistema de Gestão
BRAND_NAME=Zentra Tech
COMPANY_NAME=Zentra Tech Solutions
SUPPORT_EMAIL=suporte@zentratech.com.br
WEBSITE_URL=https://zentratech.com.br

# Cores (Opcional)
PRIMARY_COLOR=#0d9488
SECONDARY_COLOR=#0f766e

# URLs (Opcional - para assets)
LOGO_URL=/logo.png
FAVICON_URL=/icon.svg
```

---

## 5. Script de Migração Automatizada

### `scripts/migrate-branding.js` (Novo arquivo)

```javascript
// scripts/migrate-branding.js
const fs = require('fs');
const path = require('path');

const replacements = [
  {
    pattern: /MegaClean/gi,
    replacement: 'Zentra Tech'
  },
  {
    pattern: /MEGACLEAN/gi,
    replacement: 'ZENTRA TECH'
  },
  {
    pattern: /megaclean/gi,
    replacement: 'zentra-tech'
  },
  {
    pattern: /MegaClean System/gi,
    replacement: 'Sistema de Gestão'
  }
];

function replaceInFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;
    
    replacements.forEach(({ pattern, replacement }) => {
      if (pattern.test(content)) {
        content = content.replace(pattern, replacement);
        modified = true;
      }
    });
    
    if (modified) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`✅ Atualizado: ${filePath}`);
      return true;
    }
    
    return false;
  } catch (error) {
    console.error(`❌ Erro em ${filePath}:`, error.message);
    return false;
  }
}

function processDirectory(dir) {
  const files = fs.readdirSync(dir);
  
  files.forEach(file => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    
    if (stat.isDirectory()) {
      // Ignorar node_modules, .git, dist
      if (!['node_modules', '.git', 'dist'].includes(file)) {
        processDirectory(filePath);
      }
    } else if (stat.isFile()) {
      // Processar apenas arquivos de código
      const ext = path.extname(file);
      if (['.js', '.html', '.json', '.md', '.yaml', '.yml'].includes(ext)) {
        replaceInFile(filePath);
      }
    }
  });
}

// Executar
console.log('🔄 Iniciando migração de branding...\n');
processDirectory(process.cwd());
console.log('\n✅ Migração concluída!');
console.log('⚠️  Revise as alterações antes de fazer commit!');
```

### Uso:

```bash
# Executar script de migração
node scripts/migrate-branding.js

# Revisar mudanças
git diff

# Fazer commit
git add .
git commit -m "refactor: migrar branding de MegaClean para Zentra Tech"
```

---

## 6. Atualização de package.json

```json
{
  "name": "zentra-api",
  "version": "2.0.0",
  "description": "Sistema de gestão empresarial - Zentra Tech",
  "main": "server.js",
  "scripts": {
    "start": "node server.js",
    "dev": "nodemon server.js",
    "build:frontend": "node build-frontend.js",
    "migrate:branding": "node scripts/migrate-branding.js"
  },
  "keywords": [
    "erp",
    "gestao",
    "zentra-tech",
    "saas"
  ],
  "author": "Zentra Tech Solutions",
  "license": "ISC"
}
```

---

## 7. README.md Atualizado

```markdown
# 🚀 Sistema de Gestão - Zentra Tech

Sistema de gestão completo (ERP) para empresas, desenvolvido com **Node.js + Express + MongoDB**.

## ✨ Características

- 📦 Gestão de Produtos e Estoque
- 👥 Cadastro de Clientes e Fornecedores
- 🛒 Pedidos e Orçamentos
- 📄 Notas Fiscais
- 📊 Dashboard com Relatórios
- 🔐 Sistema de Usuários e Permissões
- 📱 Interface Moderna (SPA)

## 🏢 Sobre

Desenvolvido por **Zentra Tech Solutions**

Website: https://zentratech.com.br
Suporte: suporte@zentratech.com.br

## 📝 Licença

Copyright © 2024 Zentra Tech Solutions. Todos os direitos reservados.
```

---

## 8. Configuração de CORS Atualizada

```javascript
// server.js
const allowedOrigins = [
  'https://zentra-frontend.onrender.com',
  'https://app.zentratech.com.br', // Domínio customizado
  'http://localhost:3000', // Desenvolvimento
  'http://localhost:5000'  // Desenvolvimento alternativo
];

app.use(cors({
  origin: function (origin, callback) {
    if (!origin) return callback(null, true);
    
    if (allowedOrigins.indexOf(origin) !== -1) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization', 'x-auth-token']
}));
```

---

## 9. Build Script Atualizado

### `build-frontend.js` (Atualizado)

```javascript
// build-frontend.js
const fs = require('fs');
const path = require('path');

const API_URL = process.env.API_URL || process.env.VITE_API_URL || '/api';
const APP_NAME = process.env.APP_NAME || 'Sistema de Gestão';
const BRAND_NAME = process.env.BRAND_NAME || 'Zentra Tech';

// ... código de build ...

// Injetar configurações de branding no HTML
htmlFiles.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  
  // Injetar variáveis de branding
  content = content.replace(
    '</head>',
    `<script>
      window.APP_NAME = '${APP_NAME}';
      window.BRAND_NAME = '${BRAND_NAME}';
    </script>
    </head>`
  );
  
  fs.writeFileSync(file, content);
});
```

---

## 10. Verificação de Referências

### Script para encontrar todas as referências:

```bash
# Encontrar todas as referências a "megaclean" (case insensitive)
grep -r -i "megaclean" . --exclude-dir=node_modules --exclude-dir=.git --exclude-dir=dist

# Contar quantas referências existem
grep -r -i "megaclean" . --exclude-dir=node_modules --exclude-dir=.git --exclude-dir=dist | wc -l

# Listar apenas arquivos que contêm referências
grep -r -l -i "megaclean" . --exclude-dir=node_modules --exclude-dir=.git --exclude-dir=dist
```

---

## ✅ Checklist de Implementação

- [ ] Criar `config/branding.js`
- [ ] Criar `public/js/branding-config.js`
- [ ] Atualizar `server.js` para usar branding
- [ ] Atualizar todos os arquivos HTML
- [ ] Atualizar `package.json`
- [ ] Atualizar `README.md`
- [ ] Criar `.env.example` atualizado
- [ ] Executar script de migração (se criado)
- [ ] Verificar todas as referências
- [ ] Testar sistema completo

---

**Nota**: Estes são exemplos. Adapte conforme sua necessidade específica.
