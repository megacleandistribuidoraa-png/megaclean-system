# ✅ CORS Configurado no Backend

## 🎯 O Que Foi Feito

Configurei o CORS no `server.js` para permitir requisições do frontend.

---

## 📝 Alterações Realizadas

### Antes:
```javascript
app.use(cors());
```

### Depois:
```javascript
// Configurar CORS para permitir requisições do frontend
const allowedOrigins = [
  'https://erp-system-frontend-st0x.onrender.com', // URL do frontend no Render
  process.env.FRONTEND_URL, // Variável de ambiente (opcional)
  'http://localhost:3000', // Para desenvolvimento local
  'http://localhost:5000'  // Se usar outra porta local
].filter(Boolean); // Remove valores undefined/null

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

---

## ⚠️ Importante: Verificar URL do Frontend

A URL configurada é: `https://erp-system-frontend-st0x.onrender.com`

**Se a URL do seu frontend for diferente**, você precisa:

1. **Encontrar a URL real do frontend** no Render Dashboard
2. **Editar o server.js** na linha 27
3. **Substituir** pela URL correta

**Ou** configure uma variável de ambiente no Render:
- **Key**: `FRONTEND_URL`
- **Value**: `https://sua-url-real.onrender.com`

---

## 🚀 Próximos Passos

### 1. Verificar URL do Frontend

No Render Dashboard:
1. Abra o Static Site `erp-system-frontend`
2. Copie a URL que aparece no topo
3. Se for diferente de `erp-system-frontend-st0x.onrender.com`, atualize no código

### 2. Fazer Commit e Push

```bash
git add server.js
git commit -m "fix: configurar CORS para frontend no Render"
git push
```

### 3. Aguardar Deploy Automático

O Render fará deploy automático do backend (2-5 minutos)

### 4. Testar

1. Acesse o frontend
2. Abra DevTools (F12) → Console
3. Tente fazer login
4. Verifique se não há erros de CORS

---

## ✅ Checklist

- [x] CORS configurado no server.js
- [ ] URL do frontend verificada e atualizada (se necessário)
- [ ] Commit e push feito
- [ ] Backend deployado
- [ ] Frontend testado
- [ ] Login funcionando
- [ ] Sem erros de CORS

---

## 🎯 Resultado Esperado

Após fazer commit e push:

- ✅ Backend aceita requisições do frontend
- ✅ Sem erros de CORS no console
- ✅ Login funciona
- ✅ Todas as chamadas de API funcionam

---

**Próximo passo**: Verificar URL do frontend e fazer commit! 🚀
