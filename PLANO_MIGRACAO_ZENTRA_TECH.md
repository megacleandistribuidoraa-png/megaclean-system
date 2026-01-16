# 🎯 Plano de Migração: MegaClean → Zentra Tech

## 📋 Análise da Situação Atual

### Estado Atual do Sistema

#### Infraestrutura:
- ✅ **Backend em Produção**: `https://megaclean-system.onrender.com/api`
- ✅ **Frontend**: Em processo de deploy como Static Site
- ✅ **MongoDB Atlas**: Configurado e funcionando
- ✅ **Repositório GitHub**: `megacleandistribuidoraa-png/megaclean-system`

#### Referências à Marca no Código:
- 📁 **91 arquivos** contêm referências a "MegaClean" ou "megaclean"
- 🎨 **Frontend**: Títulos, textos, branding visível
- ⚙️ **Backend**: Nome padrão do admin, mensagens
- 📦 **Package.json**: Nome do projeto
- 📝 **Documentação**: README, guias

---

## 🎯 Estratégia de Migração: Fases

### FASE 1: Preparação (Sem Impacto) ⏱️ 1-2 dias
### FASE 2: Infraestrutura Paralela (Zero Downtime) ⏱️ 2-3 dias
### FASE 3: Migração de Código (Zero Downtime) ⏱️ 3-5 dias
### FASE 4: Transição de Tráfego (Zero Downtime) ⏱️ 1 dia
### FASE 5: Limpeza e Otimização ⏱️ 1-2 dias

---

## 📊 O Que DEVE Ser Renomeado Agora vs Depois

### ✅ DEVE Ser Renomeado AGORA (Fase 1-2)

#### 1. Infraestrutura Nova (Paralela)
- ✅ Novo repositório GitHub: `zentra-tech/zentra-api` (backend)
- ✅ Novo repositório GitHub: `zentra-tech/zentra-frontend` (frontend)
- ✅ Novo serviço Render Backend: `zentra-api` → `https://zentra-api.onrender.com/api`
- ✅ Novo serviço Render Frontend: `zentra-frontend` → `https://zentra-frontend.onrender.com`

**Por quê?**: Criar infraestrutura paralela sem afetar produção atual.

#### 2. Variáveis de Ambiente (Preparação)
- ✅ Criar variáveis com nomes neutros:
  - `API_BASE_URL` (ao invés de `MEGACLEAN_API_URL`)
  - `APP_NAME` (configurável)
  - `BRAND_NAME` (configurável)

**Por quê?**: Preparar código para ser multi-tenant e neutro.

---

### ⏸️ DEVE Ficar Como Está POR ENQUANTO (Fase 1-3)

#### 1. Sistema Atual em Produção
- ⏸️ **NÃO mexer** no `megaclean-system.onrender.com` (backend atual)
- ⏸️ **NÃO mexer** no repositório atual `megaclean-system`
- ⏸️ **NÃO alterar** código em produção ainda

**Por quê?**: Manter sistema funcionando para clientes atuais.

#### 2. Referências no Código (Temporário)
- ⏸️ Deixar referências a "MegaClean" no código atual
- ⏸️ Sistema antigo continua funcionando normalmente

**Por quê?**: Migração gradual, sem quebrar nada.

---

### 🔄 DEVE Ser Renomeado DEPOIS (Fase 3-4)

#### 1. Código do Sistema
- 🔄 Substituir "MegaClean" por "Zentra Tech" no novo repositório
- 🔄 Atualizar títulos, textos, branding
- 🔄 Atualizar package.json, README

**Por quê?**: Fazer no novo repositório, não no antigo.

#### 2. Domínios e URLs
- 🔄 Configurar domínio customizado: `api.zentratech.com.br`
- 🔄 Configurar domínio customizado: `app.zentratech.com.br`
- 🔄 Migrar DNS gradualmente

**Por quê?**: URLs profissionais para comercialização.

---

## 🏗️ ESTRATÉGIA 1: Criar Novo Repositório

### Passo a Passo Detalhado

#### 1.1 Preparar Novo Repositório Backend

