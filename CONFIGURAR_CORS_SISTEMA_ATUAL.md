# 🔒 Configurar CORS - Sistema Atual (MegaClean)

## 🎯 Objetivo

Configurar CORS no backend atual para permitir requisições do frontend hospedado no Render.

---

## 📍 Situação Atual

- **Backend**: `https://megaclean-system.onrender.com/api`
- **Frontend**: `https://megaclean-frontend.onrender.com` (ou URL gerada)
- **Necessário**: Configurar CORS para permitir requisições do frontend

---

## 🔧 Passo a Passo

### 1. Encontrar o Arquivo server.js

No seu projeto local, abra o arquivo:
```
server.js
```

### 2. Localizar Configuração de CORS

Procure pela linha:
```javascript
app.use(cors());
```

Geralmente está no início do arquivo, após as importações.

### 3. Substituir por Configuração Específica

**Substitua:**
```javascript
app.use(cors());
```

**Por:**
```javascript
// Lista de origens permitidas
const allowedOrigins = [
  'https://megaclean-frontend.onrender.com', // URL do seu frontend no Render
  'http://localhost:3000',                    // Para desenvolvimento local
  'http://localhost:5000'                     // Se usar outra porta local
];

app.use(cors({
  origin: function (origin, callback) {
    // Permitir requisições sem origin (mobile apps, Postman, curl, etc)
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

### 4. Atualizar URL do Frontend

⚠️ **IMPORTANTE**: Substitua `megaclean-frontend.onrender.com` pela URL real do seu frontend!

**Para encontrar a URL do frontend:**
1. Acesse Render Dashboard
2. Abra seu Static Site (frontend)
3. Copie a URL que aparece no topo
4. Cole no array `allowedOrigins`

**Exemplo:**
Se sua URL for `https://megaclean-frontend-xyz123.onrender.com`, use:
```javascript
const allowedOrigins = [
  'https://megaclean-frontend-xyz123.onrender.com',
  'http://localhost:3000',
  'http://localhost:5000'
];
```

### 5. Fazer Commit e Push

```bash
# Adicionar alteração
git add server.js

# Fazer commit
git commit -m "fix: configurar CORS para frontend no Render"

# Enviar para GitHub
git push
```

### 6. Aguardar Deploy Automático

O Render detectará a mudança e fará deploy automático do backend.

**Tempo estimado**: 2-5 minutos

---

## ✅ Verificar se Funcionou

### 1. Testar no Navegador

1. Acesse o frontend: `https://megaclean-frontend.onrender.com`
2. Abra DevTools (F12)
3. Vá na aba **Console**
4. Tente fazer login
5. **Não deve aparecer erros de CORS**

### 2. Verificar Headers

1. No DevTools, vá na aba **Network**
2. Faça uma requisição (ex: login)
3. Clique na requisição
4. Verifique os headers de resposta:
   - Deve ter: `Access-Control-Allow-Origin: https://megaclean-frontend.onrender.com`
   - Deve ter: `Access-Control-Allow-Credentials: true`

### 3. Testar Endpoint Diretamente

```bash
# Teste com curl (opcional)
curl -H "Origin: https://megaclean-frontend.onrender.com" \
     -H "Access-Control-Request-Method: POST" \
     -H "Access-Control-Request-Headers: Content-Type" \
     -X OPTIONS \
     https://megaclean-system.onrender.com/api/login
```

Deve retornar headers de CORS.

---

## 🐛 Troubleshooting

### Erro: "Not allowed by CORS"

**Causa**: URL do frontend não está na lista de origens permitidas.

**Solução**:
1. Verifique se a URL está correta no array `allowedOrigins`
2. Verifique se não há diferença entre `http://` e `https://`
3. Verifique se não há barra `/` no final da URL
4. Faça push novamente e aguarde deploy

### Erro: "Credentials not allowed"

**Causa**: `credentials: true` no CORS, mas frontend não está enviando.

**Solução**: 
O código atual já deve estar enviando. Se não, verifique se o fetch no frontend inclui:
```javascript
fetch(url, {
  credentials: 'include',
  // ... outras opções
});
```

### Erro: "Preflight request failed"

**Causa**: Backend não está respondendo corretamente às requisições OPTIONS.

**Solução**: 
Certifique-se de que o CORS está configurado **ANTES** de todas as rotas:
```javascript
app.use(cors({...})); // Deve vir ANTES
app.use(express.json());
// ... rotas aqui
```

---

## 📝 Exemplo Completo

Aqui está um exemplo completo de como deve ficar no `server.js`:

```javascript
const express = require('express');
const cors = require('cors');
const path = require('path');
require('dotenv').config();

const app = express();

// Configurar CORS
const allowedOrigins = [
  'https://megaclean-frontend.onrender.com', // ⚠️ Substitua pela URL real
  'http://localhost:3000'
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

app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

// ... resto do código (rotas, etc) ...
```

---

## ✅ Checklist

- [ ] Arquivo `server.js` editado
- [ ] CORS configurado com lista de origens
- [ ] URL do frontend adicionada em `allowedOrigins`
- [ ] `credentials: true` configurado
- [ ] Código commitado e enviado ao Git
- [ ] Backend fez deploy no Render
- [ ] Testado no navegador (sem erros de CORS)
- [ ] Headers de CORS verificados no Network tab

---

## 🎯 Resultado Esperado

Após configurar:

- ✅ Frontend consegue fazer requisições ao backend
- ✅ Sem erros de CORS no console
- ✅ Login funciona corretamente
- ✅ Todas as chamadas de API funcionam
- ✅ Headers de CORS presentes nas respostas

---

**Status**: ⏸️ Aguardando confirmação para aplicar
