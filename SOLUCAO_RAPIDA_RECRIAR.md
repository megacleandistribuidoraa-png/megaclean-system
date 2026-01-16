# ⚡ Solução Rápida - Recriar Static Site

## 🎯 Se Não Conseguir Editar

### Opção Mais Rápida: Deletar e Recriar

---

## 🗑️ 1. Deletar o Atual

1. Render Dashboard → Clique em `erp-system-frontend`
2. **Settings** (menu lateral)
3. Role até o final
4. **"Delete Service"** ou **"Danger Zone"**
5. Confirmar exclusão

---

## ➕ 2. Criar Novo

1. **New +** → **Static Site**
2. Conectar: `megacleandistribuidoraa-png / Zentra-Tech` (ou seu repo)
3. Branch: `main`

---

## ⚙️ 3. Configurar

**Name:**
```
erp-system-frontend
```

**Build Command:**
```
npm install && API_URL=${API_URL} npm run build
```
⚠️ Use `build` (não `build:frontend`)

**Publish Directory:**
```
dist
```

**Environment Variable:**
```
Key: API_URL
Value: https://megaclean-system.onrender.com/api
```

---

## 🚀 4. Deploy

1. **Create Static Site**
2. Aguardar build

---

## ✅ Por Que Funciona

- Script `build` já existe no package.json
- Mais simples que `build:frontend`
- Menos chance de erro

---

**Tempo total**: 5-10 minutos (deletar + criar + deploy)