```bash
# 1. Criar novo repositório no GitHub
# Nome: zentra-tech/zentra-api
# Visibilidade: Private (ou Public, conforme estratégia)

# 2. Clonar repositório atual localmente (backup)
cd ~/workspace
git clone https://github.com/megacleandistribuidoraa-png/megaclean-system.git megaclean-backup

# 3. Criar novo diretório para Zentra Tech
mkdir zentra-api
cd zentra-api

# 4. Inicializar Git
git init
git remote add origin https://github.com/zentra-tech/zentra-api.git

# 5. Copiar código do projeto atual
cp -r ../megaclean-system/* .
cp -r ../megaclean-system/.* . 2>/dev/null || true

# 6. Remover referências ao Git antigo
rm -rf .git
git init
git remote add origin https://github.com/zentra-tech/zentra-api.git

# 7. Primeiro commit
git add .
git commit -m "feat: initial commit - Zentra Tech API"
git branch -M main
git push -u origin main
```

#### 1.2 Preparar Novo Repositório Frontend

```bash
# 1. Criar novo repositório no GitHub
# Nome: zentra-tech/zentra-frontend

# 2. Criar diretório
mkdir zentra-frontend
cd zentra-frontend

# 3. Copiar apenas pasta public/ do projeto atual
cp -r ../megaclean-system/public/* .

# 4. Copiar arquivos de build
cp ../megaclean-system/build-frontend.js .
cp ../megaclean-system/package.json .
cp ../megaclean-system/render-static.yaml .

# 5. Inicializar Git
git init
git remote add origin https://github.com/zentra-tech/zentra-frontend.git
git add .
git commit -m "feat: initial commit - Zentra Tech Frontend"
git branch -M main
git push -u origin main
```

#### 1.3 Estrutura de Branches Recomendada

```
zentra-api/
├── main          # Produção (protegida)
├── develop       # Desenvolvimento
├── staging       # Testes antes de produção
└── feature/*     # Features individuais

zentra-frontend/
├── main          # Produção (protegida)
├── develop       # Desenvolvimento
└── feature/*     # Features individuais
```

---

## 🌐 ESTRATÉGIA 2: Criar Novo Serviço no Render

### 2.1 Backend (zentra-api)

#### Passo a Passo:

