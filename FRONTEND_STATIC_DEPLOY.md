# 🚀 Deploy do Frontend como Static Site no Render

Este guia explica como transformar o frontend do MegaClean em um site estático hospedado na nuvem.

## 📋 Pré-requisitos

1. **Backend já configurado no Render** (Web Service)
   - URL do backend: `https://seu-backend.onrender.com`
   - CORS configurado para aceitar requisições do domínio do frontend

2. **Conta no Render.com**

## 🔧 Passo a Passo

### 1. Build do Frontend

Execute o build do frontend com a URL da API do backend:

```bash
# Definir URL da API do backend
export API_URL=https://seu-backend.onrender.com/api

# Executar build
npm run build:frontend
```

Ou diretamente:

```bash
API_URL=https://seu-backend.onrender.com/api node build-frontend.js
```

Isso criará uma pasta `dist/` com todos os arquivos prontos para deploy.

### 2. Testar Localmente

Antes de fazer deploy, teste localmente:

```bash
cd dist
npx serve .
```

Acesse `http://localhost:3000` e verifique se as chamadas à API funcionam.

### 3. Deploy no Render (Static Site)

#### Opção A: Via Interface Web

1. Acesse [Render Dashboard](https://dashboard.render.com)
2. Clique em **"New +"** → **"Static Site"**
3. Conecte seu repositório Git
4. Configure:
   - **Name**: `megaclean-frontend` (ou o nome que preferir)
   - **Build Command**: `npm run build:frontend`
   - **Publish Directory**: `dist`
   - **Environment Variables**:
     - `API_URL`: `https://seu-backend.onrender.com/api`
5. Clique em **"Create Static Site"**

#### Opção B: Via render.yaml

Crie um arquivo `render-static.yaml` na raiz do projeto:

```yaml
services:
  - type: web
    name: megaclean-backend
    env: node
    buildCommand: npm install && npm start
    startCommand: npm start
    envVars:
      - key: MONGODB_URI
        sync: false
      - key: PORT
        value: 10000
      - key: ADMIN_TOKEN
        sync: false

  - type: static
    name: megaclean-frontend
    buildCommand: npm install && API_URL=https://megaclean-backend.onrender.com/api npm run build:frontend
    staticPublishPath: dist
    envVars:
      - key: API_URL
        value: https://megaclean-backend.onrender.com/api
```

### 4. Configurar CORS no Backend

Certifique-se de que o backend aceita requisições do domínio do frontend:

```javascript
// No server.js
const allowedOrigins = [
  'https://megaclean-frontend.onrender.com',
  'http://localhost:3000' // Para desenvolvimento
];

app.use(cors({
  origin: function (origin, callback) {
    if (!origin || allowedOrigins.indexOf(origin) !== -1) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  credentials: true
}));
```

### 5. Variáveis de Ambiente

No Render, configure as seguintes variáveis de ambiente:

**Backend (Web Service):**
- `MONGODB_URI`: String de conexão do MongoDB Atlas
- `ADMIN_TOKEN`: Token de autenticação admin
- `ADMIN_USER`: Usuário admin padrão
- `ADMIN_PASS`: Senha admin padrão
- `PORT`: Porta (geralmente 10000 no Render)

**Frontend (Static Site):**
- `API_URL`: URL completa da API do backend (ex: `https://seu-backend.onrender.com/api`)

## 🔍 Verificação

Após o deploy, verifique:

1. ✅ Frontend carrega corretamente
2. ✅ Login funciona
3. ✅ Chamadas à API funcionam (verificar Network tab no DevTools)
4. ✅ Não há erros de CORS no console
5. ✅ Service Worker funciona (se aplicável)

## 🐛 Troubleshooting

### Erro de CORS

Se aparecer erro de CORS:
- Verifique se o backend está configurado para aceitar o domínio do frontend
- Verifique se a URL da API está correta no build

### Erro 404 nas chamadas de API

- Verifique se `API_URL` está configurada corretamente
- Verifique se o backend está rodando
- Verifique se a URL no `config.js` foi substituída corretamente

### Build falha

- Verifique se Node.js está instalado
- Verifique se todas as dependências estão instaladas (`npm install`)

## 📝 Estrutura de Arquivos

```
megaclean-system/
├── public/              # Código fonte do frontend
│   ├── js/
│   │   ├── config.js   # Configuração da API (será substituída no build)
│   │   ├── api-helper.js # Helper para chamadas de API
│   │   └── app.js       # App principal
│   └── ...
├── dist/                # Build de produção (gerado)
├── build-frontend.js    # Script de build
└── package.json         # Scripts npm
```

## 🔄 Atualizações

Para atualizar o frontend:

1. Faça alterações no código em `public/`
2. Execute `npm run build:frontend` localmente ou deixe o Render fazer o build
3. O Render fará deploy automático se estiver conectado ao Git

## 📚 Referências

- [Render Static Sites](https://render.com/docs/static-sites)
- [CORS Configuration](https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS)
