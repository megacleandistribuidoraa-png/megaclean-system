# 🔒 Como Configurar CORS no Backend

Este guia mostra como configurar o CORS no backend para permitir requisições do frontend hospedado no Render.

## 🎯 Objetivo

Permitir que o frontend (hospedado em um domínio) faça requisições ao backend (hospedado em outro domínio).

## 📍 Onde Configurar

Edite o arquivo `server.js` do seu backend.

## 🔧 Método 1: CORS Específico (Recomendado)

### Passo 1: Encontrar a configuração de CORS

Abra o arquivo `server.js` e procure por:

```javascript
app.use(cors());
```

### Passo 2: Substituir pela configuração específica

Substitua a linha acima por:

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

### Passo 3: Atualizar a URL do frontend

**IMPORTANTE**: Substitua `https://megaclean-frontend.onrender.com` pela URL real do seu frontend no Render.

Para encontrar a URL:
1. Acesse o Render Dashboard
2. Abra seu Static Site (frontend)
3. Copie a URL que aparece no topo (algo como `https://megaclean-frontend.onrender.com`)

### Passo 4: Fazer commit e push

```bash
git add server.js
git commit -m "Configurar CORS para frontend no Render"
git push
```

O Render fará deploy automático do backend.

---

## 🔧 Método 2: CORS Permissivo (Apenas para Desenvolvimento)

⚠️ **ATENÇÃO**: Use apenas em desenvolvimento! Não use em produção.

```javascript
app.use(cors({
  origin: '*', // Permite qualquer origem
  credentials: true
}));
```

---

## 🔧 Método 3: CORS com Variável de Ambiente

Para maior flexibilidade, você pode usar variáveis de ambiente:

### No server.js:

```javascript
const allowedOrigins = [
  process.env.FRONTEND_URL || 'http://localhost:3000',
  'http://localhost:3000',
  'http://localhost:5000'
];

// Se houver variável de ambiente, adiciona à lista
if (process.env.FRONTEND_URL) {
  allowedOrigins.push(process.env.FRONTEND_URL);
}

app.use(cors({
  origin: function (origin, callback) {
    if (!origin) return callback(null, true);
    
    if (allowedOrigins.indexOf(origin) !== -1) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  credentials: true
}));
```

### No Render (Environment Variables):

Adicione uma variável:
- **Key**: `FRONTEND_URL`
- **Value**: `https://megaclean-frontend.onrender.com`

---

## ✅ Verificar se Funcionou

### 1. Teste no Navegador

1. Acesse o frontend: `https://megaclean-frontend.onrender.com`
2. Abra o DevTools (F12)
3. Vá na aba **Console**
4. Tente fazer login
5. Verifique se não há erros de CORS

### 2. Verificar Headers

1. No DevTools, vá na aba **Network**
2. Faça uma requisição (ex: login)
3. Clique na requisição
4. Verifique os headers de resposta:
   - Deve ter `Access-Control-Allow-Origin: https://megaclean-frontend.onrender.com`
   - Deve ter `Access-Control-Allow-Credentials: true`

### 3. Teste com curl (Opcional)

```bash
curl -H "Origin: https://megaclean-frontend.onrender.com" \
     -H "Access-Control-Request-Method: POST" \
     -H "Access-Control-Request-Headers: Content-Type" \
     -X OPTIONS \
     https://seu-backend.onrender.com/api/login
```

Deve retornar headers de CORS.

---

## 🐛 Problemas Comuns

### Erro: "Access-Control-Allow-Origin"

**Causa**: A URL do frontend não está na lista de origens permitidas.

**Solução**: 
1. Verifique se a URL está correta no array `allowedOrigins`
2. Verifique se não há diferença entre `http://` e `https://`
3. Verifique se não há barra `/` no final da URL

### Erro: "Credentials not allowed"

**Causa**: `credentials: true` no CORS, mas o frontend não está enviando `credentials: true` no fetch.

**Solução**: 
No frontend, ao fazer fetch, adicione:
```javascript
fetch(url, {
  credentials: 'include',
  // ... outras opções
});
```

### Erro: "Preflight request failed"

**Causa**: O backend não está respondendo corretamente às requisições OPTIONS.

**Solução**: 
Certifique-se de que o CORS está configurado antes de todas as rotas:
```javascript
app.use(cors({...})); // Deve vir ANTES das rotas
app.use(express.json());
// ... rotas aqui
```

---

## 📝 Exemplo Completo

Aqui está um exemplo completo de `server.js` com CORS configurado:

```javascript
const express = require('express');
const cors = require('cors');
const path = require('path');
require('dotenv').config();

const app = express();

// Configurar CORS
const allowedOrigins = [
  'https://megaclean-frontend.onrender.com',
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

// ... suas rotas aqui ...

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`🚀 Servidor rodando na porta ${PORT}`);
});
```

---

## ✅ Checklist

- [ ] CORS configurado no `server.js`
- [ ] URL do frontend adicionada em `allowedOrigins`
- [ ] `credentials: true` configurado
- [ ] Código commitado e enviado ao Git
- [ ] Backend fez deploy no Render
- [ ] Testado no navegador (sem erros de CORS)
- [ ] Headers de CORS verificados no Network tab

---

**Última atualização**: $(Get-Date -Format "dd/MM/yyyy")