1. **Acessar Render Dashboard**
   - [dashboard.render.com](https://dashboard.render.com)

2. **Criar Novo Web Service**
   - **New +** → **Web Service**
   - Conectar repositório: `zentra-tech/zentra-api`
   - Branch: `main`

3. **Configurações:**
   ```
   Name: zentra-api
   Region: (escolha mais próxima dos clientes)
   Branch: main
   Root Directory: (deixe vazio)
   Runtime: Node
   Build Command: npm install
   Start Command: npm start
   ```

4. **Environment Variables:**
   ```
   MONGODB_URI = (mesma do sistema atual - compartilhar banco inicialmente)
   PORT = 10000
   ADMIN_USER = admin
   ADMIN_PASS = (nova senha forte)
   ADMIN_NAME = Administrador Zentra Tech
   ADMIN_TOKEN = (novo token forte)
   NODE_ENV = production
   ```

5. **Aguardar Deploy**
   - URL gerada: `https://zentra-api.onrender.com`
   - API URL: `https://zentra-api.onrender.com/api`

### 2.2 Frontend (zentra-frontend)

#### Passo a Passo:

1. **Criar Novo Static Site**
   - **New +** → **Static Site**
   - Conectar repositório: `zentra-tech/zentra-frontend`
   - Branch: `main`

2. **Configurações:**
   ```
   Name: zentra-frontend
   Branch: main
   Build Command: npm install && API_URL=${API_URL} npm run build:frontend
   Publish Directory: dist
   ```

3. **Environment Variables:**
   ```
   API_URL = https://zentra-api.onrender.com/api
   ```

4. **Aguardar Deploy**
   - URL gerada: `https://zentra-frontend.onrender.com`

---

## 🔄 ESTRATÉGIA 3: Manter Sistema Funcionando (Zero Downtime)

### 3.1 Período de Transição Paralela

```
┌─────────────────────────────────────────────────┐
│  SISTEMA ANTIGO (MegaClean)                    │
│  ✅ Continua funcionando                       │
│  ✅ Clientes atuais usando                     │
│  ✅ Sem alterações                             │
└─────────────────────────────────────────────────┘
                    ↓
┌─────────────────────────────────────────────────┐
│  SISTEMA NOVO (Zentra Tech)                    │
│  🆕 Em desenvolvimento                         │
│  🆕 Testes internos                            │
│  🆕 Migração gradual                           │
└─────────────────────────────────────────────────┘
```

### 3.2 Estratégia de Migração de URL

#### Opção A: Redirecionamento Temporário (Recomendado)

1. **No código do frontend antigo**, adicionar redirecionamento:

```javascript
// No public/js/config.js (sistema antigo)
// Manter funcionando, mas adicionar aviso de migração

// No novo sistema (zentra-frontend)
// Usar nova URL diretamente
```

2. **No Render**, configurar redirecionamento:
   - Sistema antigo continua funcionando
   - Novo sistema roda em paralelo
   - Migração gradual de clientes

#### Opção B: Domínio Customizado (Ideal)

1. **Comprar domínio**: `zentratech.com.br`
2. **Configurar subdomínios**:
   - `api.zentratech.com.br` → `zentra-api.onrender.com`
   - `app.zentratech.com.br` → `zentra-frontend.onrender.com`
3. **Migração transparente**:
   - Clientes não percebem mudança
   - URLs profissionais

### 3.3 Compartilhamento Temporário de Banco de Dados

**FASE 1-2**: Ambos sistemas usam o mesmo MongoDB Atlas
- ✅ Dados compartilhados
- ✅ Migração sem perda de dados
- ✅ Testes com dados reais

**FASE 3**: Migrar para banco separado (opcional)
- 🔄 Criar novo cluster MongoDB
- 🔄 Migrar dados
- 🔄 Atualizar conexões

---

## 📦 ESTRATÉGIA 4: Versionamento DEV/PROD

### 4.1 Estrutura de Ambientes

```
┌─────────────────────────────────────────┐
│  AMBIENTE DEV (Desenvolvimento)        │
│  - zentra-api-dev.onrender.com          │
│  - zentra-frontend-dev.onrender.com     │
│  - MongoDB: Cluster de desenvolvimento  │
│  - Branch: develop                       │
└─────────────────────────────────────────┘

┌─────────────────────────────────────────┐
│  AMBIENTE STAGING (Testes)              │
│  - zentra-api-staging.onrender.com      │
│  - zentra-frontend-staging.onrender.com │
│  - MongoDB: Cluster de staging          │
│  - Branch: staging                      │
└─────────────────────────────────────────┘

┌─────────────────────────────────────────┐
│  AMBIENTE PROD (Produção)               │
│  - api.zentratech.com.br                │
│  - app.zentratech.com.br                │
│  - MongoDB: Cluster de produção          │
│  - Branch: main                         │
└─────────────────────────────────────────┘
```

### 4.2 Configuração por Ambiente

#### Variáveis de Ambiente por Ambiente:

**DEV:**
```env
NODE_ENV=development
MONGODB_URI=mongodb+srv://dev-cluster...
API_URL=https://zentra-api-dev.onrender.com/api
LOG_LEVEL=debug
```

**STAGING:**
```env
NODE_ENV=staging
MONGODB_URI=mongodb+srv://staging-cluster...
API_URL=https://zentra-api-staging.onrender.com/api
LOG_LEVEL=info
```

**PROD:**
```env
NODE_ENV=production
MONGODB_URI=mongodb+srv://prod-cluster...
API_URL=https://api.zentratech.com.br/api
LOG_LEVEL=error
```

### 4.3 Git Flow Recomendado

```
main (produção)
  ↑
staging (testes)
  ↑
develop (desenvolvimento)
  ↑
feature/nova-funcionalidade
```

**Fluxo:**
1. Desenvolver em `feature/*`
2. Merge para `develop`
3. Testes em `develop`
4. Merge para `staging`
5. Testes finais em `staging`
6. Merge para `main` (produção)

---

## 🎨 ESTRATÉGIA 5: Padrões Neutros para SaaS Multi-Tenant

### 5.1 Nomenclatura de Variáveis

#### Padrão Recomendado:

```javascript
// ❌ EVITAR (específico de marca)
const MEGACLEAN_API_URL = '...';
const APP_NAME = 'MegaClean';

// ✅ USAR (neutro e configurável)
const API_BASE_URL = process.env.API_BASE_URL;
const APP_NAME = process.env.APP_NAME || 'Sistema de Gestão';
const BRAND_NAME = process.env.BRAND_NAME || 'Zentra Tech';
```

### 5.2 Configuração Centralizada

#### Criar arquivo `config/branding.js`:

```javascript
// config/branding.js
module.exports = {
  appName: process.env.APP_NAME || 'Sistema de Gestão',
  brandName: process.env.BRAND_NAME || 'Zentra Tech',
  companyName: process.env.COMPANY_NAME || 'Zentra Tech Solutions',
  supportEmail: process.env.SUPPORT_EMAIL || 'suporte@zentratech.com.br',
  website: process.env.WEBSITE_URL || 'https://zentratech.com.br',
  
  // Cores (configuráveis por cliente no futuro)
  primaryColor: process.env.PRIMARY_COLOR || '#0d9488',
  secondaryColor: process.env.SECONDARY_COLOR || '#0f766e',
  
  // Logo (configurável)
  logoUrl: process.env.LOGO_URL || '/logo.png',
  faviconUrl: process.env.FAVICON_URL || '/icon.svg',
};
```

#### Usar no código:

```javascript
// server.js
const branding = require('./config/branding');

const ADMIN_NAME = process.env.ADMIN_NAME || `Administrador ${branding.brandName}`;

// public/js/app.js
const branding = {
  appName: window.APP_NAME || 'Sistema de Gestão',
  brandName: window.BRAND_NAME || 'Zentra Tech',
};
```

### 5.3 URLs e Endpoints Neutros

#### Padrão Recomendado:

```javascript
// ❌ EVITAR
const API_URL = 'https://megaclean-api.onrender.com/api';

// ✅ USAR
const API_URL = process.env.API_BASE_URL || '/api';

// Para múltiplos clientes no futuro:
const API_URL = process.env.API_BASE_URL || 
  `https://api.${process.env.TENANT_DOMAIN}/api`;
```

### 5.4 Estrutura de Pastas Neutra

```
zentra-api/
├── config/
│   ├── branding.js      # Configurações de marca
│   ├── database.js      # Configurações de banco
│   └── environment.js   # Configurações por ambiente
├── models/              # Modelos (neutros)
├── routes/              # Rotas (neutras)
├── middleware/          # Middlewares (neutros)
└── utils/               # Utilitários (neutros)
```

### 5.5 Preparação para Multi-Tenancy (Futuro)

#### Estrutura de Tenant:

```javascript
// config/tenant.js (futuro)
module.exports = {
  getTenantConfig: async (tenantId) => {
    // Buscar configuração do tenant no banco
    // Retornar: branding, cores, logo, etc.
  },
  
  getTenantDatabase: async (tenantId) => {
    // Retornar conexão de banco específica do tenant
    // Ou usar prefixo de coleção: `tenant_${tenantId}_collection`
  }
};
```

---

## 📋 Checklist de Migração Completo

### FASE 1: Preparação ✅

- [ ] Criar conta/organização GitHub: `zentra-tech`
- [ ] Criar repositório: `zentra-tech/zentra-api`
- [ ] Criar repositório: `zentra-tech/zentra-frontend`
- [ ] Configurar e-mail corporativo: `@zentratech.com.br`
- [ ] Comprar domínio: `zentratech.com.br` (opcional, pode ser depois)
- [ ] Documentar estrutura atual (backup mental)

### FASE 2: Infraestrutura Paralela ✅

- [ ] Criar serviço Render: `zentra-api`
- [ ] Configurar variáveis de ambiente no novo backend
- [ ] Testar conexão com MongoDB (mesmo cluster inicialmente)
- [ ] Criar serviço Render: `zentra-frontend`
- [ ] Configurar variáveis de ambiente no novo frontend
- [ ] Testar build do frontend
- [ ] Verificar URLs geradas:
  - Backend: `https://zentra-api.onrender.com/api`
  - Frontend: `https://zentra-frontend.onrender.com`

### FASE 3: Migração de Código ✅

- [ ] Copiar código para novo repositório backend
- [ ] Copiar código para novo repositório frontend
- [ ] Substituir referências "MegaClean" por "Zentra Tech" no novo código
- [ ] Atualizar package.json com novo nome
- [ ] Atualizar README.md
- [ ] Criar arquivo `config/branding.js`
- [ ] Atualizar código para usar configurações neutras
- [ ] Testar sistema novo em ambiente de desenvolvimento
- [ ] Fazer deploy de teste no Render

### FASE 4: Transição de Tráfego ✅

- [ ] Testar sistema novo completamente
- [ ] Verificar que dados estão sincronizados (mesmo MongoDB)
- [ ] Configurar domínio customizado (se comprou):
  - `api.zentratech.com.br` → `zentra-api.onrender.com`
  - `app.zentratech.com.br` → `zentra-frontend.onrender.com`
- [ ] Atualizar DNS
- [ ] Migrar clientes gradualmente (ou todos de uma vez)
- [ ] Monitorar logs e erros
- [ ] Manter sistema antigo rodando por 1-2 semanas (backup)

### FASE 5: Limpeza e Otimização ✅

- [ ] Desativar sistema antigo (após confirmação que tudo funciona)
- [ ] Atualizar documentação
- [ ] Configurar CI/CD (GitHub Actions)
- [ ] Configurar monitoramento (Sentry, LogRocket, etc.)
- [ ] Otimizar performance
- [ ] Configurar backup automático do MongoDB
- [ ] Documentar processo para futuras migrações

---

## ⚠️ Riscos e Mitigações

### Risco 1: Perda de Dados
**Mitigação**: 
- Usar mesmo MongoDB inicialmente
- Fazer backup antes de qualquer mudança
- Testar em ambiente de desenvolvimento primeiro

### Risco 2: Downtime
**Mitigação**:
- Manter sistema antigo rodando
- Migração gradual
- Testes extensivos antes de migrar

### Risco 3: Quebra de Integrações
**Mitigação**:
- Manter URLs antigas funcionando (redirecionamento)
- Documentar todas as mudanças
- Comunicar clientes com antecedência

### Risco 4: Problemas de CORS
**Mitigação**:
- Configurar CORS para aceitar ambos domínios
- Testar em diferentes navegadores
- Verificar headers de resposta

---

## 📅 Timeline Sugerido

### Semana 1: Preparação
- Dias 1-2: Criar repositórios e contas
- Dias 3-4: Configurar infraestrutura paralela
- Dia 5: Testes iniciais

### Semana 2: Migração de Código
- Dias 1-3: Copiar e adaptar código
- Dias 4-5: Testes e correções

### Semana 3: Transição
- Dias 1-2: Testes finais
- Dia 3: Migração de tráfego
- Dias 4-5: Monitoramento e ajustes

### Semana 4: Limpeza
- Dias 1-2: Otimizações
- Dias 3-4: Documentação
- Dia 5: Desativar sistema antigo

---

## 🎯 Resultado Final Esperado

### Infraestrutura:
- ✅ Backend: `https://api.zentratech.com.br` (ou `zentra-api.onrender.com`)
- ✅ Frontend: `https://app.zentratech.com.br` (ou `zentra-frontend.onrender.com`)
- ✅ MongoDB: Cluster dedicado (ou compartilhado, conforme estratégia)

### Código:
- ✅ Sem referências a "MegaClean"
- ✅ Configurações neutras e multi-tenant ready
- ✅ Estrutura profissional para SaaS

### Processo:
- ✅ Zero downtime
- ✅ Dados preservados
- ✅ Clientes não afetados
- ✅ Sistema escalável

---

## 📞 Próximos Passos

1. **Revisar este plano** e confirmar estratégia
2. **Criar repositórios** no GitHub
3. **Iniciar Fase 1** (Preparação)
4. **Seguir fases sequencialmente**
5. **Documentar cada passo** realizado

---

**Status**: ⏸️ Aguardando confirmação para iniciar

**Última atualização**: $(Get-Date -Format "dd/MM/yyyy HH:mm")
