# ⚡ Resumo Rápido - Deploy no Render

## 🎯 Em 5 Passos

### 1️⃣ Acessar Render Dashboard
👉 [dashboard.render.com](https://dashboard.render.com) → Login

### 2️⃣ Criar Static Site
👉 **New +** → **Static Site** → Conectar repositório Git

### 3️⃣ Configurar

| Campo | Valor |
|-------|-------|
| **Name** | `megaclean-frontend` |
| **Build Command** | `npm install && API_URL=${API_URL} npm run build:frontend` |
| **Publish Directory** | `dist` |
| **Environment Variable** | `API_URL` = `https://seu-backend.onrender.com/api` |

⚠️ **Substitua** `seu-backend.onrender.com` pela URL real do seu backend!

### 4️⃣ Criar e Aguardar
👉 **Create Static Site** → Aguardar build (2-5 min)

### 5️⃣ Configurar CORS no Backend
👉 Editar `server.js` → Adicionar URL do frontend no CORS

---

## 📋 Checklist Rápido

- [ ] Repositório no Git
- [ ] Backend rodando no Render
- [ ] URL do backend anotada
- [ ] Static Site criado
- [ ] Variável `API_URL` configurada
- [ ] CORS configurado no backend
- [ ] Frontend testado

---

## 🔗 Links Úteis

- **Guia Completo**: `PASSO_A_PASSO_RENDER.md`
- **Configurar CORS**: `CONFIGURAR_CORS_BACKEND.md`
- **Comandos**: `COMANDOS_BUILD.md`

---

## 🆘 Problemas?

1. **Build falha** → Verificar logs no Render
2. **Erro CORS** → Verificar `CONFIGURAR_CORS_BACKEND.md`
3. **404 nas APIs** → Verificar se `API_URL` está correta
