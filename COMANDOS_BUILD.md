# 🚀 Comandos Rápidos - Build e Deploy Frontend

## 📦 Build Local

```bash
# Build com URL padrão (/api - para desenvolvimento)
npm run build:frontend

# Build com URL customizada do backend
API_URL=https://seu-backend.onrender.com/api npm run build:frontend
```

## 🧪 Testar Localmente

```bash
# Após o build, testar localmente
cd dist
npx serve .

# Ou com porta específica
npx serve . -p 3000
```

## 🌐 Deploy no Render

### Opção 1: Via Interface Web

1. Acesse [Render Dashboard](https://dashboard.render.com)
2. **New +** → **Static Site**
3. Conecte repositório Git
4. Configure:
   - **Name**: `megaclean-frontend`
   - **Build Command**: `npm install && API_URL=${API_URL} npm run build:frontend`
   - **Publish Directory**: `dist`
   - **Environment Variable**: 
     - Key: `API_URL`
     - Value: `https://seu-backend.onrender.com/api`

### Opção 2: Via render-static.yaml

1. Edite `render-static.yaml` e substitua a URL do backend
2. No Render Dashboard, crie Static Site
3. O Render detectará automaticamente o arquivo

## 🔧 Verificar Build

```bash
# Verificar se config.js foi atualizado
cat dist/js/config.js

# Deve mostrar: window.API_BASE_URL = 'https://seu-backend.onrender.com/api';
```

## 📝 Checklist Rápido

- [ ] Backend rodando no Render
- [ ] URL do backend anotada
- [ ] Build executado com sucesso
- [ ] Teste local funcionando
- [ ] Static Site criado no Render
- [ ] Variável API_URL configurada
- [ ] CORS configurado no backend
- [ ] Deploy concluído
- [ ] Teste de login funcionando

## 🐛 Problemas Comuns

### Build falha
```bash
# Verificar Node.js
node --version

# Limpar e reinstalar
rm -rf node_modules dist
npm install
npm run build:frontend
```

### Erro de CORS
- Verificar se backend aceita requisições do domínio do frontend
- Verificar URL da API no config.js

### 404 nas chamadas
- Verificar se API_URL está correta
- Verificar se backend está rodando
- Verificar Network tab no DevTools
